"use client";
import LayoutSwitcher from "@/components/layoutSwitcher";
import Search from "@/components/ui/search";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { filterSectors, sortData } from "@/utils/constant";
import React from "react";

export default function MarketFilter() {
  return (
    <section className="flex w-full justify-between gap-5 overflow-x-auto whitespace-nowrap">
      <LayoutSwitcher />
      <Search placeholder="Search tickers, companies" />
      <CustomSelect
        name="filter"
        value="all"
        options={filterSectors}
        className="w-full min-w-24 !py-3 lg:flex-1"
        onChange={() => {}}
        placeholder="All Sector"
      />
      <CustomSelect
        name="filter"
        value="topVolume"
        options={sortData}
        className="w-full min-w-24 !py-3 lg:flex-1"
        onChange={() => {}}
        placeholder="Top Volume"
      />
    </section>
  );
}
