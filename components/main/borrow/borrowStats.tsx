"use client";
import React from "react";
import { MarketPrice } from "../markets/table/marketPrice";

const statsData = [
  { label: "Total collateral", value: 20000 },
  { label: "Current debt", value: 230, subtext: "Outstanding USDC" },
  { label: "Borrow capacity left", value: 340000 },
  { label: "Weighted LTV", value: "7.5%" },
];
export const BorrowStats = () => {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
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
