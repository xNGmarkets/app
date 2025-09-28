"use server";

import { connectToDatabase } from "@/config";
import borrowModel from "@/config/models/borrow.model";
import userModel from "@/config/models/user.model";
import { revalidatePath } from "next/cache";

export async function addBorrowRecord(data: {
  userAddress: string;
  amount: number;
  usdcDebt: number;
  units: number;
  ltv: number;
}) {
  try {
    await connectToDatabase();

    const user = await userModel.findOneAndUpdate(
      { address: data.userAddress.toLowerCase() },
      { $setOnInsert: { address: data.userAddress.toLowerCase() } },
      { upsert: true, new: true },
    );

    await borrowModel.create({
      userId: user._id,
      amount: data.amount,
      usdcDebt: data.usdcDebt,
      units: data.units,
      ltv: data.ltv,
    });

    revalidatePath(`/borrow`);

    return {
      success: true,
    };
  } catch (error) {
    console.error("error while adding borrow record", error);
    return { success: false };
  }
}

export async function updateBorrowRecord(_id: string, isRepaid: boolean) {
  try {
    await connectToDatabase();

    await borrowModel.findOneAndUpdate(
      { _id },
      { $set: { isRepaid } },
      { new: true },
    );

    revalidatePath(`/borrow`);

    return {
      success: true,
    };
  } catch (error) {
    console.error("error while adding borrow record", error);
    return { success: false };
  }
}
