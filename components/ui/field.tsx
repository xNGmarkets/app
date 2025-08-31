import { ReactNode } from "react";

const Field = ({
  title,
  value,
  valuClassName,
}: {
  title: string | ReactNode;
  value: string | ReactNode;
  className?: string;
  valuClassName?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <h5 className="text-grey-700 w-4/12 !text-xs whitespace-nowrap">
        {title}
      </h5>
      <div className="flex-1">
        {typeof value === "string" ? (
          <h5
            className={`text-grey-900 text-sm whitespace-break-spaces ${valuClassName}`}
          >
            {value}
          </h5>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

export default Field;
