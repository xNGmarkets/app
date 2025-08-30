"use client";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { marketCards, tradeTypes } from "@/utils/constant";
import React, { useState } from "react";
import { LimitOrder, MarketBuy, PrimaryBurn, PrimaryMin } from "./tradeTypes";
import { MarketInstrument } from "@/types/martkes";

export default function TradeBar({ marketId }: { marketId: string }) {
  const data = marketCards?.find((i) => i?.id === marketId);

  const { lastPrice } = data
    ? (data as MarketInstrument)
    : ({} as MarketInstrument);
  const [active, setActive] = useState("limit-order");

  let currentScreen;

  switch (active) {
    case "limit-order":
      currentScreen = <LimitOrder />;
      break;
    case "mint":
      currentScreen = <PrimaryMin />;
      break;
    case "burn":
      currentScreen = <PrimaryBurn />;
      break;
    default:
      currentScreen = <MarketBuy price={lastPrice} />;
  }
  return (
    <aside className="w-full !space-y-3 px-3 py-5 lg:w-[27%] lg:px-6">
      <h4 className="text-grey-900 !text-xl !font-semibold lg:!text-2xl">
        Trade
      </h4>

      <CustomSelect
        label="Trade Type"
        name="trade"
        value={active}
        options={tradeTypes}
        onChange={(e) => setActive(e)}
        contentsCassName="min-w-72"
      />

      {currentScreen}
    </aside>
  );
}
