"use client";
import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { useModalContext } from "@/context/modalContext";
import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import { QtyInput } from "../markets/details/trade/tradeTypes";
import { MarketPrice } from "../markets/table/marketPrice";

export const BorrowUSDCAction = () => {
  const { openModal, isOpen } = useModalContext();
  const { isPending } = useWriteContract();
  const [collateralToken, setCollateralToken] = useState("");

  return (
    <div>
      <Button
        className="pry-btn w-full md:w-fit"
        onClick={() => openModal("supply-borrow")}
      >
        Borrow USDC
      </Button>

      {isOpen["supply-borrow"] && (
        <ModalWrapper
          id="supply-borrow"
          title="Open a loan"
          subtitle="Borrow USDC against xNGX stocks"
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-[28.125rem] !pt-[1.875rem]"
        >
          <div className="space-y-5">
            <div className="space-y-4.5">
              <div>
                <CustomSelect
                  label=" Collateral token"
                  name="collateral"
                  options={[]}
                  defaultValue={collateralToken}
                  onChange={(e) => setCollateralToken(e)}
                />
              </div>
              <div>
                <span className="text-grey-700 mb-2 block !text-sm">
                  Select units to lock
                </span>
                <QtyInput />
              </div>
              <div>
                <span className="text-grey-700 mb-2 block !text-sm">
                  Borrow amount (USDC)
                </span>
                <QtyInput />
                <p className="!mt-2 !text-xs !text-gray-700">
                  All your xNGX tokens count as collateral automatically. We
                  lock what’s needed for this loan.
                </p>
              </div>
            </div>
            <div className="bg-grey-25 !mb-6 space-y-3 rounded-lg p-3">
              <Field
                title="Collateral token"
                value="0%"
                valueClassName="text-end"
              />
              <Field title="Your LTV" value="0%" valueClassName="text-end" />
              <Field title="Est. liquidation price" value="0" />
              <Field
                title="Borrow capacity remaining"
                value={<MarketPrice price={0} className="text-end" />}
              />
              <Field title="BAllowance left" value="0%" />
            </div>
            <DialogFooter className="!mb-0">
              <Button className="pry-btn w-full">
                {isPending ? "Borrowing..." : "Borrow USDC"}
              </Button>
            </DialogFooter>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};
