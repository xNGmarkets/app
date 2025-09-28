import mongoose, { Document, Schema } from "mongoose";

interface IBorrow extends Document {
  userId: Schema.Types.ObjectId;
  amount: number;
  usdcDebt: number;
  units: number;
  ltv: number;
  isRepaid: boolean;
}

const BorrowSchema: Schema = new Schema<IBorrow>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    usdcDebt: {
      type: Number,
      required: true,
    },
    units: {
      type: Number,
      required: true,
    },
    ltv: {
      type: Number,
      required: true,
    },
    isRepaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Borrow ||
  mongoose.model<IBorrow>("Borrow", BorrowSchema);
