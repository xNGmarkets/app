import React, { Fragment } from "react";
import { GridCard } from "./gridCard";
import { StockProps } from "@/types/stock";

export const GridView = ({ data }: { data: StockProps[] }) => {
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
