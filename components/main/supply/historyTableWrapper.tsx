"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import {
  transactionHisoryColData,
  transactionHistoryData,
} from "@/utils/constant";
import React from "react";

export const HistoryTableWrapper = () => {
  return (
    <TableComponent
      title="Borrow List"
      columns={transactionHisoryColData}
      data={transactionHistoryData}
    />
  );
};
