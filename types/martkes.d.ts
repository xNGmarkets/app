import { StaticImageData } from "next/image";

export type MarketInstrument = {
  id?: string;
  gainers: boolean;
  symbol: string; // e.g., "xNGX"
  ticker: string; // e.g., "ZenithBank"
  company: string; // e.g., "Zenith Bank PLC"
  sector?: string; // e.g., "Energy"
  kycLevel?: string; // e.g., "KYC L1"
  bandPct?: number; // e.g., 1.20 means ±1.20%
  dividends?: number; // e.g., 3.8
  lastPrice: number; // NGN (₦) numeric
  askPrice?: number; // NGN
  bidPrice?: number; // NGN
  change24hPct: number; // e.g., 20.45 for +20.45%
  changes?: number[];
  logo?: StaticImageData | null;
};
