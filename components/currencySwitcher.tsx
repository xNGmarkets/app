"use client";
import { useAuthContext } from "@/context/authContext";
import React from "react";

export default function CurrencySwitcher() {
  const { currency, updateCurrency } = useAuthContext();

  return (
    <div className="toggleWrapper">
      <button
        className={currency === "$" ? "toggleActive" : "toggleNotActive"}
        onClick={() => updateCurrency("$")}
      >
        $
      </button>
      <button
        className={currency === "₦" ? "toggleActive" : "toggleNotActive"}
        onClick={() => updateCurrency("₦")}
      >
        ₦
      </button>
    </div>
  );
}
