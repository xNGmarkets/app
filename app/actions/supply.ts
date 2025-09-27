"use server";

import { connectToDatabase } from "@/config";
import supplyModel from "@/config/models/supply.model";
import userModel from "@/config/models/user.model";
import { revalidatePath } from "next/cache";

export async function addSupplyRecord(data: {
  userAddress: string;
  amount: number;
}) {
  try {
    await connectToDatabase();

    const user = await userModel.findOneAndUpdate(
      { address: data.userAddress.toLowerCase() },
      { $setOnInsert: { address: data.userAddress.toLowerCase() } },
      { upsert: true, new: true },
    );

    await supplyModel.create({
      userId: user._id,
      amount: data.amount,
    });

    revalidatePath(`/supply`);

    return {
      success: true,
    };
  } catch (error) {
    console.error("error while adding supply record", error);
    return { success: false };
  }
}
