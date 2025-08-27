import { GetStarted } from "@/components/main/getStarted";
import { MovingCountries } from "@/components/main/moveItems/movingCountries";
import BrandLogo from "@/components/ui/brandLogo";
import Button from "@/components/ui/button";
import { allImages } from "@/public/images/images";
import { HeroTable } from "@/public/svgs";
import { compareBroker } from "@/utils/constant";
import Image from "next/image";
import { VscPlayCircle } from "react-icons/vsc";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="flex min-h-screen flex-wrap items-center justify-between gap-4 py-20">
        <article
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex-1 !space-y-6 px-3 text-center lg:pl-16 lg:text-start"
        >
          <h1>Own NGX stocks, 24/7 - simple</h1>
          <h5 className="text-lg">
            Buy and sell tokenized shares of Nigeria’s top companies. Dividends
            come in USD. Monthly proof‑of‑reserves. Built for everyone.
          </h5>

          <div className="grid w-full grid-cols-2 items-center gap-2 lg:w-fit">
            <Button className="pry-btn">Start trading</Button>
            <Button className="alt-btn">
              {" "}
              <VscPlayCircle /> How it works
            </Button>
            <div className="col-span-2 mt-2 flex items-center justify-center gap-3 lg:col-span-1 lg:justify-start">
              <figure className="!size-5">
                <Image src={allImages.secLogo} alt="" />
              </figure>
              <div>
                <h6 className="text-grey-900 text-[10px]">Partnered with</h6>
                <h6 className="text-[10px]">SEC approved broker</h6>
              </div>
            </div>
          </div>
        </article>

        <figure
          data-aos="fade-right"
          data-aos-duration="1500"
          className="relative h-54 w-full lg:h-[460px] lg:w-[60%]"
        >
          <Image
            src={allImages.heroImg}
            alt=""
            className="!h-full object-cover object-bottom-right"
          />
          <div
            className="absolute bottom-0 w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <HeroTable />
          </div>
        </figure>
      </section>

      <MovingCountries />

      <section className="container my-10">
        <h3 data-aos="fade-down" className="text-center">
          How it works
        </h3>
        <ul className="container !mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li
            data-aos="fade-in"
            className="card relative flex flex-col justify-between gap-1 px-5 py-5"
          >
            <h4 className="z-10 !text-2xl">1.</h4>
            <figure>
              <Image src={allImages.naijaBrandLogos} alt="" />
            </figure>
            <article className="z-10">
              <h4 className="font-gabarito text-grey-800">Pick a stock</h4>
              <p>
                Browse listings like MTNN, Zenith or Seplat. See a live price
                and a simple band that keeps trades fair.
              </p>
            </article>
            <div className="cardBlur absolute inset-0 h-full"></div>
          </li>
          <li
            data-aos="fade-in"
            className="card relative flex flex-col justify-between gap-1 px-5 py-7"
          >
            <h4 className="z-10 !text-2xl">2.</h4>
            <figure>
              <Image src={allImages.stockImg} alt="" />
            </figure>
            <article className="z-10">
              <h4 className="font-gabarito text-grey-800">Buy or sell</h4>
              <p>
                Place a market or limit order. Big orders can run during NGX
                hours for the best match.
              </p>
            </article>
            <div className="cardBlur absolute inset-0 h-full"></div>
          </li>
          <li
            data-aos="fade-in"
            className="card relative flex flex-col justify-between gap-1 px-5 py-7"
          >
            <h4 className="z-10 !text-2xl">3.</h4>
            <figure>
              <Image src={allImages.naijaBrandLogos} alt="" />
            </figure>
            <article className="z-10">
              <h4 className="font-gabarito text-grey-800">Get paid</h4>
              <p>
                When companies pay divided on stocks, we distribute it back to
                you in USD on Hedera.
              </p>
            </article>
            <div className="cardBlur absolute inset-0 h-full"></div>
          </li>
        </ul>
      </section>

      <section className="bg-grey-25 my-10 py-20">
        <h3 data-aos="fade-down" className="text-center">
          Comparing xNG to Traditional brokers
        </h3>

        <article className="mx-auto mt-10 w-11/12 max-w-4xl rounded-2xl bg-white py-4">
          <div className="border-grey-25 grid grid-cols-3 items-center justify-end gap-3 border-b pb-2">
            <div></div>
            <div className="flex">
              <BrandLogo />
            </div>
            <h5 className="text-primary textsm font-medium lg:text-lg">
              Traditional Brokers
            </h5>
          </div>
          <ul className="divide-grey-25 gap-3 divide-y">
            {compareBroker?.map(({ title, ngn, broker }, idx) => (
              <li
                key={idx}
                className="text-grey-900 grid grid-cols-3 py-3 pl-1 text-sm md:pl-4 md:text-base"
              >
                <span className="pl-1 md:pl-4">{title}</span>
                <span>{ngn}</span>
                <span>{broker}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <GetStarted />
    </main>
  );
}
