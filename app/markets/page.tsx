import { SparkLineChart } from "@/components/chart/sparklineChart";
import RenderGainerLosers from "@/components/main/markets/gainersLosers/renderGainerLosers";

export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden py-20">
      <section className="container pt-10">
        <RenderGainerLosers />
      </section>
    </main>
  );
}
