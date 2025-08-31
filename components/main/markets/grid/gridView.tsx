import React, { Fragment } from "react";
import { GridCard } from "./gridCard";
import { MarketInstrument } from "@/types/martkes";

export const GridView = ({ data }: { data: MarketInstrument[] }) => {
  return (
    <ul className="grid grid-cols-1 justify-between gap-3 md:grid-cols-3">
      {data.map((item, idx) => (
        <Fragment key={idx}>
          <GridCard data={item} />
        </Fragment>
      ))}
    </ul>
  );
};
