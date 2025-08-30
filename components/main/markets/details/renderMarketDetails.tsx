import React from "react";
import { OtherScreen } from "./otherScreen";
import { ChartScreen } from "./chartScreen";
import { SearchParams } from "@/types/global";
import PageTabs from "@/components/ui/PageTabs";

const tabData = [
  {
    id: "charts",
    title: "Charts",
  },
  {
    id: "financials",
    title: "Financials",
  },
  {
    id: "company-profile",
    title: "Company Profile",
  },
  {
    id: "news",
    title: "News",
  },
  {
    id: "dividend-history",
    title: "Dividend History",
  },
];

export default function RenderMarketDetails({
  marketId,
  params,
}: {
  marketId: string;
  params: SearchParams;
}) {
  const activeTab = params?.tab || "charts";

  let currentScreen;

  switch (activeTab) {
    case "financials":
      currentScreen = <OtherScreen />;
      break;
    case "company-profile":
      currentScreen = <OtherScreen />;
      break;
    case "news":
      currentScreen = <OtherScreen />;
      break;
    case "dividend-history":
      currentScreen = <OtherScreen />;
      break;

    default:
      currentScreen = <ChartScreen />;
  }
  return (
    <main className="border-grey-25 w-full border-x lg:w-[60%]">
      <PageTabs
        tabDatas={tabData}
        defaultTab={activeTab}
        searchParams={params}
        path={`/markets/${marketId}`}
        activeClass="activeTab"
        notActiveClass="notActiveTab"
        className="border-grey-25 border-b !pt-5"
        pageContent={currentScreen}
        containerClassName="min-h-[90vh] custom-scrollbar"
      />
    </main>
  );
}
