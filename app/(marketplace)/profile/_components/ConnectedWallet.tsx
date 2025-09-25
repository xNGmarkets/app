"use client";
import { shortenAddress } from "@/libs/utils";
import { allImages } from "@/public/images/images";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";

const ConnectedWallet = () => {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();

  const handleWalletButtonClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      openConnectModal?.();
    }
  };
  return (
    <li className="!text-grey-900 flex flex-wrap items-center justify-between gap-1 gap-y-2 !rounded p-1 !pb-2">
      <article className="flex items-center gap-2">
        <div className="bg-warning-50 !size-8 rounded-full" />
        <small className="text-grey-700">Connected wallet</small>
      </article>

      <article className="flex flex-wrap items-center justify-between gap-3">
        <div className="card flex items-center gap-2 p-3">
          <figure className="size-4">
            <Image src={allImages.metaMask} alt="" />
          </figure>
          <span>{address ? shortenAddress(address) : "~"}</span>
        </div>

        <button
          className="!text-primary text-xs"
          onClick={handleWalletButtonClick}
        >
          {isConnected ? "Disconnect" : "Connect"}
        </button>
      </article>
    </li>
  );
};

export default ConnectedWallet;
