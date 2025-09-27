"use client";
import useSupplyTvl from "@/hooks/useSupplyTvl";
import React from "react";

const TVL = () => {
  const totalLockedValue = useSupplyTvl();
  return (
    <h5 className="text-grey-700 text-sm">
      TOTAL SUPPLY (TVL):{" "}
      <span className="text-warning-500">
        {totalLockedValue.toLocaleString()} USDC
      </span>
    </h5>
  );
};

export default TVL;
