"use client";

import { useWatchList } from "@/hooks/useWatchList";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import React, { useMemo } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { RiLoader2Line } from "react-icons/ri";
import { useAccount } from "wagmi";

export const Star = ({ id, size }: { id: string; size?: number }) => {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { toggleWatchList, isMutating, watchList } = useWatchList(
    address || "",
  );

  const handler = () => {
    if (!isConnected) {
      openConnectModal?.();
      return;
    }
    if (id) toggleWatchList(id);
  };

  const isFavorite = useMemo(
    () => watchList?.some((item) => item._id === id),
    [watchList, id],
  );

  if (isMutating) {
    return (
      <RiLoader2Line className="text-grey-800 animate-spin" size={size ?? 20} />
    );
  }

  return isFavorite ? (
    <button onClick={handler}>
      <FaStar className="text-warning-300" size={size ?? 20} />
    </button>
  ) : (
    <button onClick={handler}>
      <FaRegStar className="text-grey-800" size={size ?? 20} />
    </button>
  );
};
