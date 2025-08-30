import LeftSidebar from "@/components/main/markets/details/leftSidebar";
import RenderMarketDetails from "@/components/main/markets/details/renderMarketDetails";
import RightSidebar from "@/components/main/markets/details/rightSidebar";
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
      <LeftSidebar marketId={id} />
      <RenderMarketDetails params={pm} marketId={id} />
      <RightSidebar />
    </main>
  );
}
