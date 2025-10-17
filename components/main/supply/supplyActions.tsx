"use client";
import { addSupplyRecord } from "@/app/actions/supply";
import Button from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import BORROW_AND_SUPPLY_ABI from "@/config/abis/borrowAndSupply.abi";
import {
  BORROW_SUPPLY_CONTRACT,
  USDC_XNG_CONTRACT,
} from "@/constants/contracts";
import { useModalContext } from "@/context/modalContext";
import { approveTokenForSpend } from "@/helper";
import useGetPortfolio from "@/hooks/useGetPortfolio";
import useGetTokenBalance from "@/hooks/useGetTokenBalance";
import usePriceAndQuantity from "@/store/usePriceAndQuantity.store";
import React, { useState } from "react";
import { toast } from "sonner";
import { parseUnits } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { QtyInput } from "../markets/details/trade/tradeTypes";

export const SupplyUSDCAction = () => {
  const { balance } = useGetTokenBalance(USDC_XNG_CONTRACT, 6);
  const { quantity, setQuantity } = usePriceAndQuantity();
  const { isPending, writeContractAsync } = useWriteContract();
  const [isApprovingTokenSpend, setIsApprovingTokenSpend] = useState(false);
  const { address } = useAccount();
  const { reset } = useGetPortfolio();

  const supplyHandler = async () => {
    try {
      const amountToSupply = parseUnits(quantity.toString(), 6);
      setIsApprovingTokenSpend(true);
      await approveTokenForSpend(
        USDC_XNG_CONTRACT,
        amountToSupply,
        BORROW_SUPPLY_CONTRACT,
      );
      const response = await writeContractAsync({
        address: BORROW_SUPPLY_CONTRACT,
        abi: BORROW_AND_SUPPLY_ABI,
        functionName: "supply",
        args: [amountToSupply],
      });

      if (response) {
        await addSupplyRecord({
          userAddress: address as string,
          amount: quantity,
        });
        toast.success("Successfully supplied USDC!", {
          className: "toast-success",
        });
        reset();
        return;
      }
      toast.error("Failed to supply USDC!", {
        className: "toast-error",
      });
    } catch (error) {
      console.error("supply failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(err.shortMessage || err.message || "Failed to supply USDC!", {
        className: "toast-error",
      });
    } finally {
      setIsApprovingTokenSpend(false);
      setQuantity(0);
    }
  };

  return (
    <div className="card w-full p-4">
      <div className="!space-y-8">
        <div>
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-grey-700 !text-base">Supply USDC</p>
            <small className="text-grey-900 !text-sm">
              Available: {Number(balance).toLocaleString()} USDC
            </small>
          </div>
          <QtyInput />
        </div>

        <Button
          onClick={supplyHandler}
          className="pry-btn w-full"
          disabled={
            !quantity ||
            !Number(balance) ||
            quantity > Number(balance) ||
            isPending ||
            isApprovingTokenSpend
          }
        >
          {isPending || isApprovingTokenSpend
            ? "Supplying USDC..."
            : "Supply USDC"}
        </Button>
      </div>
    </div>
  );
};

export const SupplyWithdrawalAction = () => {
  const { openModal, isOpen, closeModal } = useModalContext();
  const { lenderBalance, reset } = useGetPortfolio();
  const { quantity, setQuantity } = usePriceAndQuantity();
  const { isPending, writeContractAsync } = useWriteContract();

  const withdrawHandler = async () => {
    try {
      const amountToWithdraw = parseUnits(quantity.toString(), 6);

      const response = await writeContractAsync({
        address: BORROW_SUPPLY_CONTRACT,
        abi: BORROW_AND_SUPPLY_ABI,
        functionName: "withdraw",
        args: [amountToWithdraw],
      });

      if (response) {
        toast.success("Successfully withdrew supplied USDC!", {
          className: "toast-success",
        });
        closeModal("supply-withdraw");
        reset();
        return;
      }
      toast.error("Failed to withdraw supplied USDC", {
        className: "toast-error",
      });
    } catch (error) {
      console.error("withdrawal failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(
        err.shortMessage || err.message || "Failed to withdraw supplied USDC!",
        {
          className: "toast-error",
        },
      );
    } finally {
      setQuantity(0);
    }
  };

  return (
    <div>
      <Button
        className="outline-btn w-full md:w-fit"
        onClick={() => openModal("supply-withdraw")}
      >
        Withdraw
      </Button>

      {isOpen["supply-withdraw"] && (
        <ModalWrapper
          id="supply-withdraw"
          title="Withdraw"
          subtitle="You are about to withdraw your supplied USDC"
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-[28.125rem]"
        >
          <div className="space-y-4">
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-grey-700 !text-sm">
                  Amount to withdraw (USDC)
                </p>
                <small className="text-grey-900">
                  Available: {lenderBalance?.toLocaleString()} USDC
                </small>
              </div>
              <QtyInput />
            </div>
            <DialogFooter className="!mb-0">
              <DialogClose asChild>
                <Button className="outline-btn w-full">Cancel</Button>
              </DialogClose>
              <Button
                className="pry-btn w-full"
                disabled={
                  isPending || !lenderBalance || quantity > lenderBalance
                }
                onClick={withdrawHandler}
              >
                {isPending ? "Withdrawing..." : "Withdraw"}
              </Button>
            </DialogFooter>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};
