"use client";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import { formatNumInThousands } from "@/utils/helper";
import React, { useMemo } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export const MarketPrice = ({
  price,
  subtext,
  className,
  wrapperClassName,
}: {
  className?: string;
  wrapperClassName?: string;
  price: number;
  subtext?: string;
}) => {
  const { currency } = useViewLayoutContext();

  const formatedPrice = useMemo(() => {
    return currency === "$" ? parseFloat(price?.toString()) / 1530 : price;
  }, [currency, price]);
  return (
    <div className={wrapperClassName}>
      <h5 className={className}>
        {currency}
        {formatNumInThousands(formatedPrice?.toFixed(3))}
      </h5>
      {subtext && (
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
      )}
    </div>
  );
};
