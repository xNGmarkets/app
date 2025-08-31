import { ApexChart } from "@/components/chart/apexChart";
import React from "react";

export const ChartScreen = () => {
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      pan: { enabled: false },
      selection: { enabled: false },
    },

    colors: ["#51AF7D"],
    fill: {
      type: "gradient",
      colors: ["#51AF7D1A"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },

    stroke: {
      curve: "straight",
      colors: ["#03D07D"],
      width: 2,
    },

    grid: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  const chartData = [{ data: [20000, 50900, 2000, 51000, 25000, 40000] }];

  return (
    <main>
      <ApexChart options={options} data={chartData} type="area" />
      <article className="container grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
        <ul className="card !space-y-4 !p-4">
          <li className="text-grey-900 flex justify-between gap-2">Asks</li>
          <li className="text-error-500 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>300</span>
          </li>
          <li className="text-error-500 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>220</span>
          </li>
          <li className="text-error flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>160</span>
          </li>
        </ul>
        <ul className="card !space-y-4 !p-4">
          <li className="text-grey-900 flex justify-between gap-2">Bids</li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>300</span>
          </li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>220</span>
          </li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>160</span>
          </li>
        </ul>
      </article>
    </main>
  );
};
