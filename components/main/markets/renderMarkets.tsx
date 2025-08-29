import React from "react";
import MarketWrapper from "./marketWrapper";
import { TableWrapper } from "./table/tableWrapper";

export default function RenderMarkets() {
  return (
    <MarketWrapper>
      <section className="py-5">
        <TableWrapper />
      </section>
    </MarketWrapper>
  );
}
