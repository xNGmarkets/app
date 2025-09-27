import Rate from "@/components/main/Rate";
import RenderSupplyTable from "@/components/main/supply/renderSupplyTable";
import {
  SupplyUSDCAction,
  SupplyWithdrawalAction,
} from "@/components/main/supply/supplyActions";
import { SupplyStats } from "@/components/main/supply/supplyStats";
import TVL from "@/components/main/supply/TVL";
import React from "react";

export default async function page() {
  return (
    <main className="container !space-y-10 py-20">
      <header className="flex flex-wrap justify-between gap-4 pt-10">
        <hgroup className="!space-y-3">
          <h4 className="font-gabarito text-grey-900">Supply</h4>
          <TVL />
        </hgroup>
        <article className="flex flex-wrap items-center gap-2">
          <Rate />
          <SupplyWithdrawalAction />
        </article>
      </header>

      <SupplyStats />

      <div className="space-y-3 lg:flex lg:items-start lg:justify-between lg:gap-3 lg:space-y-0">
        <SupplyUSDCAction />
        <RenderSupplyTable />
      </div>
    </main>
  );
}
