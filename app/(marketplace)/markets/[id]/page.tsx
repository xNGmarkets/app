import MarketInfo from "@/components/main/markets/details/marketInfo";
import RenderMarketDetails from "@/components/main/markets/details/renderMarketDetails";
import TradeBar from "@/components/main/markets/details/trade/tradeBar";
import { CurrencyProvider } from "@/context/currencyContext";
import { SearchParams } from "@/types/global";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { id } = await params;
  const pm = await searchParams;

  return (
    <main className="mt-[var(--main-header-height)] flex flex-col lg:flex-row">
      <MarketInfo marketId={id} />
      <RenderMarketDetails params={pm} marketId={id} />
      <CurrencyProvider>
        <TradeBar marketId={id} />
      </CurrencyProvider>
    </main>
  );
}
