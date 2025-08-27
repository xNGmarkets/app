import { SparkLineChart } from "@/components/chart/sparklineChart";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { MarketInstrument } from "@/types/martkes";
import { StaticImageData } from "next/image";
import React from "react";

export default function GainersLosersCard({
  data,
}: {
  data: MarketInstrument;
}) {
  return (
    <>
      <div className="col-span-2">
        <UserAvatar
          url={data?.logo as StaticImageData}
          displayName={`${data?.symbol} - ${data?.ticker}`}
          initials={data?.ticker}
          subText={data?.company}
        />
      </div>

      <small className="text-end">{data?.lastPrice}</small>
      <div className="flex justify-end">
        <SparkLineChart
          series={[{ data: data?.changes as number[] }]}
          changedVPercentage={data?.change24hPct?.toString()}
          gainers={data?.gainers}
          width={1.5}
          heigh={20}
          className="w-4/12"
        />
      </div>
    </>
  );
}
