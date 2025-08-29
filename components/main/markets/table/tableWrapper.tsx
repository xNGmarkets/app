"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import { marketCards, marketListDataColData } from "@/utils/constant";
import React from "react";
import { GridView } from "../grid/gridView";

export const TableWrapper = () => {
  const { view } = useViewLayoutContext();

  return view === "table" ? (
    <TableComponent
      title="All Markets"
      columns={marketListDataColData}
      data={marketCards}
    />
  ) : (
    <GridView />
  );
};
