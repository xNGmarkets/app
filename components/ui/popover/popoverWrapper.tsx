import React, { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "@/libs/utils";

const PopoverWrapper = ({
  icon,
  title,
  className,
  triggerClassName,
  children,
}: {
  icon?: ReactNode;
  title?: ReactNode;
  className?: string;
  triggerClassName?: string;
  children: ReactNode;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild className={triggerClassName}>
        <button className={"flex items-center gap-0.5"}>
          {title} {icon ? icon : <FaChevronDown />}
        </button>
      </PopoverTrigger>

      <PopoverContent className={cn("mr-5 bg-white", className)}>
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverWrapper;
