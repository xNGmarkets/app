"use client";
import { useViewLayoutContext, View } from "@/context/viewLayoutProvider";
import { GridIcon, ListDashIcon } from "@/public/svgs";
import React from "react";

const currData = [
  { name: "grid", icon: <GridIcon /> },
  { name: "table", icon: <ListDashIcon /> },
];
export default function LayoutSwitcher() {
  const { view, handleView } = useViewLayoutContext();

  return (
    <div className="toggleWrapper">
      {currData?.map(({ name, icon }, idx) => (
        <button
          key={idx}
          className={view === name ? "toggleActive" : "toggleNotActive"}
          onClick={() => handleView(name as View)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
