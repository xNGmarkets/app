"use client";
import { useAuthContext } from "@/context/authContext";
import { useCurrencyContext } from "@/context/currencyContext";
import { formatNumInThousands } from "@/utils/helper";
import React, { useMemo } from "react";

export const MarketPrice = ({
  className,
  price,
  subtext,
}: {
  className?: string;
  price: number;
  subtext?: string;
}) => {
  const { currency } = useCurrencyContext();

  const formatedPrice = useMemo(() => {
    return currency === "$" ? parseFloat(price?.toString()) / 1600 : price;
  }, [currency]);
  return (
    <div>
      <h5 className={className}>
        {currency}
        {formatNumInThousands(formatedPrice?.toFixed(3))}
      </h5>
      <small
        className={`!text-xs ${subtext?.includes("+") ? "text-primary" : "text-error"}`}
      >
        {" "}
        {subtext}
      </small>
    </div>
  );
};
