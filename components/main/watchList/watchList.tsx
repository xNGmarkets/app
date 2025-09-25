"use client";
import React from "react";
import RenderMarkets from "../markets/renderMarkets";
// import EmptyState from "@/components/ui/emptyStates";

export const WatchList = () => {
  // const watchListData = [];

  // // If no favorites, show empty state
  // if (!watchListData || watchListData.length === 0) {
  //   return (
  //     <EmptyState
  //       title="No favorites yet"
  //       subTitle="Start adding markets to your watchlist by clicking the star icon"
  //     />
  //   );
  // }
  return <RenderMarkets data={[]} />;
};
