import mongoose, { Document, Schema } from "mongoose";

interface IOrder extends Document {
  userId: Schema.Types.ObjectId;
  stockId: Schema.Types.ObjectId;
  orderId: number;
  type: string;
  price: number;
  quantity: number;
  status: string;
  tradeType: string;
}

const OrderSchema: Schema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stockId: {
      type: Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
    },
    orderId: {
      type: Number,
      default: null,
    },
    type: {
      type: String,
      enum: ["buy", "sell"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "filled", "closed"],
      default: "open",
    },
    tradeType: {
      type: String,
      enum: ["limit-order", "market-buy", "mint", "burn"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
