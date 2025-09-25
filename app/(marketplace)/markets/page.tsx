// import RenderGainerLosers from "@/components/main/markets/gainersLosers/renderGainerLosers";
import { getStocks } from "@/app/actions/stocks";
import RenderMarkets from "@/components/main/markets/renderMarkets";

interface Props {
  searchParams?: Promise<{
    sector?: string;
    query?: string;
    sort?: string;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const _searchParams = await searchParams;
  const sector = _searchParams?.sector || "";
  const query = _searchParams?.query || "";
  const sort = _searchParams?.sort || "";
  const stocks = await getStocks(sector, query, sort);
  return (
    <main className="min-h-screen overflow-x-hidden py-20">
      <section className="container !space-y-10 pt-10">
        {/* <RenderGainerLosers /> */}
        {stocks.length > 0 ? <RenderMarkets data={stocks} /> : null}
      </section>
    </main>
  );
}
