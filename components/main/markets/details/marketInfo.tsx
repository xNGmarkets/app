"use client";

import { UserAvatar } from "@/components/ui/UserAvatar";
import { MarketInstrument } from "@/types/martkes";
import { marketCards } from "@/utils/constant";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Star } from "../star";
import { MarketPrice } from "../table/marketPrice";
import { BandPCT } from "../table/bandPCT";
import { Switch } from "@/components/ui/switch/switch";
import { FaStar } from "react-icons/fa6";
import { CoinsIcon, VideoIcon } from "@/public/svgs";

export default function MarketInfo({ marketId }: { marketId: string }) {
  const [show, setShow] = useState(true);
  const data = marketCards?.find((i) => i?.id === marketId);

  const {
    id,
    logo,
    symbol,
    ticker,
    company,
    bidPrice,
    lastPrice,
    askPrice,
    kycLevel,
    bandPct,
  } = data ? (data as MarketInstrument) : ({} as MarketInstrument);
  return (
    <aside className="w-full !space-y-3 px-3 py-5 lg:w-[27%] lg:px-6">
      <article className="flex justify-between gap-2">
        <UserAvatar
          url={logo as StaticImageData}
          displayName={`${symbol} - ${ticker}`}
          initials={ticker}
          subText={company}
          subtextClassName="!text-lg"
        />
        <div className="bg-grey-25 grid size-10 place-items-center rounded-lg p-2">
          <Star size={18} id={id!} />
        </div>
      </article>

      <ul className="!mt-3 flex flex-col justify-between gap-1 !text-xs lg:flex-row">
        <li className="card !text-grey-900 flex items-center gap-1 !rounded p-1">
          <CoinsIcon /> Proof of Reserves
        </li>
        <li className="card !text-grey-900 flex items-center gap-1 !rounded p-1">
          <VideoIcon /> Watch trade video
        </li>
      </ul>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="card col-span-1 flex flex-col items-center justify-center gap-1 p-2 md:col-span-2">
          <div>
            <small>iNAV & Band Oracle</small>
          </div>
          <MarketPrice
            price={lastPrice}
            className="text-grey-900 text-4xl font-semibold"
            subtext="+1.45%"
            wrapperClassName="flex items-center "
          />
          <small>~ 0.1765 USDC @ ₦1,600/$</small>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Bid Price
          <MarketPrice
            price={Number(bidPrice) ?? 0}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Ask Price
          <MarketPrice
            price={Number(askPrice) ?? 0}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          KYC Level
          <span className="text-grey-900 flex items-center gap-1 !text-base">
            {kycLevel}
          </span>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Dividends
          <span className="text-grey-900 flex items-center gap-1 !text-base">
            {5.4} <FaStar size={12} className="text-warning-300" />
          </span>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Band Oracle
          <BandPCT
            className="text-grey-900 flex items-center gap-1 !text-base"
            bandPct={bandPct!}
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Price allowed
          <div className="text-grey-900 flex items-center">
            <MarketPrice
              className="text-grey-900 flex items-center gap-1 !text-base"
              price={lastPrice!}
            />
            -
            <MarketPrice
              className="text-grey-900 flex items-center gap-1 !text-base"
              price={lastPrice!}
            />
          </div>
        </li>
        <li className="card text-grey-500 col-span-1 flex items-center justify-between gap-1 p-2 !text-xs md:col-span-2">
          Toggle IN/AFTER Hours{" "}
          <Switch
            onClick={() => {
              setShow(!show);
            }}
            checked={show}
          />
        </li>
      </ul>
    </aside>
  );
}
