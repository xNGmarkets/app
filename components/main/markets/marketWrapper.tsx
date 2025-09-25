import React, { ReactNode } from "react";
import MarketFilter from "./filter/marketFilter";

export default function MarketWrapper({ children }: { children: ReactNode }) {
  return (
    <main>
      <MarketFilter />
      {children}
    </main>
  );
}
