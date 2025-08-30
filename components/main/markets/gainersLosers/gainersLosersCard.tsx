import { SparkLineChart } from "@/components/chart/sparklineChart";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { useAuthContext } from "@/context/authContext";
import { useCurrencyContext } from "@/context/currencyContext";
import { MarketInstrument } from "@/types/martkes";
import { formatNumInThousands } from "@/utils/helper";
import { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { MarketPrice } from "../table/marketPrice";

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
          className="!text-[10px]"
        />
      </div>
      <MarketPrice price={data?.lastPrice} className="text-end" />
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
