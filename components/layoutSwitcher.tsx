"use client";
import { useAuthContext } from "@/context/authContext";
import { GridIcon, ListDashIcon } from "@/public/svgs";
import React from "react";

const currData = [
  { name: "grid", icon: <GridIcon /> },
  { name: "list", icon: <ListDashIcon /> },
];
export default function LayoutSwitcher() {
  const { layoutMap, updateLayout } = useAuthContext();

  return (
    <div className="toggleWrapper">
      {currData?.map(({ name, icon }, idx) => (
        <button
          key={idx}
          className={layoutMap === name ? "toggleActive" : "toggleNotActive"}
          onClick={() => updateLayout(name)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
