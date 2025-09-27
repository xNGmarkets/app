"use client";
import TableComponent, {
  Column,
} from "@/components/ui/tableComponent/tableComponent";
import { useGetUserOrdersByStockAddressAndUserAddress } from "@/hooks/useGetOrders";
import { cn } from "@/libs/utils";
import { OrderProps } from "@/types/order";
import React from "react";
import { useAccount } from "wagmi";
import { MarketPrice } from "../table/marketPrice";
import { OrderAction } from "./OrderAction";

export const columns: Column<OrderProps & { actions?: string }>[] = [
  {
    title: "DATE",
    key: "date",
    render: (_, { date }) => <>{date}</>,
  },
  {
    title: "PRICE",
    key: "price",
    render: (_, { price }) => <MarketPrice price={price} />,
  },
  {
    title: "QUANTITY",
    key: "quantity",
    render: (_, { quantity }) => <>{quantity}</>,
  },
  {
    title: "TYPE",
    key: "type",
    render: (_, { type }) => (
      <span
        className={cn("text-primary capitalize", {
          "text-red-500": type === "sell",
        })}
      >
        {type}
      </span>
    ),
  },
  {
    title: "Action",
    key: "actions",
    render: (_, record) => <OrderAction data={record} />,
    headerClassName: "text-right",
  },
];

const MyOrder = ({ stockAddress }: { stockAddress: string }) => {
  const { address } = useAccount();
  const data = useGetUserOrdersByStockAddressAndUserAddress(
    stockAddress,
    address as string,
  );
  if (data.length === 0) return;
  return <TableComponent title="My Orders" columns={columns} data={data} />;
};

export default MyOrder;
