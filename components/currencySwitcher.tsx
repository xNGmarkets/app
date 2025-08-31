"use client";
import { useCurrencyContext } from "@/context/currencyContext";
import React from "react";

const currData = [
  {
    name: "dollar",
    value: "$",
  },
  {
    name: "naira",
    value: "₦",
  },
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrencyContext();

  return (
    <div className="toggleWrapper">
      {currData?.map(({ name, value }) => (
        <button
          key={name}
          className={currency === value ? "toggleActive" : "toggleNotActive"}
          onClick={() => setCurrency(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
