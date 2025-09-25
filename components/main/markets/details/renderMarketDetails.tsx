import PageTabs from "@/components/ui/PageTabs";
import { SearchParams } from "@/types/global";
import { StockProps } from "@/types/stock";
import React from "react";
import { ChartScreen } from "./chartScreen";
import { OtherScreen } from "./otherScreen";

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
  data,
}: {
  marketId: string;
  params: SearchParams;
  data: StockProps;
}) {
  const activeTab = params?.tab || "charts";

  let currentScreen;

  switch (activeTab) {
    case "financials":
      currentScreen = <OtherScreen content={data.finance || ""} />;
      break;
    case "company-profile":
      currentScreen = <OtherScreen content={data?.profile || ""} />;
      break;
    case "news":
      currentScreen = <OtherScreen content={data.news || ""} />;
      break;
    case "dividend-history":
      currentScreen = <OtherScreen content={data.dividendHistory || ""} />;
      break;

    default:
      currentScreen = <ChartScreen symbol={data?.ticker?.split("-")[1]} />;
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
