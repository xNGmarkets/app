import { connectToDatabase } from "@/config";
import userModel from "@/config/models/user.model";
import watchListModel from "@/config/models/watchlist.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const address = searchParams.get("address");

    if (!address) {
      return NextResponse.json(
        { error: "Address query parameter is required" },
        { status: 400 },
      );
    }

    const user = await userModel.findOne({ address: address.toLowerCase() });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const watchList = await watchListModel
      .findOne({ userId: user._id })
      .populate("stockIds");

    if (!watchList) {
      return NextResponse.json(
        { message: "WatchList is empty", watchList: [] },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { watchList: watchList.stockIds },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { address, stockId } = body;

    if (!address || !stockId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const user = await userModel.findOneAndUpdate(
      { address: address.toLowerCase() },
      { $setOnInsert: { address: address.toLowerCase() } },
      { upsert: true, new: true },
    );

    const userId = user._id;
    const watchList = await watchListModel.findOne({ userId });

    if (watchList) {
      if (watchList.stockIds.includes(stockId)) {
        //remove item from watchList
        watchList.stockIds = watchList.stockIds.filter(
          (id: string) => id.toString() !== stockId,
        );
        await watchList.save();
        return NextResponse.json(
          { message: "Item removed from watchList", watchList },
          { status: 200 },
        );
      } else {
        watchList.stockIds.push(stockId);
        await watchList.save();
        return NextResponse.json(
          { message: "Item added to watchList", watchList },
          { status: 200 },
        );
      }
    } else {
      const newWatchList = new watchListModel({ userId, stockIds: [stockId] });
      await newWatchList.save();
      return NextResponse.json(
        {
          message: "Watchlist created and item added",
          watchList: newWatchList,
        },
        { status: 201 },
      );
    }
  } catch (error) {
    console.error("Error adding item to watchList:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
