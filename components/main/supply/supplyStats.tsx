"use client";
import React from "react";
import { MarketPrice } from "../markets/table/marketPrice";

const statsData = [
  { label: "Total supplied", value: 0 },
  { label: "Accrued rewards", value: 0, subtext: "Outstanding USDC" },
  { label: "Pool utilization", value: "0.0%", subtext: "Borrow capacity left" },
];
export const SupplyStats = () => {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {statsData?.map(({ label, value, subtext }, idx) => (
        <li
          key={idx}
          className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl"
        >
          <small className="text-grey-600">{label}</small>
          <span className="">
            {typeof value === "string" ? value : <MarketPrice price={value} />}
          </span>
          <small className="text-grey-600">{subtext ?? label}</small>
        </li>
      ))}
    </ul>
  );
};
