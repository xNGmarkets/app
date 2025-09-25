"use client";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import React from "react";

const currData = [
  {
    name: "naira",
    value: "₦",
  },
  {
    name: "dollar",
    value: "$",
  },
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useViewLayoutContext();

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
