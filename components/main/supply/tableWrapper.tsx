"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import { supplyAccruedData, supplyColData } from "@/utils/constant";
import React from "react";

export const TableWrapper = () => {
  return (
    <TableComponent
      title="Borrow List"
      columns={supplyColData}
      data={supplyAccruedData}
    />
  );
};
