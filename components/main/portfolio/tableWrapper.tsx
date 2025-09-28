"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import { borrowColData } from "@/utils/constant";
import React from "react";

export const TableWrapper = () => {
  return (
    <section className="card p-4">
      <h5 className="text-grey-900 !mb-10 text-lg">Your Loans</h5>

      <TableComponent title="Borrow List" columns={borrowColData} data={[]} />
    </section>
  );
};
