import { WatchList } from "@/components/main/watchList/watchList";
import React from "react";

export default function page() {
  return (
    <main className="container min-h-screen py-20">
      <hgroup className="py-10">
        <h4 className="font-gabarito text-grey-900">My Watchlist</h4>
      </hgroup>
      <WatchList />
    </main>
  );
}
