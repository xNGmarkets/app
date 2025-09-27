import PageTabs from "@/components/ui/PageTabs";
import { SearchParams } from "@/types/global";
import { StockProps } from "@/types/stock";
import React, { useMemo } from "react";
import { ChartScreen } from "./chartScreen";
import MyOrder from "./MyOrder";
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

  const currentScreen = useMemo(() => {
    switch (activeTab) {
      case "financials":
        return <OtherScreen content={data.finance || ""} />;
      case "company-profile":
        return <OtherScreen content={data?.profile || ""} />;
      case "news":
        return <OtherScreen content={data.news || ""} />;
      case "dividend-history":
        return <OtherScreen content={data.dividendHistory || ""} />;
      default:
        return (
          <>
            <ChartScreen symbol={data?.ticker?.split("-")[1]} />
            <MyOrder stockAddress={data?.evmAddress} />
          </>
        );
    }
  }, [activeTab, data]);

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
