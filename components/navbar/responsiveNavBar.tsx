"use client";
import { useGlobalHooks } from "@/hooks/globalHooks";
import React from "react";
import { ConnectWallet } from "../navActions";
import { navRoutes } from "../routes";
import Hambugger from "./hambugger";
import NavbarLink from "./navbarLink";

const ResponsiveNavBar = ({
  styles,
}: {
  isScrolled?: boolean;
  styles: any;
}) => {
  const { handleToggle, toggle } = useGlobalHooks();

  return (
    <nav className="flex flex-1 justify-end pr-4">
      <section
        className={`${
          toggle["navbar"] ? styles.closeNav : styles.openNav
        } flex-1`}
      >
        <article
          className={`flex h-screen w-full flex-wrap justify-between overflow-y-auto bg-white py-5 lg:h-auto lg:overflow-visible lg:bg-transparent lg:py-0 lg:pt-0`}
        >
          <div
            className={`flex w-full flex-col items-center !space-y-5 lg:flex-1 lg:flex-row lg:justify-between lg:!space-y-0`}
          >
            <ul
              className={`flex w-full flex-col justify-start space-y-5 lg:w-6/12 lg:flex-row lg:justify-between lg:space-y-0`}
            >
              {navRoutes?.map((route, index) => {
                return (
                  <NavbarLink
                    key={index}
                    path={route.path}
                    name={route.name}
                    action={() => handleToggle("navbar")}
                  />
                );
              })}
            </ul>
            {/* <ul
              className={`flex w-full flex-col justify-start space-y-5 lg:grow lg:flex-row lg:justify-end lg:space-y-0`}
            >
              {accountRoutes?.map((route, index) => {
                return (
                  <NavbarLink
                    key={index}
                    path={route.path}
                    name={route.name}
                    icon={route?.icon}
                    action={() => handleToggle("navbar")}
                  />
                );
              })}
            </ul> */}
          </div>

          <div className="flex w-full items-center justify-start gap-3 gap-y-6 px-4 lg:w-fit lg:justify-end lg:px-0">
            <ConnectWallet />
          </div>
        </article>
      </section>
      <Hambugger
        styles={styles}
        action={() => handleToggle("navbar")}
        toggle={toggle["navbar"]}
      />
    </nav>
  );
};

export default ResponsiveNavBar;
