"use client";
import { useGlobalHooks } from "@/hooks/globalHooks";
import { cn } from "@/libs/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useMemo } from "react";
import { FaCheck } from "react-icons/fa6";
import PopoverWrapper from "../popover/popoverWrapper";

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
  contentsClassName?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: string[] | OptionData[];
  search?: boolean;
  onChange?: (val: string) => void;
};

export const CustomSelect = ({
  options,
  placeholder,
  className,
  contentsClassName,
  onChange,
  label,
  name,
  defaultValue,
}: InputFieldProps) => {
  const { show, setShow } = useGlobalHooks();

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const value = searchParams.get(name) || defaultValue;
  const selectedOption = useMemo(
    () => (options as OptionData[])?.find((i) => i.value === value) ?? null,
    [value, options],
  );

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value !== "all") {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  };

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
            contentsClassName,
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
                    handleFilter(item);
                    onChange?.(item);
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
                  handleFilter(option.value);
                  onChange?.(option.value);
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
