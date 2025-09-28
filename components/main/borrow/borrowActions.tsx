"use client";
import { addBorrowRecord, updateBorrowRecord } from "@/app/actions/borrow";
import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { CustomSelect } from "@/components/ui/select/customSelect";
import BORROW_AND_SUPPLY_ABI from "@/config/abis/borrowAndSupply.abi";
import {
  BORROW_SUPPLY_CONTRACT,
  USDC_XNG_CONTRACT,
} from "@/constants/contracts";
import { useModalContext } from "@/context/modalContext";
import { approveTokenForSpend } from "@/helper";
import useBandPrice from "@/hooks/useBandPrice";
import useGetTokenBalance from "@/hooks/useGetTokenBalance";
import useLiquidation from "@/hooks/useLiquidation";
import useLTV from "@/hooks/useLTV";
import { BorrowTypes } from "@/types/market";
import { StockProps } from "@/types/stock";
import { parseUnits } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useAccount, useWriteContract } from "wagmi";
import { CustomQuantityInput } from "../markets/details/trade/tradeTypes";
import { MarketPrice } from "../markets/table/marketPrice";

export const BorrowUSDCAction = ({ stocks }: { stocks: StockProps[] }) => {
  const { openModal, isOpen, closeModal } = useModalContext();
  const { isPending, writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const [collateralToken, setCollateralToken] = useState("");
  const [units, setUnits] = useState(1);
  const [amountToBorrow, setAmountToBorrow] = useState(0);
  const [isApprovingTokenSpend, setIsApprovingTokenSpend] = useState(false);
  const { balance: tokenBalance } = useGetTokenBalance(collateralToken, 6);
  const ltv = useLTV();
  const { price } = useBandPrice(collateralToken);
  const liquidation = useLiquidation();

  useEffect(() => {
    if (Number(tokenBalance)) {
      setUnits(Number(tokenBalance));
    }
  }, [tokenBalance]);

  const maxBorrowAmount = useMemo(() => {
    if (price && ltv) {
      return units * price * (ltv / 100);
    }
    return 0;
  }, [price, ltv, units]);

  useEffect(() => {
    if (maxBorrowAmount) {
      setAmountToBorrow(maxBorrowAmount);
    }
  }, [maxBorrowAmount]);

  const liquidationPrice = useMemo(() => {
    if (price && liquidation) {
      // setAmountToBorrow();
      return units * price * (liquidation / 100);
    }
    return 0;
  }, [price, units, liquidation]);

  const tokens = useMemo(() => {
    return stocks.map((stock) => ({
      label: stock.ticker,
      value: stock.evmAddress,
    }));
  }, [stocks]);

  const isDisabled = useMemo(() => {
    return (
      !Number(tokenBalance) ||
      units > Number(tokenBalance) ||
      isApprovingTokenSpend ||
      !amountToBorrow ||
      amountToBorrow > maxBorrowAmount
    );
  }, [
    tokenBalance,
    units,
    isApprovingTokenSpend,
    amountToBorrow,
    maxBorrowAmount,
  ]);

  const borrowHandler = async () => {
    try {
      setIsApprovingTokenSpend(true);
      const qtyE6 = parseUnits(units.toString(), 6);
      const amountToBorrowFormatted = parseUnits(amountToBorrow.toString(), 6);
      await approveTokenForSpend(
        collateralToken,
        qtyE6,
        BORROW_SUPPLY_CONTRACT,
      );

      //lock collateral
      const lock_response = await writeContractAsync({
        address: BORROW_SUPPLY_CONTRACT,
        abi: BORROW_AND_SUPPLY_ABI,
        functionName: "lockCollateral",
        args: [collateralToken, qtyE6],
      });

      if (!lock_response) {
        return;
      }

      //borrow
      const response = await writeContractAsync({
        address: BORROW_SUPPLY_CONTRACT,
        abi: BORROW_AND_SUPPLY_ABI,
        functionName: "borrow",
        args: [amountToBorrowFormatted, [], []],
      });

      console.log("borrow response", response);

      if (response) {
        await addBorrowRecord({
          amount: units * price,
          usdcDebt: amountToBorrow,
          units,
          userAddress: address as string,
          ltv,
        });
        toast.success("Successfully borrow USDC!", {
          className: "toast-success",
        });
        closeModal("borrow");
        return;
      }
      toast.error("Failed to supply USDC!", {
        className: "toast-error",
      });
    } catch (error) {
      console.error("borrow failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(err.shortMessage || err.message || "Failed to borrow USDC!", {
        className: "toast-error",
      });
    } finally {
      setIsApprovingTokenSpend(false);
      setUnits(1);
      setAmountToBorrow(0);
    }
  };

  return (
    <div>
      <Button
        className="pry-btn w-full md:w-fit"
        onClick={() => openModal("borrow")}
      >
        Borrow USDC
      </Button>

      {isOpen["borrow"] && (
        <>
          <span className="fixed top-0 left-0 z-50 block h-full w-full bg-white/10 !backdrop-blur-xs" />
          <ModalWrapper
            id="borrow"
            title="Open a loan"
            subtitle="Borrow USDC against xNGX stocks"
            titleClass="!text-2xl font-semibold"
            headerClass="justify-center items-center gap-2"
            wrapperClass="!max-w-[28.125rem] !pt-[1.875rem]"
            modal={false}
          >
            <div className="space-y-5">
              <div className="space-y-4.5">
                <div>
                  <CustomSelect
                    label=" Collateral token"
                    name="collateral"
                    options={tokens}
                    defaultValue={collateralToken}
                    onChange={(e) => setCollateralToken(e)}
                    contentsClassName="w-[25rem] max-w-full !z-50"
                  />
                  {!Number(tokenBalance) && collateralToken ? (
                    <p className="!mt-2 !text-xs !text-red-500">
                      Balance of asset selected is zero
                    </p>
                  ) : null}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-grey-700 mb-2 block !text-sm">
                      Select units to lock
                    </span>
                    <span className="flex items-center space-x-1 !text-sm">
                      <span>{Number(tokenBalance)}</span>
                      <button
                        className="text-primary"
                        onClick={() => setUnits(Number(tokenBalance))}
                      >
                        Max Units
                      </button>
                    </span>
                  </div>
                  <CustomQuantityInput
                    minimum={1}
                    maximum={Number(tokenBalance)}
                    setQuantity={setUnits}
                    quantity={units}
                  />
                  {Number(tokenBalance) &&
                  collateralToken &&
                  units > Number(tokenBalance) ? (
                    <p className="!mt-2 !text-xs !text-red-500">
                      Units entered is greater than asset balance
                    </p>
                  ) : null}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-grey-700 mb-2 block !text-sm">
                      Borrow amount (USDC)
                    </span>
                    <span className="flex items-center space-x-1 !text-sm">
                      <span>{maxBorrowAmount.toLocaleString()}</span>
                      <button
                        className="text-primary"
                        onClick={() => setAmountToBorrow(maxBorrowAmount)}
                      >
                        Max Units
                      </button>
                    </span>
                  </div>
                  <CustomQuantityInput
                    setQuantity={setAmountToBorrow}
                    quantity={amountToBorrow}
                    maximum={maxBorrowAmount}
                  />
                  <p className="!mt-2 !text-xs !text-gray-700">
                    All your xNGX tokens count as collateral automatically. We
                    lock what’s needed for this loan.
                  </p>
                  {amountToBorrow > maxBorrowAmount ? (
                    <p className="!mt-2 !text-xs !text-red-500">
                      Borrow amount is greater than max borrow
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="bg-grey-25 space-y-3 rounded-lg p-3">
                <Field
                  title="Your LTV"
                  value={`${ltv}%`}
                  valueClassName="text-end"
                />
                <Field
                  title="Est. liquidation price"
                  value={
                    <MarketPrice price={liquidationPrice} forceCurrency="$" />
                  }
                  valueClassName="text-end"
                />
                <Field
                  title="Borrow capacity"
                  value={
                    <MarketPrice price={maxBorrowAmount} forceCurrency="$" />
                  }
                  valueClassName="text-end"
                />
              </div>

              <DialogFooter className="!mb-0">
                <Button
                  className="pry-btn w-full"
                  disabled={isDisabled}
                  onClick={borrowHandler}
                >
                  {isPending || isApprovingTokenSpend
                    ? "Borrowing USDC..."
                    : "Borrow USDC"}
                </Button>
              </DialogFooter>
            </div>
          </ModalWrapper>
        </>
      )}
    </div>
  );
};

export const BorrowRepayAction = ({ record }: { record: BorrowTypes }) => {
  const { openModal, isOpen, closeModal } = useModalContext();
  const { isPending, writeContractAsync } = useWriteContract();
  const [isApprovingTokenSpend, setIsApprovingTokenSpend] = useState(false);

  const repayHandler = async () => {
    try {
      const amountToRepay = parseUnits(record.usdcDebt.toString(), 6);
      setIsApprovingTokenSpend(true);

      await approveTokenForSpend(
        USDC_XNG_CONTRACT,
        amountToRepay,
        BORROW_SUPPLY_CONTRACT,
      );

      const response = await writeContractAsync({
        address: BORROW_SUPPLY_CONTRACT,
        abi: BORROW_AND_SUPPLY_ABI,
        functionName: "repay",
        args: [amountToRepay],
      });

      if (response) {
        await updateBorrowRecord(record?._id, true);
        toast.success("Successfully repaid USDC loan!", {
          className: "toast-success",
        });
        closeModal("repay");
        return;
      }
      toast.error("Failed to repay USDC loan!", {
        className: "toast-error",
      });
    } catch (error) {
      console.error("repayment failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(
        err.shortMessage || err.message || "Failed to repay USDC loan!",
        {
          className: "toast-error",
        },
      );
    } finally {
      setIsApprovingTokenSpend(false);
    }
  };

  return (
    <div>
      <Button
        className="pry-btn mr-0 ml-auto w-full md:w-fit"
        onClick={() => openModal("repay")}
        disabled={record.isRepaid}
      >
        {record.isRepaid ? "Repaid" : "Repay"}
      </Button>

      {isOpen["repay"] && (
        <ModalWrapper
          id="repay"
          title="Repay"
          subtitle="You are about to repay borrowed USDC"
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-[28.125rem]"
        >
          <div className="space-y-4">
            <span className="block text-center !text-2xl font-semibold">
              {record.usdcDebt} USDC
            </span>
            <DialogFooter className="!mb-0">
              <Button
                className="pry-btn w-full"
                disabled={isPending || isApprovingTokenSpend}
                onClick={repayHandler}
              >
                {isPending || isApprovingTokenSpend ? "Repaying..." : "Repay"}
              </Button>
            </DialogFooter>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};
