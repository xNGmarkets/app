"use client";
import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import PopoverWrapper from "../popover/popoverWrapper";
import { cn } from "@/libs/utils";
import { useGlobalHooks } from "@/hooks/globalHooks";
type OptionData = {
  label: string;
  value: string;
  icon?: ReactNode;
  [key: string]: unknown;
};

type InputFieldProps = {
  name: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  contentsCassName?: string;
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
  contentsCassName,
  label,
}: InputFieldProps) => {
  const { show, setShow } = useGlobalHooks();
  // Find selected option if it's an object
  const selectedOption =
    (options as OptionData[])?.find((i) => i.value === value) ?? null;

  return (
    <div>
      {label && <h5 className="text-grey-700 !mb-2 text-sm">{label}</h5>}
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
        open={show}
        setOpen={setShow}
      >
        <ul
          className={cn(
            "divide-grey-25 w-full divide-y overflow-hidden",
            contentsCassName,
          )}
        >
          {options?.map((item, idx) => {
            // Handle string option
            if (typeof item === "string") {
              const isActive = item === value;
              return (
                <li
                  key={idx}
                  className={`text-grey-700 hover:bg-grey-25 my-1 flex cursor-pointer items-center gap-2 px-3 py-2`}
                  onClick={() => {
                    onChange(item);
                    setShow(false);
                  }}
                >
                  {item}{" "}
                  {isActive ? (
                    <FaCheck size={12} className="text-primary" />
                  ) : (
                    ""
                  )}
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
                onClick={() => {
                  onChange(option.value);
                  setShow(false);
                }}
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
    </div>
  );
};
