"use client";
import { useAuthContext } from "@/context/authContext";
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

export default function CurrencySwitcher({ id }: { id: string }) {
  const { currencyMap, updateCurrency, DEFAULT_CURRENCY } = useAuthContext();
  const currency = currencyMap[id] ?? DEFAULT_CURRENCY;

  return (
    <div className="toggleWrapper">
      {currData?.map(({ name, value }) => (
        <button
          key={name}
          className={currency === value ? "toggleActive" : "toggleNotActive"}
          onClick={() => updateCurrency(id, value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
