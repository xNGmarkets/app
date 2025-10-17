"use client";

import useExchangeRate from "@/hooks/useExchangeRate";
import React, { useMemo } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export const MarketPrice = ({
  price,
  subtext,
  className,
  wrapperClassName,
  decimals = 2,
  showPriceInUsdc = false,
  forceCurrency,
  invert,
}: {
  className?: string;
  wrapperClassName?: string;
  price: number;
  subtext?: string;
  decimals?: number;
  invert?: boolean;
  forceCurrency?: string;
  showPriceInUsdc?: boolean;
}) => {
  const rate = useExchangeRate();
  // const formattedPrice = useMemo(() => {
  //   if (forceCurrency) return price;

  //   if (!rate) return price;
  //   if (invert) {
  //     return currency === "$" ? price : price * rate;
  //   }
  //   return currency === "$" ? price / rate : price;
  // }, [currency, price, rate, invert, forceCurrency]);

  const priceInUsdc = useMemo(() => {
    if (!rate) return 0;
    if (invert) {
      return (price * rate).toFixed(3);
    }
    return (price / rate).toFixed(3);
  }, [rate, price, invert]);

  return (
    <div className={wrapperClassName}>
      <h5 className={`${className} text-center`}>
        {forceCurrency ? forceCurrency : "₦"}
        {price?.toLocaleString("en-US", {
          maximumFractionDigits: decimals,
        })}{" "}
        {showPriceInUsdc ? (
          <span className="text-xs opacity-60 lg:text-sm">
            ({forceCurrency === "$" ? "₦" : "$"}
            {priceInUsdc})
          </span>
        ) : null}
      </h5>
      {subtext ? (
        <small
          className={`!text-xs ${subtext?.includes("+") ? "text-success-100" : "text-error"} ${wrapperClassName}`}
        >
          {subtext?.includes("+") ? (
            <BsFillCaretUpFill />
          ) : (
            <BsFillCaretDownFill />
          )}{" "}
          {subtext}
        </small>
      ) : null}
    </div>
  );
};
