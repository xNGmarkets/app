import { useState } from "react";

export type Value = "amount" | "qty";

export const useTrade = () => {
  const [value, setValue] = useState({
    amount: "",
    qty: "",
  });

  const [errors, setErrors] = useState({
    amount: "",
    qty: "",
  });

  const increase = (type: Value) => {
    setValue((prev) => {
      const newValue = Number(prev[type]) + 1;
      return {
        ...prev,
        [type]: String(newValue),
      };
    });
  };

  const decrease = (type: Value) => {
    setValue((prev) => {
      const newValue = Number(prev[type]) - Number(prev[type]) + 1;
      return {
        ...prev,
        [type]: String(newValue),
      };
    });
  };

  const handleValueChange = (type: Value, val: string) => {
    if (val === "") {
      setValue((prev) => ({
        ...prev,
        [type]: "",
      }));
      setErrors((prev) => ({ ...prev, [type]: "" }));
      return;
    } else {
      setValue((prev) => ({
        ...prev,
        [type]: val,
      }));
    }
  };

  return {
    value,
    errors,
    increase,
    decrease,
    handleValueChange,
  };
};
