"use client";
import React from "react";
import RenderMarkets from "../markets/renderMarkets";
import { useAccount } from "wagmi";
import { useWatchList } from "@/hooks/useWatchList";
import EmptyState from "@/components/ui/emptyStates";

export const WatchList = () => {
  const { address } = useAccount();
  const { isLoading, watchList } = useWatchList(address || "");

  // // If no favorites, show empty state
  if (isLoading || watchList.length === 0) {
    return (
      <EmptyState
        title="No favorites yet"
        subTitle="Start adding markets to your watchList by clicking the star icon"
      />
    );
  }
  return <RenderMarkets data={watchList} />;
};
