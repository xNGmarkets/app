"use client";
import Button from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { useModalContext } from "@/context/modalContext";
import React from "react";
import { QtyInput } from "../markets/details/trade/tradeTypes";
import Field from "@/components/ui/field";
import { MarketPrice } from "../markets/table/marketPrice";
import { RewardIcon } from "@/public/svgs";
import { SupplyTypes } from "@/types/martkes";

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
          <form action="" className="!space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-grey-700 !text-sm">
                  Amount to supply (USDC)
                </p>
                <small className="text-grey-900">Available: 250,000 USDC</small>
              </div>
              <QtyInput />
            </div>

            <div className="bg-grey-25 space-y-3 rounded-lg p-3">
              <Field
                title="Deposit APY"
                value="7.2%"
                valueClassName="text-end"
              />
              <Field
                title="Utilization"
                value="41%"
                valueClassName="text-end"
              />
              <Field
                title="Pool supply"
                value={<MarketPrice price={391527000} className="text-end" />}
              />
              <Field
                title="Pool borrows"
                value={<MarketPrice price={160650000} className="text-end" />}
              />
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
export const SupplyWithdrawalAction = () => {
  const { openModal, isOpen } = useModalContext();
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
          subtitle="You are about to withdraw supplied"
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-xl"
        >
          <form action="" className="space-y-4">
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-grey-700 !text-sm">
                  Amount to withdraw (USDC)
                </p>
                <small className="text-grey-900">Available: 250,000 USDC</small>
              </div>
              <QtyInput />
            </div>
            <DialogFooter className="!mb-0">
              <DialogClose asChild>
                <Button className="outline-btn w-full">Cancel</Button>
              </DialogClose>
              <Button className="pry-btn w-full">Withdraw</Button>
            </DialogFooter>
          </form>
        </ModalWrapper>
      )}
    </div>
  );
};

export const SupplyClaimAction = ({ data }: { data: SupplyTypes }) => {
  const { openModal, isOpen } = useModalContext();
  return (
    <div>
      <Button
        className="outline-btn w-full md:w-fit"
        onClick={() => openModal(`supply-clain ${data?.id}`)}
      >
        Claim
      </Button>

      {isOpen[`supply-clain ${data?.id}`] && (
        <ModalWrapper
          id={`supply-clain ${data?.id}`}
          title="Claim reward"
          subtitle={
            <>
              You are about to claim <b>$0.5 </b>in rewards
            </>
          }
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-xl"
          icon={<RewardIcon />}
        >
          <DialogFooter className="!mb-0">
            <DialogClose asChild>
              <Button className="outline-btn w-full">Cancel</Button>
            </DialogClose>
            <Button className="pry-btn w-full">Claim</Button>
          </DialogFooter>
        </ModalWrapper>
      )}
    </div>
  );
};
