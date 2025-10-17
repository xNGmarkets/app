"use client";

import { checkTokenAssociation, grantKyc } from "@/app/actions/hashgraph";
import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { SIDE } from "@/constants";
import {
  DIRECT_SETTLE_ADAPTER_CONTRACT,
  USDC_XNG_CONTRACT,
} from "@/constants/contracts";
import { useModalContext } from "@/context/modalContext";
import { approveTokenForSpend, buyAndSellStock } from "@/helper";
import useExchangeRate from "@/hooks/useExchangeRate";
import useGetAccountID from "@/hooks/useGetAccountID";
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

interface BuyActionProps {
  stock: StockProps;
}

export const BuyAction = ({ stock }: BuyActionProps) => {
  const { isOpen, closeModal } = useModalContext();
  const { price, quantity } = usePriceAndQuantity();
  const [isBuying, setIsBuying] = useState(false);
  const [isAssociating, setIsAssociating] = useState(false);
  const [isAssociated, setIsAssociated] = useState(false);
  const [isKycGranted, setIsKycGranted] = useState(false);
  const [isTokenSpendApproved, setIsTokenSpendApproved] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { openConnectModal } = useConnectModal();
  const accountId = useGetAccountID();
  const rate = useExchangeRate();

  const resetAndClose = () => {
    setIsBuying(false);
    setIsTokenSpendApproved(false);
    closeModal("buy-asset");
  };

  async function handleAssociate() {
    try {
      if (!walletClient) {
        setIsBuying(false);
        return;
      }

      setIsAssociating(true);

      const isUsdcAssociated = await checkTokenAssociation(
        accountId,
        USDC_XNG_CONTRACT,
      );
      if (!isUsdcAssociated) {
        //usdc token association
        await walletClient.writeContract({
          address: USDC_XNG_CONTRACT,
          abi: [
            {
              name: "associate",
              type: "function",
              stateMutability: "nonpayable",
            },
          ],
          functionName: "associate",
        });
      }

      const isTokenAssociated = await checkTokenAssociation(
        accountId,
        stock.evmAddress as `0x${string}`,
      );

      if (isTokenAssociated) {
        setIsAssociated(isTokenAssociated && isUsdcAssociated);
        const kycGranted = await grantKyc(
          accountId,
          stock.evmAddress as `0x${string}`,
        );
        if (kycGranted) setIsKycGranted(true);
        return;
      }

      //token association
      await walletClient.writeContract({
        address: stock.evmAddress as `0x${string}`,
        abi: [
          {
            name: "associate",
            type: "function",
            stateMutability: "nonpayable",
          },
        ],
        functionName: "associate",
      });

      setIsAssociated(isTokenAssociated && isUsdcAssociated);
      const kycGranted = await grantKyc(
        accountId,
        stock.evmAddress as `0x${string}`,
      );
      if (kycGranted) setIsKycGranted(true);
    } catch (error) {
      console.error("Error during token association:", error);
    } finally {
      setIsAssociating(false);
    }
  }

  const buyHandler = async () => {
    if (!stock?.evmAddress || !quantity || !price) return;
    setIsBuying(true);
    const amountToTrade = Number((price / rate).toFixed(6));
    const amountToTradeFormatted = parseUnits(
      (amountToTrade * quantity).toString(),
      6,
    );

    try {
      // Associate the stock token with the user's wallet
      if (!isKycGranted && !isAssociated) {
        await handleAssociate();
      }
      // if (!isAssociated) {
      //   throw new Error("Token association failed");
      // }
      // if (!isKycGranted) {
      //   throw new Error("KYC grant failed");
      // }

      await approveTokenForSpend(
        USDC_XNG_CONTRACT,
        amountToTradeFormatted,
        DIRECT_SETTLE_ADAPTER_CONTRACT,
      );

      setIsTokenSpendApproved(true);
      setIsPlacingOrder(true);
      await buyAndSellStock(
        stock.evmAddress,
        amountToTrade,
        quantity,
        SIDE.Buy,
      );

      toast.success("Buy order was placed successfully!", {
        className: "toast-success",
      });
      resetAndClose();
    } catch (error) {
      console.error("buy failed:", error);
      const err = error as { shortMessage?: string; message?: string };
      toast.error(
        err.shortMessage || err.message || "Failed to place buy order!",
        {
          className: "toast-error",
        },
      );
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <>
      {isOpen["buy-asset"] && (
        <ModalWrapper
          id="buy-asset"
          title={`Buy ${stock?.ticker}`}
          subtitle="xNGX stocks"
          titleClass="!text-2xl font-semibold"
          headerClass="text-center justify-center items-center gap-2"
          wrapperClass="!max-w-xl space-y-3"
        >
          <div className="bg-grey-25 space-y-3 rounded-lg p-3">
            <Field
              title="Price"
              value={
                <MarketPrice
                  price={price}
                  showPriceInUsdc
                  className="text-end"
                />
              }
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
                  showPriceInUsdc
                  className="text-end font-bold"
                />
              }
            />

            <Field
              title="Rate"
              value={`₦${rate.toFixed(2)}/$`}
              valueClassName="text-end"
            />
          </div>

          {isBuying ? (
            <div className="bg-grey-25 space-y-3 rounded-lg p-3">
              <Field
                title="Associating asset"
                value={
                  isAssociated ? (
                    <LiaCheckCircleSolid size={20} className="text-primary" />
                  ) : isAssociating ? (
                    <RiLoader2Line
                      size={20}
                      className="text-shadow-primary animate-spin"
                    />
                  ) : (
                    <LiaCircle size={20} />
                  )
                }
              />
              <Field
                title="Granting KYC for asset"
                value={
                  isKycGranted ? (
                    <LiaCheckCircleSolid size={20} className="text-primary" />
                  ) : (
                    <LiaCircle size={20} />
                  )
                }
              />
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
                  isPlacingOrder ? (
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
                onClick={buyHandler}
                disabled={isBuying || !walletClient}
                className="pry-btn w-full"
              >
                {isBuying ? "Processing..." : "Buy now"}
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
