import mongoose, { Document, Schema } from "mongoose";

interface IWishlist extends Document {
  userId: Schema.Types.ObjectId;
  stockIds: Schema.Types.ObjectId[];
}

const WishlistSchema: Schema = new Schema<IWishlist>(
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

export default mongoose.models.Wishlist ||
  mongoose.model<IWishlist>("Wishlist", WishlistSchema);
