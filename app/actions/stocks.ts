"use server";

import stockModel from "@/config/models/stock.model";
import { connectToDatabase } from "../../config";

export async function getStocks(sector = "", searchQuery = "", sort = "") {
  try {
    await connectToDatabase();
    let query = {};
    if (sector) {
      query = {
        sector,
      };
    }

    if (searchQuery) {
      query = {
        ...query,
        $or: [
          { ticker: { $regex: searchQuery, $options: "i" } },
          { company: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }

    let sortOption = {};
    if (sort) {
      if (sort === "dividendScore") {
        sortOption = { dividendRatio: -1 };
      } else if (sort === "priceHighLow") {
        sortOption = { dividendRatio: -1 };
      } else if (sort === "priceLowHigh") {
        sortOption = { dividendRatio: 1 };
      }
    }

    const stocks = await stockModel.find(query).sort(sortOption);
    const parsed = JSON.parse(JSON.stringify(stocks));
    return parsed;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
}

export async function getStock(id: string) {
  try {
    await connectToDatabase();
    const stock = await stockModel.findById(id);
    const parsed = JSON.parse(JSON.stringify(stock));
    return parsed;
  } catch (error) {
    console.error(`Error fetching stock ${id}:`, error);
    return null;
  }
}
