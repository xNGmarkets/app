"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import { marketListDataColData } from "@/utils/constant";
import React from "react";
import { GridView } from "../grid/gridView";
import { MarketInstrument } from "@/types/martkes";

export const TableWrapper = ({ data }: { data: MarketInstrument[] }) => {
  const { view } = useViewLayoutContext();

  return view === "table" ? (
    <TableComponent
      title="All Markets"
      columns={marketListDataColData}
      data={data}
    />
  ) : (
    <GridView data={data} />
  );
};
