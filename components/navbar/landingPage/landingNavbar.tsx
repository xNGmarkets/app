"use client";

import React, { useEffect, useState } from "react";
import styles from "../navBar.module.scss";
import LandingResponsiveNavbar from "./landingResponsiveNavbar";
import BrandLogo from "@/components/ui/brandLogo";
import { usePathname } from "next/navigation";

const LandingNavbar = () => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (path !== "/") return;

  return (
    <header
      className={`border-grey-25 fixed top-0 left-0 z-50 grid h-22 w-full place-items-center border-b ${
        isScrolled ? "bg-white/50 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo className={isScrolled ? "text-black" : "text-white"} />

        <LandingResponsiveNavbar styles={styles} isScrolled={isScrolled} />
      </section>
    </header>
  );
};

export default LandingNavbar;
