"use client";
import { useMarketContext } from "@/context/marketContext";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useAccount } from "wagmi";

export const Star = ({ id, size }: { id: string; size?: number }) => {
  const { isFavorite, toggleFavorite } = useMarketContext();
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const handler = () => {
    if (!isConnected) {
      openConnectModal?.();
      return;
    }
    toggleFavorite(id);
  };

  return isFavorite(id) ? (
    <button onClick={handler}>
      <FaStar className="text-warning-300" size={size ?? 20} />
    </button>
  ) : (
    <button onClick={handler}>
      <FaRegStar className="text-grey-800" size={size ?? 20} />
    </button>
  );
};
