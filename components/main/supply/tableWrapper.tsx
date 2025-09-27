"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import useGetUserSupplies from "@/hooks/useGetUserSupplies";
import { supplyColData } from "@/utils/constant";
import React from "react";

export const TableWrapper = () => {
  const { data } = useGetUserSupplies();

  if (!data) return;
  return (
    <TableComponent title="Borrow List" columns={supplyColData} data={data} />
  );
};
