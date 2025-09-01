"use client";
import Button from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { useModalContext } from "@/context/modalContext";
import React from "react";
import { QtyInput } from "../markets/details/trade/tradeTypes";

export const SupplyUSDCAction = () => {
  const { openModal, isOpen } = useModalContext();
  return (
    <div>
      <Button
        className="pry-btn w-full md:w-fit"
        onClick={() => openModal("supply-usdc")}
      >
        Supply USDC
      </Button>

      {isOpen["supply-usdc"] && (
        <ModalWrapper
          id="supply-usdc"
          title="Supply USDC"
          subtitle="Supply USDC for xNGX stocks"
          titleClass="!text-2xl font-semibold"
          headerClass="text-center justify-center items-center gap-2"
          wrapperClass="!max-w-xl"
        >
          <form action="" className="!space-y-3">
            <div>
              <div className="flex justify-between gap-2">
                <p className="text-grey-700 !text-sm">
                  Amount to supply (USDC)
                </p>
                <small className="text-grey-900">Available: 250,000 USDC</small>
              </div>
              <QtyInput />
            </div>

            <DialogFooter className="!mb-0">
              <Button className="pry-btn w-full">Supply USDC</Button>
            </DialogFooter>
          </form>
        </ModalWrapper>
      )}
    </div>
  );
};
