import { BorrowStats } from "@/components/main/borrow/borrowStats";
import { TableWrapper } from "@/components/main/borrow/tableWrapper";
import Button from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <main className="container !space-y-10 py-20">
      <header className="flex flex-wrap justify-between gap-4 pt-10">
        <hgroup className="!space-y-3">
          <h4 className="font-gabarito text-grey-900">Borrow</h4>
          <h5 className="text-grey-700 text-sm">
            Borrow USDC against xNGX stocks{" "}
            <span className="text-warning-500">APR 8.5%</span>
          </h5>
        </hgroup>
        <article className="flex flex-wrap items-center gap-2">
          <div className="card !rounded-full px-3 py-1">
            <small>$1 - ₦1,530</small>
          </div>
          <Button className="pry-btn w-full md:w-fit">Borrow USDC</Button>
        </article>
      </header>

      <BorrowStats />

      <TableWrapper />
    </main>
  );
}
