import { connectToDatabase } from "@/config";
import stockModel from "@/config/models/stock.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const {
      ticker,
      logo,
      tokenId,
      evmAddress,
      company,
      sector,
      profile,
      kycLevel,
      dividendRatio,
      finance,
      news,
      dividendHistory,
    } = body;

    if (!ticker || !logo || !tokenId || !evmAddress || !sector || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Prevent duplicates
    const exists = await stockModel.findOne({
      $or: [{ ticker }, { tokenId }, { evmAddress }],
    });

    if (exists) {
      return NextResponse.json(
        { error: "Stock with ticker, tokenId, or evmAddress already exists" },
        { status: 409 },
      );
    }

    const stock = new stockModel({
      ticker,
      logo,
      tokenId,
      evmAddress,
      company,
      sector,
      profile,
      kycLevel,
      dividendRatio,
      finance,
      news,
      dividendHistory,
    });

    await stock.save();

    return NextResponse.json(
      { message: "Stock created successfully", stock },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating stock:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
