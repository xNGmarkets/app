import React from "react";
import "./movingItems.scss";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const countryList = [
  {
    title: "ZenithBank",
    logo: "https://s3-symbol-logo.tradingview.com/zenith-bank-plc.svg",
  },
  {
    title: "WEMABANK",
    logo: "https://s3-symbol-logo.tradingview.com/wema-bank-plc.svg",
  },
  {
    title: "AccessBank",
    logo: "https://s3-symbol-logo.tradingview.com/access-bank-plc.svg",
  },
  {
    title: "Guaranty Trust Bank",
    logo: "https://s3-symbol-logo.tradingview.com/guaranty-trust-company-plc.svg",
  },
  {
    title: "Fidelity Bank PLC",
    logo: "https://s3-symbol-logo.tradingview.com/fidelity-bank-plc.svg",
  },
  {
    title: "United Bank for Africa",
    logo: "https://s3-symbol-logo.tradingview.com/united-bank-for-africa-plc-nigeria.svg",
  },
  {
    title: "Jaiz Bank",
    logo: "https://s3-symbol-logo.tradingview.com/jaiz-bank-plc.svg",
  },
];

export const MovingItems = () => {
  return (
    <section className="w-full py-5">
      <Marquee speed={50} gradient={false} className="justify-between" autoFill>
        {countryList.map(({ title, logo }, idx) => (
          <div
            key={idx}
            className="card text-grey-800 mx-3 flex items-center gap-3 p-2"
          >
            <figure className="relative !size-8 overflow-hidden rounded-full">
              <Image src={logo} alt={title} fill sizes="100%" />
            </figure>
            <span className="text-grey-800 text-sm font-semibold">{title}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
