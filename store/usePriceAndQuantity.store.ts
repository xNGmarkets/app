import { create } from "zustand";

interface StoreState {
  price: number;
  quantity: number;

  lowestPrice: number;
  highestPrice: number;
  minQuantity: number;

  tradeMethod: "buy" | "sell";

  // actions
  increasePrice: () => void;
  decreasePrice: () => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;

  setPrice: (value: number) => void;
  setQuantity: (value: number) => void;

  setPriceLimits: (lowest: number, highest: number) => void;
  setQuantityLimits: (min: number, max: number) => void;

  setTradeMethod: (method: "buy" | "sell") => void;

  reset: () => void;
}

const usePriceAndQuantity = create<StoreState>((set) => ({
  price: 0,
  quantity: 1,

  lowestPrice: 0,
  highestPrice: 100,
  minQuantity: 1,

  tradeMethod: "buy",

  setTradeMethod: (method) => set(() => ({ tradeMethod: method })),

  increasePrice: () =>
    set((state) => ({
      price: Math.min(state.price + 1, state.highestPrice),
    })),

  decreasePrice: () =>
    set((state) => ({
      price: Math.max(state.price - 1, state.lowestPrice),
    })),

  increaseQuantity: () =>
    set((state) => ({
      quantity: state.quantity + 1,
    })),

  decreaseQuantity: () =>
    set((state) => ({
      quantity: Math.max(state.quantity - 1, state.minQuantity),
    })),

  setPrice: (value) =>
    set((state) => ({
      price: Math.min(Math.max(value, state.lowestPrice), state.highestPrice),
      // price: value,
    })),

  setQuantity: (value) =>
    set(() => ({
      quantity: value,
    })),

  setPriceLimits: (lowest, highest) =>
    set((state) => ({
      lowestPrice: lowest,
      highestPrice: highest,
      price: Math.min(Math.max(state.price, lowest), highest),
    })),

  setQuantityLimits: (min, max) =>
    set((state) => ({
      minQuantity: min,
      maxQuantity: max,
      quantity: Math.min(Math.max(state.quantity, min), max),
    })),

  reset: () =>
    set((state) => ({
      price: state.lowestPrice,
      quantity: state.minQuantity,
    })),
}));

export default usePriceAndQuantity;
