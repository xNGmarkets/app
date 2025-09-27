import { StaticImageData } from "next/image";

export type MarketInstrument = {
  id?: string;
  gainers: boolean;
  symbol: string;
  ticker: string;
  company: string;
  sector?: string;
  kycLevel?: string;
  bandPct?: number;
  dividends?: number;
  lastPrice: number;
  askPrice?: number;
  bidPrice?: number;
  change24hPct: number;
  changes?: number[];
  logo?: string | StaticImageData | null;
};

export type BorrowTypes = {
  amounts: number;
  units: number;
  debts: number;
  ltv: number;
  hf: number;
};

export type StockHoldingTypes = {
  amounts: number;
  units: number;
  value: number;
  ltv: number;
  hf: number;
  profitLosss: number;
  changes?: number[];
};

export type SupplyHistoryTypes = {
  date: strring;
  type: string;
  amount: number;
};

export type SupplyTypes = {
  amount: number;
  createdAt: string;
  updatedAt: string;
  _id: string;
};
