import React from "react";
import Button from "../ui/button";

export const GetStarted = () => {
  return (
    <section className="bg-primary-700 flex min-h-[600px] flex-col items-center justify-center gap-4 overflow-hidden bg-[url('/images/getStartedBg.png')] bg-cover bg-no-repeat py-20">
      <hgroup className="mx-auto w-full max-w-lg text-center">
        <h2 className="text-xl font-medium !text-white">
          No more waiting days for trades to clear with xNG.markets
        </h2>
      </hgroup>

      <Button link href="/markets" className="pry-btn">
        Start trading
      </Button>
    </section>
  );
};
