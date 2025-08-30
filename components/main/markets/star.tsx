"use client";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

export const Star = ({
  clicked = false,
  size,
}: {
  clicked?: boolean;
  size?: number;
}) => {
  const [isClicked, setIsclicked] = useState(false);
  return clicked || isClicked ? (
    <FaStar
      className="text-warning-300"
      size={size ?? 20}
      onClick={() => setIsclicked(false)}
    />
  ) : (
    <FaRegStar
      className="text-grey-800"
      size={size ?? 20}
      onClick={() => setIsclicked(false)}
    />
  );
};
