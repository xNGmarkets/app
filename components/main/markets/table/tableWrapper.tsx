"use client";

import Button from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/tableComponent/table";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import { cn } from "@/libs/utils";
import { StockProps } from "@/types/stock";
import React from "react";
import { GridView } from "../grid/gridView";
import { Star } from "../star";
import { BandPCT } from "./bandPCT";
import { Dividends } from "./dividends";
import { MarketPrice } from "./marketPrice";
import useBandPrice from "@/hooks/useBandPrice";

const RowData = ({ record }: { record: StockProps }) => {
  const {
    band,
    price,
    lowestPrice: bidPrice,
    highestPrice: askPrice,
  } = useBandPrice(record.evmAddress);
  return (
    <TableRow className="hover:bg-grey-25">
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <div className="flex items-center gap-3">
          <Star id={record._id!} />
          <UserAvatar
            url={record?.logo}
            displayName={record?.ticker}
            initials={record?.ticker}
            subText={record?.company}
          />
        </div>
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <span className="inline-block first-letter:capitalize">
          {record.sector}
        </span>
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        KYC L{record.kycLevel}
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <BandPCT bandPct={band} />
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <Dividends dividends={record.dividendRatio} />
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <MarketPrice price={askPrice} />
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <MarketPrice price={bidPrice} />
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <MarketPrice price={price} />
      </TableCell>
      <TableCell
        className={cn("text-grey-800 py-5 font-medium whitespace-nowrap")}
      >
        <Button
          link
          href={`/markets/${record?._id}`}
          className="pry-btn !text-sm"
        >
          Open Trade
        </Button>
      </TableCell>
    </TableRow>
  );
};

const columns = [
  "Name",
  "Sector",
  "KYC",
  "Band",
  "Dividends",
  "Ask Price",
  "Bid Price",
  "Buy Price",
  "Action",
];

const TableComponent = ({ data }: { data: StockProps[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className={cn(
                "text-grey-500 text-sm font-medium whitespace-nowrap uppercase",
              )}
            >
              {column}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row) => (
          <RowData key={row._id} record={row} />
        ))}
      </TableBody>
    </Table>
  );
};

export const TableWrapper = ({ data }: { data: StockProps[] }) => {
  const { view } = useViewLayoutContext();

  return view === "table" ? (
    <TableComponent data={data} />
  ) : (
    <GridView data={data} />
  );
};
