"use client";
import { useMarketContext } from "@/context/marketContext";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

export const Star = ({ id, size }: { id: string; size?: number }) => {
  const { isFavorite, toggleFavorite } = useMarketContext();

  return isFavorite(id) ? (
    <button onClick={() => toggleFavorite(id)}>
      <FaStar className="text-warning-300" size={size ?? 20} />
    </button>
  ) : (
    <button onClick={() => toggleFavorite(id)}>
      <FaRegStar className="text-grey-800" size={size ?? 20} />
    </button>
  );
};
