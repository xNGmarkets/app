import React from "react";

export const BandPCT = ({
  bandPct,
  className,
}: {
  className?: string;
  bandPct: number;
}) => {
  return <span className={className}>±{bandPct}%</span>;
};
