"use client";
import React, { memo, useEffect, useRef } from "react";

export const ChartScreen = ({ symbol }: { symbol: string }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "NSENG:${symbol}",
          "theme": "light",
          "timezone": "Etc/UTC",
          "backgroundColor": "#ffffff",
          "gridColor": "rgba(46, 46, 46, 0.06)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
    if (container.current) container.current.appendChild(script);
  }, [symbol]);
  return (
    <div className="h-96">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
      {/* <article className="container grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
        <ul className="card !space-y-4 !p-4">
          <li className="text-grey-900 flex justify-between gap-2">Asks</li>
          <li className="text-error-500 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>300</span>
          </li>
          <li className="text-error-500 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>220</span>
          </li>
          <li className="text-error flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>160</span>
          </li>
        </ul>
        <ul className="card !space-y-4 !p-4">
          <li className="text-grey-900 flex justify-between gap-2">Bids</li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>300</span>
          </li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>220</span>
          </li>
          <li className="text-success-100 flex justify-between gap-2 !text-sm">
            <span>₦283.60</span>
            <span>160</span>
          </li>
        </ul>
      </article> */}
    </div>
  );
};

export default memo(ChartScreen);
