import { connectToDatabase } from "@/config";
import orderModel from "@/config/models/order.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ stockId: string }> },
) {
  try {
    await connectToDatabase();
    const { stockId } = await params;
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get("limit") || "50", 10); // default 50

    // 🔹 Get SELL orders (asks)
    const asks = await orderModel
      .find({ stockId, type: "sell" })
      .sort({ createdAt: -1 })
      .limit(limit);

    // 🔹 Get BUY orders (bids)
    const bids = await orderModel
      .find({ stockId, type: "buy" })
      .sort({ createdAt: -1 })
      .limit(limit);

    return NextResponse.json({ asks, bids });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
