import CurrencySwitcher from "@/components/currencySwitcher";
import RenderPerformances from "@/components/main/portfolio/renderPerformances";

import React from "react";

export default function page() {
  return (
    <main className="container !space-y-10 py-20">
      <header className="flex flex-wrap justify-between gap-4 pt-10">
        <hgroup>
          <h4 className="font-gabarito text-grey-900">Portfolio</h4>
        </hgroup>
        <article className="flex flex-wrap items-center gap-2">
          <div className="card !rounded-full px-3 py-1">
            <small>$1 - ₦1,530</small>
          </div>
          <CurrencySwitcher />
        </article>
      </header>

      <RenderPerformances />
    </main>
  );
}
