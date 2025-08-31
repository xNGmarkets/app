import React, { ReactNode } from "react";
import MarketFilter from "./filter/marketFilter";
import { CurrencyProvider } from "@/context/currencyContext";

export default function MarketWrapper({ children }: { children: ReactNode }) {
  return (
    <CurrencyProvider>
      <main>
        <MarketFilter />
        {children}
      </main>
    </CurrencyProvider>
  );
}
