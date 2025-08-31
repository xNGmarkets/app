import React from "react";
import MarketWrapper from "./marketWrapper";
import { TableWrapper } from "./table/tableWrapper";
import { MarketInstrument } from "@/types/martkes";

export default function RenderMarkets({ data }: { data: MarketInstrument[] }) {
  return (
    <MarketWrapper>
      <section className="py-5">
        <TableWrapper data={data} />
      </section>
    </MarketWrapper>
  );
}
