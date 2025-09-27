import { SIDE } from "@/constants";
import { OrderProps } from "@/types/order";
import { formatUnits } from "viem";

export function processedOrders(orders: any[]): OrderProps[] {
  return orders.map((order, index) => ({
    id: index,
    trader: order[0],
    asset: order[1],
    type: order[2] === SIDE.Buy ? "buy" : "sell",
    isMarketBuy: order[3],
    quantity: Number(formatUnits(order[4], 6)) ?? 1,
    price: Number(formatUnits(order[5], 6)),
    date: new Date(Number(order[6] ?? 0) * 1000).toLocaleString(),
    isActive: order[7],
  }));
}

interface sortedOrderResponse {
  asks: OrderProps[];
  bids: OrderProps[];
}

export function sortOrders(
  asset: string,
  orders: OrderProps[],
): sortedOrderResponse {
  const orderForAsset = orders.filter((order) => order.asset === asset);

  const bids = orderForAsset.filter((order) => order.type === "buy");
  const asks = orderForAsset.filter((order) => order.type === "sell");
  return { bids, asks };
}
