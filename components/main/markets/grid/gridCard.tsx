import { UserAvatar } from "@/components/ui/UserAvatar";
import { MarketInstrument } from "@/types/martkes";
import { StaticImageData } from "next/image";
import React from "react";
import { MarketPrice } from "../table/marketPrice";
import { BsDot } from "react-icons/bs";
import Button from "@/components/ui/button";
import { Star } from "../star";
import { Dividends } from "../table/dividends";

export const GridCard = ({ data }: { data: MarketInstrument }) => {
  const {
    id,
    logo,
    symbol,
    sector,
    ticker,
    company,
    bidPrice,
    lastPrice,
    askPrice,
    kycLevel,
    bandPct,
  } = data;
  return (
    <li className="shadow-4xl card hover:bg-grey-25 !rounded-2xl bg-white p-5">
      <article className="flex justify-between gap-2">
        <div>
          <UserAvatar
            url={logo as StaticImageData}
            displayName={`${symbol} - ${ticker}`}
            initials={ticker}
            subText={company}
            className="!text-xs"
          />
          <p className="text-grey-700 !my-2 flex items-center gap-1 !text-xs">
            <span>{sector}</span>
            <BsDot />
            <span> {kycLevel}</span>
            <BsDot />
            <span>Band ±{bandPct}</span>
            <BsDot />
          </p>
        </div>
        <Star id={id as string} />
      </article>

      <ul className="text-grey-500 flex max-w-10/12 items-center justify-between gap-3 !py-3 text-xs">
        <li className="flex flex-col items-center gap-1">
          Dividends
          <Dividends className="text-grey-900 !text-base" />
        </li>
        <li className="flex flex-col items-center gap-1">
          Ask Price
          <MarketPrice
            price={Number(askPrice) ?? 0}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="flex flex-col items-center gap-1">
          Bid Price
          <MarketPrice
            price={Number(bidPrice) ?? 0}
            className="text-grey-900 !text-base"
          />
        </li>
      </ul>

      <article className="border-grey-25 flex items-center justify-between border-t pt-3">
        <MarketPrice
          price={Number(lastPrice) ?? 0}
          className="text-grey-900 !text-2xl"
          subtext="+0.8%"
        />

        <Button link href={`/markets/${id}`} className="pry-btn">
          Open Trade
        </Button>
      </article>
    </li>
  );
};
