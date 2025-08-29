"use client";
import { createContext, ReactNode, useContext, useState, useMemo } from "react";

type CurrencyContextType = {
  currency: string;
  setCurrency: (val: string) => void;
  DEFAULT_CURRENCY: string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

const DEFAULT_CURRENCY = "₦";

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      DEFAULT_CURRENCY,
    }),
    [currency],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrencySection must be used inside CurrencyProvider");
  }
  return ctx;
};
