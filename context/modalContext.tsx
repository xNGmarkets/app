"use client";
import { useModal } from "@/hooks/useModal";
import React from "react";
import { createContext, FC, ReactNode, useContext } from "react";

type othersdata = {
  children: ReactNode;
};

// Define the type for the context
type ModalContextType = ReturnType<typeof useModal> & othersdata;

// Create the context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the provider component
export const ModalProvider: FC<othersdata> = ({ children }) => {
  const modals = useModal();

  const val = { children, ...modals };

  return <ModalContext.Provider value={val}>{children}</ModalContext.Provider>;
};

// Custom hook to consume the context
export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
