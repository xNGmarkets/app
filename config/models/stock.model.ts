import mongoose, { Document, Schema } from "mongoose";

interface IStock extends Document {
  ticker: string;
  logo: string;
  tokenId: string;
  evmAddress: string;
  kycLevel: number;
  dividendRatio: number;
  company: string;
  sector: string;
  finance: string;
  profile: string;
  news: string;
  dividendHistory: string;
}

const StockSchema: Schema = new Schema<IStock>(
  {
    ticker: { type: String, required: true, unique: true },
    logo: { type: String, required: true },
    tokenId: { type: String, required: true, unique: true },
    evmAddress: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    sector: { type: String, required: true },
    profile: { type: String, default: null },
    kycLevel: { type: Number, default: 1 },
    dividendRatio: { type: Number, default: 0 },
    finance: { type: String, default: null },
    news: { type: String, default: null },
    dividendHistory: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Stock ||
  mongoose.model<IStock>("Stock", StockSchema);
