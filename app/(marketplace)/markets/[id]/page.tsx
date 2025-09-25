import { getStock } from "@/app/actions/stocks";
import MarketInfo from "@/components/main/markets/details/marketInfo";
import RenderMarketDetails from "@/components/main/markets/details/renderMarketDetails";
import TradeBar from "@/components/main/markets/details/trade/tradeBar";
import { SearchParams } from "@/types/global";
import { notFound } from "next/navigation";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { id } = await params;

  const stock = await getStock(id);
  if (!stock) {
    return notFound();
  }
  const pm = await searchParams;

  return (
    <main className="mt-[var(--main-header-height)] flex flex-col lg:flex-row">
      <MarketInfo data={stock} />
      <RenderMarketDetails params={pm} marketId={id} data={stock} />
      <TradeBar data={stock} />
    </main>
  );
}
