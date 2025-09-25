"use client";

import React, { useEffect, useState } from "react";
import BrandLogo from "../ui/brandLogo";
import styles from "./navBar.module.scss";
import ResponsiveNavBar from "./responsiveNavBar";

const Navbar = () => {
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

  return (
    <header
      // className={`grid h-24 w-full place-items-center`}
      className={`border-grey-25 fixed top-0 left-0 z-50 grid min-h-[var(--main-header-height)] w-full place-items-center border-b ${
        isScrolled ? "bg-white/50 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo className={isScrolled ? "text-black" : "text-white"} />

        <ResponsiveNavBar styles={styles} isScrolled={isScrolled} />
      </section>
    </header>
  );
};

export default Navbar;
