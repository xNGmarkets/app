import RenderSupplyTable from "@/components/main/supply/renderSupplyTable";
import {
  SupplyUSDCAction,
  SupplyWithdrawalAction,
} from "@/components/main/supply/supplyActions";
import { SupplyStats } from "@/components/main/supply/supplyStats";
import { SearchParams } from "@/types/global";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const pm = await searchParams;
  return (
    <main className="container !space-y-10 py-20">
      <header className="flex flex-wrap justify-between gap-4 pt-10">
        <hgroup className="!space-y-3">
          <h4 className="font-gabarito text-grey-900">Supply</h4>
          <h5 className="text-grey-700 text-sm">
            Supply USDC with <span className="text-warning-500">APR 7.2%</span>
          </h5>
        </hgroup>
        <article className="flex flex-wrap items-center gap-2">
          <div className="card !rounded-full px-3 py-1">
            <small>$1 - ₦1,530</small>
          </div>

          <SupplyWithdrawalAction />
          <SupplyUSDCAction />
        </article>
      </header>

      <SupplyStats />

      <RenderSupplyTable params={pm} />
    </main>
  );
}
