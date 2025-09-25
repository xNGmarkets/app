"use client";
import React from "react";
import BrandLogo from "../ui/brandLogo";

import { PiTelegramLogoDuotone } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import { allImages } from "@/public/images/images";

const Footer = () => {
  return (
    <footer className="border-grey-25 border-t bg-white py-10">
      <section className="container flex flex-col justify-between gap-y-5 lg:flex-row">
        <div className="flex justify-between">
          <BrandLogo className="!w-[160px]" />
          <div className="card flex items-center gap-3 !rounded-full px-4 py-2 md:hidden">
            <figure className="!size-4 overflow-hidden">
              <Image src={allImages.hedaraLogo} alt="" />
            </figure>
            <h5 className="text-xs">Built on Hedera</h5>
          </div>
        </div>
        <ul className="flex gap-2">
          <a
            href="https://t.me/xngmarkets"
            target="_blank"
            rel="noopener noreferrer"
            className="card grid !size-[50px] place-items-center !rounded-full"
          >
            <PiTelegramLogoDuotone size={20} className="text-grey-900" />
          </a>
          <a
            href="https://x.com/xngmarkets"
            target="_blank"
            rel="noopener noreferrer"
            className="card grid !size-[50px] place-items-center !rounded-full"
          >
            <RiTwitterXLine size={20} className="text-grey-900" />
          </a>
        </ul>
        <div className="card hidden items-center gap-3 !rounded-full px-4 py-2 md:flex">
          <figure className="!size-8 overflow-hidden">
            <Image src={allImages.hedaraLogo} alt="" />
          </figure>
          <h5>Built on Hedera</h5>
        </div>
      </section>

      <section className="container mt-10">
        <p className="!text-sm">
          <b className="text-grey-900 !text-base"> Disclaimer:</b> xNG.markets
          provides a UI to tokens that reference economic exposure to NGX‑listed
          equities via a regulated Nigerian broker and a BVI SPV with CSCS
          custody. Tokens are not shares and do not grant voting rights. Trading
          and primary flows may depend on NGX hours and oracle freshness.
          Dividends, when applicable, are distributed in USD. Availability
          varies by jurisdiction. Nothing herein is investment, legal or tax
          advice. Read the full Terms & Disclosures. 
        </p>
        <article className="text-grey-900 mt-5 flex flex-wrap items-center justify-between gap-4 pt-4">
          <p className="!text-sm">© {new Date()?.getFullYear()} - xNGmarket</p>
          <p className="!text-sm underline underline-offset-2">
            Privacy Policy
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
