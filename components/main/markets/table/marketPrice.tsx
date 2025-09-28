"use client";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import useExchangeRate from "@/hooks/useExchangeRate";
import React, { useMemo } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export const MarketPrice = ({
  price,
  subtext,
  className,
  wrapperClassName,
  decimals = 2,
  invert,
  forceCurrency,
}: {
  className?: string;
  wrapperClassName?: string;
  price: number;
  subtext?: string;
  decimals?: number;
  invert?: boolean;
  forceCurrency?: string;
}) => {
  const { currency } = useViewLayoutContext();
  const rate = useExchangeRate();

  const formattedPrice = useMemo(() => {
    if (forceCurrency) return price;

    if (!rate) return price;
    if (invert) {
      return currency === "$" ? price : price * rate;
    }
    return currency === "$" ? price / rate : price;
  }, [currency, price, rate, invert, forceCurrency]);

  return (
    <div className={wrapperClassName}>
      <h5 className={className}>
        {forceCurrency ? forceCurrency : currency}
        {formattedPrice?.toLocaleString("en-US", {
          maximumFractionDigits: decimals,
        })}
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
