import mongoose, { Document, Schema } from "mongoose";

interface IWatchList extends Document {
  userId: Schema.Types.ObjectId;
  stockIds: Schema.Types.ObjectId[];
}

const WatchListSchema: Schema = new Schema<IWatchList>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    stockIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Stock",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.WatchList ||
  mongoose.model<IWatchList>("WatchList", WatchListSchema);
