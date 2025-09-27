"use client";

import useGetPortfolio from "@/hooks/useGetPortfolio";
import useSupplyAPR from "@/hooks/useSupplyAPR";
import useSupplyUtilization from "@/hooks/useSupplyUtilization";
import React from "react";
import { MarketPrice } from "../markets/table/marketPrice";

export const SupplyStats = () => {
  const { supply, accrued } = useGetPortfolio();
  const apr = useSupplyAPR();
  const utilization = useSupplyUtilization();

  return (
    <ul className="sm:grid-col-2 grid grid-cols-1 gap-3 md:grid-cols-4">
      <li className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl">
        <small className="text-grey-600">Total supplied</small>
        <MarketPrice price={supply} invert />
      </li>
      <li className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl">
        <small className="text-grey-600">Accrued rewards</small>
        <MarketPrice price={accrued} invert />
        <small className="text-grey-600">Outstanding USDC</small>
      </li>
      <li className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl">
        <small className="text-grey-600">Pool utilization</small>
        <span>{`${utilization}%`}</span>
        <small className="text-grey-600">Borrow capacity left</small>
      </li>
      <li className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl">
        <small className="text-grey-600">Deposit APY</small>
        <span>{`${apr}%`}</span>
        <small className="text-grey-600">Variable</small>
      </li>
    </ul>
  );
};
