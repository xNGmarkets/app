"use client";
import useGetPortfolio from "@/hooks/useGetPortfolio";
import React, { useMemo } from "react";
import { MarketPrice } from "../markets/table/marketPrice";

export const BorrowStats = () => {
  const { borrow, ltvCurrent, maxBorrow, collateralValue } = useGetPortfolio();

  const statsData = useMemo(
    () => [
      { label: "Total collateral", value: collateralValue },
      { label: "Current debt", value: borrow, subtext: "Outstanding USDC" },
      { label: "Borrow capacity left", value: maxBorrow - borrow },
      { label: "Weighted LTV", value: `${ltvCurrent}%` },
    ],
    [ltvCurrent, borrow, maxBorrow, collateralValue],
  );

  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {statsData?.map(({ label, value, subtext }, idx) => (
        <li
          key={idx}
          className="card text-grey-900 flex flex-col gap-2 p-5 text-2xl"
        >
          <small className="text-grey-600">{label}</small>
          <span className="">
            {typeof value === "string" ? (
              value
            ) : (
              <MarketPrice price={value} forceCurrency="$" />
            )}
          </span>
          <small className="text-grey-600">{subtext ?? ""}</small>
        </li>
      ))}
    </ul>
  );
};
