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

export function processRawOpenOrders(orders: any[]): OrderProps[] {
  const formattedOrders: OrderProps[] = [];
  const orderIds = orders?.[0];
  orderIds.forEach((orderId: bigint, index: number) => {
    const id = Number(orderId);
    const order = orders?.[1][index];

    formattedOrders.push({
      id,
      trader: order?.trader,
      asset: order?.asset,
      type: order?.side === 0 ? "buy" : "sell",
      isMarketBuy: order?.isMarket,
      quantity: Number(formatUnits(order?.qty?.toString(), 6)) ?? 1,
      price: Number(formatUnits(order?.pxE6?.toString(), 6)),
      date: new Date(Number(order?.ts ?? 0) * 1000).toLocaleString(),
      isActive: order?.active,
    });
  });

  return formattedOrders;
}

export function processRawOrders(orders: any[]): OrderProps[] {
  const formattedOrders: OrderProps[] = [];

  let globalIndex = 0;
  orders.forEach((orderArr) => {
    orderArr.forEach((order: any) => {
      formattedOrders.push({
        id: globalIndex,
        trader: order?.trader,
        asset: order?.asset,
        type: order?.side === 0 ? "buy" : "sell",
        isMarketBuy: order?.isMarket,
        quantity: Number(formatUnits(order?.qty?.toString(), 6)) ?? 1,
        price: Number(formatUnits(order?.pxE6?.toString(), 6)),
        date: new Date(Number(order?.ts ?? 0) * 1000).toLocaleString(),
        isActive: order?.active,
      });
      globalIndex++;
    });
  });

  return formattedOrders;
}

interface sortedOrderResponse {
  asks: OrderProps[];
  bids: OrderProps[];
}

export function sortOrders(orders: OrderProps[]): sortedOrderResponse {
  const bids = orders.filter((order) => order.type === "buy");
  const asks = orders.filter((order) => order.type === "sell");
  return { bids, asks };
}
