"use client";
import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import PopoverWrapper from "../popover/popoverWrapper";
type OptionData = { label: string; value: string; icon?: ReactNode };

type InputFieldProps = {
  name: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  options: string[] | OptionData[];
  search?: boolean;
  onChange: (val: string) => void;
};

export const CustomSelect = ({
  options,
  placeholder,
  value,
  onChange,
  className,
}: InputFieldProps) => {
  // Find selected option if it's an object
  const selectedOption =
    (options as OptionData[])?.find((i) => i.value === value) ?? null;

  return (
    <PopoverWrapper
      selected={
        <span className="flex items-center gap-2">
          {selectedOption?.icon ? (
            <span className="text-lg">{selectedOption.icon}</span>
          ) : null}
          {selectedOption ? selectedOption?.label : value || placeholder}
        </span>
      }
      triggerClassName={className}
    >
      <ul className="divide-grey-25 w-full divide-y overflow-hidden">
        {options?.map((item, idx) => {
          // Handle string option
          if (typeof item === "string") {
            const isActive = item === value;
            return (
              <li
                key={idx}
                className={`text-grey-700 hover:bg-grey-25 my-1 flex cursor-pointer items-center gap-2 px-3 py-2`}
                onClick={() => onChange(item)}
              >
                {item}{" "}
                {isActive ? <FaCheck size={12} className="text-primary" /> : ""}
              </li>
            );
          }

          // Handle object option
          const option = item as OptionData;
          const isActive = option.value === value;

          return (
            <li
              key={option.value}
              className={`text-grey-700 hover:bg-grey-25 my-1 flex cursor-pointer items-center justify-between gap-2 px-3 py-2`}
              onClick={() => onChange(option.value)}
            >
              <span className="flex items-center gap-1">
                {option.icon ? <>{option.icon}</> : null} {option.label}
              </span>
              {isActive ? <FaCheck size={12} className="text-primary" /> : ""}
            </li>
          );
        })}
      </ul>
    </PopoverWrapper>
  );
};
