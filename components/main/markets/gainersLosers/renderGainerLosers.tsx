import CurrencySwitcher from "@/components/currencySwitcher";
import { filterDays, topGainers, topLosers } from "@/utils/constant";
import React from "react";
import GainersLosersCard from "./gainersLosersCard";
import { SparkLineChart } from "@/components/chart/sparklineChart";
import { SelectInput } from "@/components/ui/select/SelectInput";

const series = [{ data: [1.2, 13, 5, 26, 12] }];

export default function RenderGainerLosers() {
  return (
    <section className="grid grid-cols-1 gap-2 lg:grid-cols-3">
      <article className="card shadow-3xl !space-y-6 p-4">
        <header className="flex items-center justify-between gap-2">
          <h5 className="font-medium">Top Gainers</h5>
          <CurrencySwitcher />
        </header>

        <div className="w-full overflow-x-auto">
          <div className="min-w-xs">
            <article className="text-grey-500 grid grid-cols-4">
              <small className="col-span-2">Name</small>
              <small className="text-end">Last Price</small>
              <small className="text-end">24H CHG%</small>
            </article>
            <ul className="divide-grey-25 divide-y">
              {topGainers.map((item, idx) => (
                <li key={idx} className="grid w-full grid-cols-4 py-2">
                  <GainersLosersCard data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <article className="card shadow-3xl !space-y-6 p-4">
        <header className="flex items-center justify-between gap-2">
          <h5 className="font-medium">Top Losers</h5>
          <CurrencySwitcher />
        </header>

        <div className="xcustom-scrollbar w-full overflow-x-auto">
          <div className="min-w-xs">
            <article className="text-grey-500 grid grid-cols-4">
              <small className="col-span-2">Name</small>
              <small className="text-end">Last Price</small>
              <small className="text-end">24H CHG%</small>
            </article>
            <ul className="divide-grey-25 divide-y">
              {topLosers.map((item, idx) => (
                <li key={idx} className="grid w-full grid-cols-4 py-2">
                  <GainersLosersCard data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="card shadow-3xl flex flex-col justify-between gap-6 p-4 pb-10">
        <header className="flex items-center justify-between gap-2">
          <h5 className="font-medium">Top Losers</h5>

          <div className="flex w-fit items-center gap-2">
            <CurrencySwitcher />

            <SelectInput
              name="filter"
              selected="Today"
              options={filterDays}
              keyPropertyName="title"
              itemPropertyName="title"
              valuePropertyName="value"
              className="!h-full max-h-[35px] !w-fit min-w-24 !py-3"
            />
          </div>
        </header>
        <SparkLineChart series={series} gainers />
      </article>
    </section>
  );
}
