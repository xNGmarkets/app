import { getStocks } from "@/app/actions/stocks";
import APR from "@/components/main/borrow/APR";
import { BorrowUSDCAction } from "@/components/main/borrow/borrowActions";
import { BorrowStats } from "@/components/main/borrow/borrowStats";
import { TableWrapper } from "@/components/main/borrow/tableWrapper";
import Rate from "@/components/main/Rate";
import React from "react";

export default async function page() {
  const stocks = await getStocks();
  return (
    <main className="container !space-y-10 py-20">
      <header className="flex flex-wrap justify-between gap-4 pt-10">
        <hgroup className="!space-y-3">
          <h4 className="font-gabarito text-grey-900">Borrow</h4>
          <APR />
        </hgroup>
        <article className="flex flex-wrap items-center gap-2">
          <Rate />
          <BorrowUSDCAction stocks={stocks} />
        </article>
      </header>

      <BorrowStats />
      <TableWrapper />
    </main>
  );
}
