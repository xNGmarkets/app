import React from "react";
import "./movingItems.scss";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const stockList = [
  {
    symbol: "MTNN",
    name: "MTN Nigeria",
    logo: "https://s3-symbol-logo.tradingview.com/mtn-nigeria-communications-plc.svg",
  },
  {
    symbol: "UBA",
    name: "UBA PLC",
    logo: "https://s3-symbol-logo.tradingview.com/united-bank-for-africa-plc-nigeria.svg",
  },
  {
    symbol: "GTCO",
    name: "GTCO",
    logo: "https://s3-symbol-logo.tradingview.com/guaranty-trust-company-plc.svg",
  },
  {
    symbol: "ZENITH",
    name: "Zenith Bank",
    logo: "https://s3-symbol-logo.tradingview.com/zenith-bank-plc.svg",
  },
  {
    symbol: "ARADEL",
    name: "Aradel Holdings",
    logo: "https://s3-symbol-logo.tradingview.com/aradel.svg",
  },
  {
    symbol: "TOTAL",
    name: "TotalEnergies",
    logo: "https://s3-symbol-logo.tradingview.com/total.svg",
  },
  {
    symbol: "AIICO",
    name: "AIICO Insurance",
    logo: "https://s3-symbol-logo.tradingview.com/aiico-insurance-plc.svg",
  },
  {
    symbol: "CORNERST",
    name: "Cornerstone Ins.",
    logo: "https://s3-symbol-logo.tradingview.com/cornerstone-insurance-co-plc.svg",
  },
  {
    symbol: "OKOMUOIL",
    name: "Okomu Oil",
    logo: "https://s3-symbol-logo.tradingview.com/okomu-oil-palm-co-plc.svg",
  },
  {
    symbol: "PRESCO",
    name: "Presco",
    logo: "https://s3-symbol-logo.tradingview.com/presco-plc.svg",
  },
  {
    symbol: "NESTLE",
    name: "Nestlé Nigeria",
    logo: "https://s3-symbol-logo.tradingview.com/nestle.svg",
  },
  {
    symbol: "DANGSUGAR",
    name: "Dangote Sugar",
    logo: "https://s3-symbol-logo.tradingview.com/dangote-sugar-refinery-plc.svg",
  },
];

export const MovingItems = () => {
  return (
    <section className="w-full py-5">
      <Marquee speed={50} gradient={false} className="justify-between" autoFill>
        {stockList.map(({ symbol, logo }, idx) => (
          <div
            key={idx}
            className="card text-grey-800 mx-3 flex items-center gap-3 p-2"
          >
            <figure className="relative !size-8 overflow-hidden rounded-full">
              <Image src={logo} alt={symbol} fill sizes="100%" />
            </figure>
            <span className="text-grey-800 text-sm font-semibold">
              {symbol}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
