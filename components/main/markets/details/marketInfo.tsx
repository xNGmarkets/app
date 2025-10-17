"use client";

import { UserAvatar } from "@/components/ui/UserAvatar";
import React from "react";
import { Star } from "../star";
import { BandPCT } from "../table/bandPCT";
import { MarketPrice } from "../table/marketPrice";
// import { Switch } from "@/components/ui/switch/switch";
import { FaStar } from "react-icons/fa6";
// import { CoinsIcon, VideoIcon } from "@/public/svgs";
import useBandPrice from "@/hooks/useBandPrice";
import useExchangeRate from "@/hooks/useExchangeRate";
import useGetBestPrices from "@/hooks/useGetBestPrices";
import { useGetOrderBook } from "@/hooks/useGetOrderBook";
import { StockProps } from "@/types/stock";

export default function MarketInfo({ data }: { data: StockProps }) {
  const {
    _id: id,
    logo,
    ticker,
    company,
    evmAddress,
    kycLevel,
    dividendRatio,
  } = data;

  const { band, price, lowestPrice, highestPrice } = useBandPrice(evmAddress);
  const rate = useExchangeRate();

  const { bidPrice, askPrice } = useGetBestPrices(evmAddress);

  const { asks, bids } = useGetOrderBook(evmAddress);

  return (
    <aside className="w-full !space-y-3 px-3 py-5 lg:w-[27%] lg:px-6">
      <article className="flex justify-between gap-2">
        <UserAvatar
          url={logo}
          displayName={ticker}
          initials={ticker}
          subText={company}
        />
        <div className="bg-grey-25 grid size-10 place-items-center rounded-lg p-2">
          <Star size={18} id={id!} />
        </div>
      </article>

      {/* <ul className="!mt-3 flex flex-col justify-between gap-1 !text-xs lg:flex-row">
        <li className="card !text-grey-900 flex items-center gap-1 !rounded p-1">
          <CoinsIcon /> Proof of Reserves
        </li>
        <li className="card !text-grey-900 flex items-center gap-1 !rounded p-1">
          <VideoIcon /> Watch trade video
        </li>
      </ul> */}

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="card col-span-1 flex flex-col items-center justify-center gap-1 p-2 md:col-span-2">
          {/* <div>
            <small>iNAV & Band Oracle</small>
          </div> */}
          <MarketPrice
            price={price}
            className="text-grey-900 text-4xl font-semibold"
            // subtext="+1.45%"
            wrapperClassName="flex items-center "
          />
          <small>~ ${rate ? (price / rate).toFixed(3) : 0}</small>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Bid Price
          <MarketPrice
            price={Number(bidPrice) || highestPrice}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Ask Price
          <MarketPrice
            price={Number(askPrice) || lowestPrice}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          KYC Level
          <span className="text-grey-900 flex items-center gap-1 !text-base">
            L{kycLevel}
          </span>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Dividends
          <span className="text-grey-900 flex items-center gap-1 !text-base">
            {dividendRatio.toFixed(1)}{" "}
            <FaStar size={12} className="text-warning-300" />
          </span>
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Band Oracle
          <BandPCT
            className="text-grey-900 flex items-center gap-1 !text-base"
            bandPct={band}
          />
        </li>
        <li className="card text-grey-500 flex flex-col items-center gap-1 p-2 !text-xs">
          Price allowed
          <div className="text-grey-900 flex items-center">
            <MarketPrice
              className="text-grey-900 flex items-center gap-1 !text-base"
              price={lowestPrice}
              decimals={1}
            />{" "}
            -{" "}
            <MarketPrice
              className="text-grey-900 flex items-center gap-1 !text-base"
              price={highestPrice}
              decimals={1}
            />
          </div>
        </li>
        {/* <li className="card text-grey-500 col-span-1 flex items-center justify-between gap-1 p-2 !text-xs md:col-span-2">
          Toggle IN/AFTER Hours{" "}
          <Switch
            onClick={() => {
              setShow(!show);
            }}
            checked={show}
          />
        </li> */}
      </ul>

      {asks?.length > 0 || bids?.length > 0 ? (
        <div className="!space-y-3">
          {asks.length > 0 ? (
            <ul className="card !space-y-4 !p-4">
              <li className="text-grey-900 flex justify-between gap-2">
                <span>Asks</span>
                <span>Qty</span>
              </li>
              {asks.map((order) => (
                <li
                  key={order.id}
                  className="text-error-500 flex justify-between gap-2 !text-sm"
                >
                  <MarketPrice price={order.price * rate} showPriceInUsdc />
                  <span>{order.quantity}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {bids.length > 0 ? (
            <ul className="card !space-y-4 !p-4">
              <li className="text-grey-900 flex justify-between gap-2">
                <span>Bids</span>
                <span>Qty</span>
              </li>
              {bids.map((order) => (
                <li
                  key={order.id}
                  className="text-success-100 flex justify-between gap-2 !text-sm"
                >
                  <MarketPrice price={order.price * rate} showPriceInUsdc />
                  <span>{order.quantity}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </aside>
  );
}
