import PageTabs from "@/components/ui/PageTabs";
import { SearchParams } from "@/types/global";
import React from "react";
import { TableWrapper } from "./tableWrapper";
import { HistoryTableWrapper } from "./historyTableWrapper";

const tabData = [
  {
    id: "history",
    title: "Supply history",
  },
  {
    id: "transactions",
    title: "Transactions",
  },
];

export default function RenderSupplyTable({
  params,
}: {
  params: SearchParams;
}) {
  const activeTab = params?.tab || "history";

  let currentScreen;

  switch (activeTab) {
    case "transactions":
      currentScreen = <HistoryTableWrapper />;
      break;

    default:
      currentScreen = <TableWrapper />;
  }
  return (
    <section className="card p-4">
      <PageTabs
        tabDatas={tabData}
        defaultTab={activeTab}
        searchParams={params}
        path={`/supply`}
        activeClass="activeTab"
        notActiveClass="notActiveTab"
        className="border-grey-25 border-b !pt-5"
        pageContent={currentScreen}
        containerClassName="min-h-[90vh] custom-scrollbar mt-5"
      />
    </section>
  );
}
