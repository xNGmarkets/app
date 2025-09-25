import React from "react";
import { FaStar } from "react-icons/fa6";

export const Dividends = ({
  dividends,
  className,
}: {
  className?: string;
  dividends?: number;
}) => {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      {dividends?.toFixed(1) ?? 5}{" "}
      <FaStar size={12} className="text-warning-300" />
    </span>
  );
};
