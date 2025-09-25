import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  address: string;
  email: string;
  kycStatus: string;
  notifications: {
    riskAlerts: boolean;
    newsUpdates: boolean;
    dividendAlerts: boolean;
    tradeConfirmations: boolean;
  };
}

const UserSchema: Schema = new Schema<IUser>(
  {
    address: { type: String, required: true, unique: true },
    email: { type: String, default: null, unique: true },
    kycStatus: {
      type: String,
      default: "unverified",
      enum: ["unverified", "pending", "verified"],
    },
    notifications: {
      riskAlerts: { type: Boolean, default: true },
      newsUpdates: { type: Boolean, default: true },
      dividendAlerts: { type: Boolean, default: true },
      tradeConfirmations: { type: Boolean, default: true },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
