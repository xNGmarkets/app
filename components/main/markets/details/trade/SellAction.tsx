"use client";

import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { SIDE } from "@/constants";
import { DIRECT_SETTLE_ADAPTER_CONTRACT } from "@/constants/contracts";
import { useModalContext } from "@/context/modalContext";
import { approveTokenForSpend, buyAndSellStock } from "@/helper";
import useExchangeRate from "@/hooks/useExchangeRate";
import usePriceAndQuantity from "@/store/usePriceAndQuantity.store";
import { StockProps } from "@/types/stock";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { LiaCheckCircleSolid, LiaCircle } from "react-icons/lia";
import { RiLoader2Line } from "react-icons/ri";
import { toast } from "sonner";
import { parseUnits } from "viem";
import { useAccount, useWalletClient } from "wagmi";
import { MarketPrice } from "../../table/marketPrice";

interface SellActionProps {
  stock: StockProps;
}

export const SellAction = ({ stock }: SellActionProps) => {
  const { isOpen, closeModal } = useModalContext();
  const { price, quantity } = usePriceAndQuantity();
  const [isSelling, setIsSelling] = useState(false);
  const [isTokenSpendApproved, setIsTokenSpendApproved] = useState(false);
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { openConnectModal } = useConnectModal();
  const rate = useExchangeRate();

  const resetAndClose = () => {
    setIsTokenSpendApproved(false);
    setIsSelling(false);
    closeModal("sell-asset");
  };

  const sellHandler = async () => {
    if (!stock?.evmAddress || !quantity || !price || !rate) return;
    setIsSelling(true);
    const amountToTrade = (price / rate) * quantity;
    const amountToTradeFormatted = parseUnits(amountToTrade.toString(), 6);

    try {
      if (!isTokenSpendApproved) {
        await approveTokenForSpend(
          stock.evmAddress,
          amountToTradeFormatted,
          DIRECT_SETTLE_ADAPTER_CONTRACT,
        );
      }
      setIsTokenSpendApproved(true);
      await buyAndSellStock(stock.evmAddress, price, quantity, SIDE.Sell);
      //close modal and reset
      toast.success("Sell order was placed successfully!", {
        className: "toast-success",
      });
      resetAndClose();
    } catch (error) {
      console.error("sell failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(
        err.shortMessage || err.message || "Failed to place sell order!",
        {
          className: "toast-error",
        },
      );
    } finally {
      setIsSelling(false);
    }
  };

  return (
    <>
      {isOpen["sell-asset"] && (
        <ModalWrapper
          id="sell-asset"
          title={`Sell ${stock?.ticker}`}
          subtitle="xNGX stocks"
          titleClass="!text-2xl font-semibold"
          headerClass="text-center justify-center items-center gap-2"
          wrapperClass="!max-w-xl space-y-3"
        >
          <div className="bg-grey-25 space-y-3 rounded-lg p-3">
            <Field
              title="Price"
              value={<MarketPrice price={price} className="text-end" />}
            />
            <Field
              title="Quantity"
              value={quantity.toString()}
              valueClassName="text-end"
            />
            <Field
              title="Total"
              value={
                <MarketPrice
                  price={price * quantity}
                  className="text-end font-bold"
                />
              }
            />
          </div>

          {isSelling ? (
            <div className="bg-grey-25 space-y-3 rounded-lg p-3">
              <Field
                title="Approving USDC token spend"
                value={
                  isTokenSpendApproved ? (
                    <LiaCheckCircleSolid size={20} className="text-primary" />
                  ) : (
                    <LiaCircle size={20} />
                  )
                }
              />
              <Field
                title="Placing order"
                value={
                  isTokenSpendApproved ? (
                    <RiLoader2Line
                      size={20}
                      className="text-shadow-primary animate-spin"
                    />
                  ) : (
                    <LiaCircle size={20} />
                  )
                }
              />
            </div>
          ) : null}

          <DialogFooter className="!mb-0">
            {isConnected ? (
              <Button
                onClick={sellHandler}
                disabled={isSelling || !walletClient}
                className="pry-btn w-full"
              >
                {isSelling ? "Processing..." : "Sell now"}
              </Button>
            ) : (
              <Button
                onClick={openConnectModal}
                className="pry-btn w-full"
                type="button"
              >
                Connect wallet
              </Button>
            )}
          </DialogFooter>
        </ModalWrapper>
      )}
    </>
  );
};
