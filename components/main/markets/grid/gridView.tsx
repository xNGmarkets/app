import { marketCards } from "@/utils/constant";
import React, { Fragment } from "react";
import { GridCard } from "./gridCard";

export const GridView = () => {
  return (
    <ul className="grid grid-cols-1 justify-between gap-3 md:grid-cols-3">
      {marketCards.map((item, idx) => (
        <Fragment key={idx}>
          <GridCard data={item} />
        </Fragment>
      ))}
    </ul>
  );
};
