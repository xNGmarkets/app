import { connectToDatabase } from "@/config";
import supplyModel from "@/config/models/supply.model";
import userModel from "@/config/models/user.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const userAddress = searchParams.get("address");

    if (!userAddress) {
      return NextResponse.json(
        { error: "Missing userAddress" },
        { status: 400 },
      );
    }

    const user = await userModel.findOne({
      address: userAddress.toLowerCase(),
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const supplies = await supplyModel
      .find({ userId: user._id })
      .sort({ createdAt: -1 });

    return NextResponse.json(supplies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
