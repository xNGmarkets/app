import mongoose, { Document, Schema } from "mongoose";

interface ISupply extends Document {
  userId: Schema.Types.ObjectId;
  amount: number;
}

const SupplySchema: Schema = new Schema<ISupply>(
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
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Supply ||
  mongoose.model<ISupply>("Supply", SupplySchema);
