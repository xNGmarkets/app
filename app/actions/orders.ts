"use server";

import { connectToDatabase } from "@/config";
import orderModel from "@/config/models/order.model";
import userModel from "@/config/models/user.model";
import { revalidatePath } from "next/cache";

//create new order
export async function createOrder(data: {
  userAddress: string;
  stockId: string;
  orderId: number;
  type: "buy" | "sell";
  price: number;
  quantity: number;
  tradeType: "limit-order" | "market-buy" | "mint" | "burn";
}) {
  try {
    await connectToDatabase();

    const user = await userModel.findOneAndUpdate(
      { address: data.userAddress.toLowerCase() },
      { $setOnInsert: { address: data.userAddress.toLowerCase() } },
      { upsert: true, new: true },
    );

    await orderModel.create({
      userId: user._id,
      stockId: data.stockId,
      orderId: data.orderId,
      type: data.type,
      price: data.price,
      quantity: data.quantity,
      tradeType: data.tradeType,
    });

    // revalidate UI
    revalidatePath(`/markets/${data.stockId}`);

    return {
      success: true,
    };
  } catch (error) {
    console.error("error while creating order", error);
    return { success: false };
  }
}
