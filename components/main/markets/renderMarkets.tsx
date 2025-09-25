import React from "react";
import MarketWrapper from "./marketWrapper";
import { TableWrapper } from "./table/tableWrapper";
import { StockProps } from "@/types/stock";

export default function RenderMarkets({ data }: { data: StockProps[] }) {
  return (
    <MarketWrapper>
      <section className="py-5">
        <TableWrapper data={data} />
      </section>
    </MarketWrapper>
  );
}
