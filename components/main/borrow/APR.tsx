"use client";
import useBorrowAPR from "@/hooks/useBorrowAPR";
import React from "react";

const APR = () => {
  const apr = useBorrowAPR();
  return (
    <h5 className="text-grey-700 text-sm">
      Borrow USDC against xNGX stocks{" "}
      <span className="text-warning-500">APR {apr}%</span>
    </h5>
  );
};

export default APR;
