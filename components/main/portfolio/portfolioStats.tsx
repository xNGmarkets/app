"use client";
import React from "react";
import { MarketPrice } from "../markets/table/marketPrice";

const statsData = [
  { label: "Net worth", value: 0, subtext: "Total collateral" },
  { label: "Holdings value", value: 0, subtext: "Outstanding USDC" },
  {
    label: "Outstanding debt",
    value: 230,
    subtext: (
      <>
        Borrow <span className="text-warning-500"> APR 8.5%</span>
      </>
    ),
  },
  {
    label: "Total supply earned",
    value: "0.0%",
    subtext: "Borrow capacity left",
  },
  {
    label: "Net equity",
    value: "0.0%",
    subtext: "Borrow capacity left",
  },
  {
    label: "Liquidation buffer",
    value: "0.0%",
    subtext: "Borrow capacity left",
  },
];
export const PortfolioStats = () => {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
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
