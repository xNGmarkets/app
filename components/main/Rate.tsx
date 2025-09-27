"use client";

import useExchangeRate from "@/hooks/useExchangeRate";
import React from "react";

const Rate = () => {
  const rate = useExchangeRate();
  return (
    <div className="card !rounded-full px-3 py-1">
      <small>$1 - ₦{rate.toLocaleString()}</small>
    </div>
  );
};

export default Rate;
