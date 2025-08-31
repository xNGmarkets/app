"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type View = "table" | "grid";

type ViewLayoutValues = {
  view: View;
  handleView: (type: View) => void;
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

  const handleView = (type: View) => setView(type);

  const value: ViewLayoutValues = {
    view,
    handleView,
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
