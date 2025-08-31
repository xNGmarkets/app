import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { ApexChart } from "./apexChart";

export const SparkLineChart = ({
  series,
  gainers,
  changedVPercentage,
  width,
  heigh,
  className,
}: {
  gainers?: boolean;
  width?: number;
  heigh?: number;
  className?: string;
  changedVPercentage?: string;
  series: {
    data: number[];
    name?: string;
  }[];
}) => {
  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: width ?? 3 },
    tooltip: { enabled: false },
    colors: [gainers ? "#008053" : "#F04438"],
  };

  return (
    <div className={`${className} flex flex-col items-end justify-end`}>
      <ApexChart
        options={options}
        data={series}
        type="line"
        height={heigh ?? 60}
      />
      {changedVPercentage && (
        <p
          className={`!text-xs font-medium ${gainers ? "text-primary" : "text-error-500"} flex items-center gap-1`}
        >
          {gainers ? <FaCaretUp /> : <FaCaretDown />} {changedVPercentage}%
        </p>
      )}
    </div>
  );
};
