import { SparkLineChart } from "@/components/chart/sparklineChart";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { useAuthContext } from "@/context/authContext";
import { MarketInstrument } from "@/types/martkes";
import { formatNumInThousands } from "@/utils/helper";
import { StaticImageData } from "next/image";
import React, { useMemo } from "react";

export default function GainersLosersCard({
  id,
  data,
}: {
  id: string;
  data: MarketInstrument;
}) {
  const { currencyMap, DEFAULT_CURRENCY } = useAuthContext();
  const currency = currencyMap[id] ?? DEFAULT_CURRENCY;

  const price = useMemo(() => {
    return currency === "$" ? data?.lastPrice / 1600 : data?.lastPrice;
  }, [currency]);
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

      <small className="text-end">
        {currency}
        {formatNumInThousands(price)}
      </small>
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
