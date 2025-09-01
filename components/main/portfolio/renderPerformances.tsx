"use client";
import React from "react";
import { SparkLineChart } from "@/components/chart/sparklineChart";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { filterDays } from "@/utils/constant";
import { MarketPrice } from "../markets/table/marketPrice";
import Button from "@/components/ui/button";

const series = [{ data: [1.2, 13, 5, 26, 12] }];

export default function RenderPerformances() {
  return (
    <section className="grid grid-cols-1 justify-between gap-4 lg:grid-cols-2">
      <article className="card shadow-3xl flex min-h-[352px] flex-col justify-between gap-6 p-4 pb-10">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h5 className="!text-grey-900 !text-base !font-medium">
              Portfolio Performance
            </h5>
            <small className="font-medium">NGX </small>
          </div>

          <div className="flex w-fit items-center gap-2">
            <CustomSelect
              name="filter"
              value="1day"
              options={filterDays}
              className="!h-full max-h-[35px] !w-fit min-w-24 !rounded-[5px] !py-3"
              onChange={() => {}}
              placeholder="Today"
            />
          </div>
        </header>
        <SparkLineChart series={series} gainers />
      </article>

      <article className="card shadow-3xl flex min-h-[352px] flex-col justify-between gap-6 p-4 pb-10">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h5 className="!text-grey-900 !text-base !font-medium">
              Risk & Income
            </h5>
            <small className="font-medium">NGX </small>
          </div>

          <div className="flex w-fit items-center gap-2">
            <CustomSelect
              name="filter"
              value="1day"
              options={filterDays}
              className="!h-full max-h-[35px] !w-fit min-w-24 !rounded-[5px] !py-3"
              onChange={() => {}}
              placeholder="Today"
            />
          </div>
        </header>

        <article className="card flex flex-wrap justify-between gap-3 p-3">
          <div>
            <small>Debts</small>
            <MarketPrice price={765000000} />
          </div>

          <Button className="outline-btn">Repay</Button>
        </article>
      </article>
    </section>
  );
}
