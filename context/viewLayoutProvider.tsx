"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type View = "table" | "grid";

type ViewLayoutValues = {
  view: View;
  handleView: (type: View) => void;
  currency: string;
  setCurrency: (val: string) => void;
};

const ViewLayoutContext = createContext<ViewLayoutValues>(
  {} as ViewLayoutValues,
);

export default function ViewLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [view, setView] = useState<View>("grid");
  const [currency, setCurrency] = useState("₦");

  const handleView = (type: View) => setView(type);

  const value = {
    view,
    handleView,
    currency,
    setCurrency,
  };

  return (
    <ViewLayoutContext.Provider value={value}>
      {children}
    </ViewLayoutContext.Provider>
  );
}

export function useViewLayoutContext() {
  const context = useContext(ViewLayoutContext);

  if (context === undefined) {
    throw new Error(
      "useViewLayoutContext must be used within a ViewLayoutProvider",
    );
  }

  return context;
}
