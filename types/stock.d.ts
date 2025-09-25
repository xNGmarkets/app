export interface StockProps {
  _id: string;
  ticker: string;
  logo: string;
  tokenId: string;
  evmAddress: string;
  kycLevel: number;
  dividendRatio: number;
  company: string;
  sector: string;
  finance: string | null;
  profile: string | null;
  news: string | null;
  dividendHistory: string | null;
}
