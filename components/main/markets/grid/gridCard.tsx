import Button from "@/components/ui/button";
import { UserAvatar } from "@/components/ui/UserAvatar";
import useBandPrice from "@/hooks/useBandPrice";
import { StockProps } from "@/types/stock";
import React from "react";
import { BsDot } from "react-icons/bs";
import { Star } from "../star";
import { Dividends } from "../table/dividends";
import { MarketPrice } from "../table/marketPrice";
import useGetBestPrices from "@/hooks/useGetBestPrices";

export const GridCard = ({ data }: { data: StockProps }) => {
  const {
    _id,
    logo,
    sector,
    ticker,
    company,
    kycLevel,
    dividendRatio,
    evmAddress,
  } = data;
  const { band, price } = useBandPrice(evmAddress);

  const { bidPrice, askPrice } = useGetBestPrices(evmAddress);

  return (
    <li className="shadow-4xl card hover:bg-grey-25 !rounded-2xl bg-white p-5">
      <article className="flex items-start justify-between gap-2">
        <div>
          <UserAvatar
            url={logo}
            displayName={ticker}
            initials={ticker}
            subText={company}
            subtextClassName="!text-xs"
          />
          <p className="text-grey-700 !my-2 flex items-center gap-1 !text-xs">
            <span className="inline-block first-letter:capitalize">
              {sector}
            </span>
            <BsDot />
            <span>KYC L{kycLevel}</span>
            <BsDot />
            <span>Band ±{band}%</span>
          </p>
        </div>
        <Star id={_id as string} />
      </article>

      <ul className="text-grey-500 flex max-w-10/12 items-center justify-between gap-3 !py-3 text-xs">
        <li className="flex flex-col items-center gap-1">
          Dividends
          <Dividends
            dividends={dividendRatio}
            className="text-grey-900 !text-base"
          />
        </li>
        <li className="flex flex-col items-center gap-1">
          Ask Price
          <MarketPrice price={askPrice} className="text-grey-900 !text-base" />
        </li>
        <li className="flex flex-col items-center gap-1">
          Bid Price
          <MarketPrice price={bidPrice} className="text-grey-900 !text-base" />
        </li>
      </ul>

      <article className="border-grey-25 flex items-center justify-between border-t pt-3">
        <MarketPrice
          price={price}
          className="text-grey-900 !text-2xl"
          // subtext="+0.8%"
        />

        <Button link href={`/markets/${_id}`} className="pry-btn !text-sm">
          Open Trade
        </Button>
      </article>
    </li>
  );
};
