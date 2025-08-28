import RenderGainerLosers from "@/components/main/markets/gainersLosers/renderGainerLosers";
import RenderMarkets from "@/components/main/markets/renderMarkets";

export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden py-20">
      <section className="container !space-y-10 pt-10">
        <RenderGainerLosers />
        <RenderMarkets />
      </section>
    </main>
  );
}
