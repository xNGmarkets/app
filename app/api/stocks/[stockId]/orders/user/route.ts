import { connectToDatabase } from "@/config";
import orderModel from "@/config/models/order.model";
import userModel from "@/config/models/user.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ stockId: string }> },
) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const { stockId } = await params;
    const userAddress = searchParams.get("address");

    if (!stockId || !userAddress) {
      return NextResponse.json(
        { error: "Missing stockId or userAddress" },
        { status: 400 },
      );
    }

    const user = await userModel.findOne({
      address: userAddress.toLowerCase(),
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const orders = await orderModel
      .find({ stockId, userId: user._id })
      .sort({ createdAt: -1 });

    return NextResponse.json(orders);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
