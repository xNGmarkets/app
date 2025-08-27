import React from "react";
import "./movingItems.scss";
import Image from "next/image";
import { CountryFlag } from "@/utils/helper";
import Marquee from "react-fast-marquee";

const countryList = [
  {
    title: "Mauritius",
    code: "MU",
  },
  {
    title: "Uganda",
    code: "UG",
  },
  {
    title: "South Africa",
    code: "ZA",
  },
  {
    title: "Nigeria",
    code: "NG",
  },
  {
    title: "Ghana",
    code: "GH",
  },
];

export const MovingCountries = () => {
  return (
    <section className="my-6 max-w-2xl flex-1">
      <Marquee speed={50} gradient={false} className="justify-between" autoFill>
        {countryList.map(({ title, code }, idx) => (
          <figure
            key={idx}
            className="relative !mx-10 !size-9 overflow-hidden !rounded-full"
          >
            <Image
              src={CountryFlag(code)}
              fill
              sizes="100%"
              alt={title}
              className=""
            />
          </figure>
        ))}
      </Marquee>
    </section>
  );
};
