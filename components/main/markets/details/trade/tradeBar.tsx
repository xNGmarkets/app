"use client";
import { CustomSelect } from "@/components/ui/select/customSelect";
import useBandPrice from "@/hooks/useBandPrice";
import usePriceAndQuantity from "@/store/usePriceAndQuantity.store";
import { StockProps } from "@/types/stock";
import { tradeTypes } from "@/utils/constant";
import React, { useEffect, useMemo, useState } from "react";
import { BuyAction } from "./BuyAction";
import { LimitOrder, MarketBuy, PrimaryBurn, PrimaryMin } from "./tradeTypes";
import { SellAction } from "./SellAction";
import Terms from "../../Terms";

export default function TradeBar({ data }: { data: StockProps }) {
  const [active, setActive] = useState("limit-order");

  const { evmAddress, ticker } = data;

  const { price, lowestPrice, highestPrice } = useBandPrice(evmAddress);

  const { setPriceLimits } = usePriceAndQuantity();

  useEffect(() => {
    if (highestPrice || lowestPrice) setPriceLimits(lowestPrice, highestPrice);
  }, [lowestPrice, highestPrice, setPriceLimits]);

  const currentScreen = useMemo(() => {
    switch (active) {
      case "limit-order":
        return <LimitOrder evmAddress={evmAddress} ticker={ticker} />;
      case "mint":
        return <PrimaryMin />;
      case "burn":
        return <PrimaryBurn />;
      default:
        return <MarketBuy price={price} />;
    }
  }, [active, price, evmAddress, ticker]);

  return (
    <>
      <aside className="w-full !space-y-3 px-3 py-5 lg:w-[27%] lg:px-6">
        <h4 className="text-grey-900 !text-xl !font-semibold lg:!text-2xl">
          Trade
        </h4>

        <CustomSelect
          label="Trade Type"
          name="trade"
          options={tradeTypes}
          defaultValue={active}
          onChange={(e) => setActive(e)}
          contentsClassName="min-w-72"
        />

        {currentScreen}
      </aside>
      <BuyAction stock={data} />
      <SellAction stock={data} />
      <Terms />
    </>
  );
}
