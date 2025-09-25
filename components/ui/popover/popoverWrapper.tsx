import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "@/libs/utils";

const PopoverWrapper = ({
  icon,
  className,
  triggerClassName,
  selected,
  align = "end",
  open,
  setOpen,
  children,
}: {
  icon?: ReactNode;
  className?: string;
  triggerClassName?: string;
  selected?: ReactNode;
  align?: "start" | "center" | "end";
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        {selected ? (
          <div
            className={cn(
              "border-grey-25 !my-0 flex h-[46px] w-full cursor-pointer items-center justify-between gap-3 rounded-[10px] border bg-white px-3 py-2",
              triggerClassName,
            )}
          >
            <div className="flex-1">{selected}</div>
            <span className="w-">
              {icon ? icon : <FaChevronDown className="text-grey-400" />}
            </span>
          </div>
        ) : (
          <span className="w-">
            {icon ? icon : <FaChevronDown className="text-grey-400" />}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "popover-content-width-same-as-its-trigger mt-1 w-full bg-white",
          className,
        )}
        align={align}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverWrapper;
