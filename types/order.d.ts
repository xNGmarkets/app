export interface OrderProps {
  id: number;
  trader: string;
  asset: string;
  type: "buy" | "sell";
  isMarketBuy: boolean;
  quantity: number;
  price: number;
  date: string;
  isActive: boolean;
}
