import { useModalContext } from "@/context/modalContext";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";
import { useGlobalHooks } from "@/hooks/globalHooks";
import { shortenAddress } from "@/libs/utils";
import { allImages } from "@/public/images/images";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useAccount, useDisconnect } from "wagmi";
import CurrencySwitcher from "./currencySwitcher";
import { moreNavRoutes } from "./routes";
import Button from "./ui/button";
import ModalWrapper from "./ui/modals/ModalWrapper";
import PopoverWrapper from "./ui/popover/popoverWrapper";

export const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div className="flex items-center gap-4">
      <CurrencyToggle />
      {isConnected && address ? (
        <article className="card flex items-center gap-2 p-3">
          <div className="flex items-center gap-2">
            <figure className="size-4">
              <Image src={allImages.metaMask} alt="" />
            </figure>
            <span>{shortenAddress(address)}</span>
          </div>
          <MoreNav />
        </article>
      ) : (
        <Button onClick={openConnectModal} className="pry-btn" type="button">
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export const MoreNav = () => {
  const { show, setShow } = useGlobalHooks();
  const { disconnect } = useDisconnect();

  return (
    <PopoverWrapper open={show} setOpen={setShow} className="mt-3">
      <ul className="divide-grey-25 flex min-w-40 flex-col gap-2 divide-y !p-3">
        {moreNavRoutes.map(({ name, path, icon }, idx) => (
          <Link
            key={idx}
            href={path}
            className="flex items-center gap-2 !pb-2"
            onClick={() => setShow(false)}
          >
            {icon}
            {name}
          </Link>
        ))}
        <li>
          <button
            className="flex items-center gap-2 text-sm !text-red-500 lg:text-base"
            onClick={() => disconnect}
          >
            <VscDebugDisconnect size={16} />
            <span>Disconnect</span>
          </button>
        </li>
      </ul>
    </PopoverWrapper>
  );
};

export const CurrencyToggle = () => {
  const { openModal, isOpen } = useModalContext();
  const { currency } = useViewLayoutContext();
  return (
    <>
      <button onClick={() => openModal("currency")}>
        <IoSettingsOutline />
      </button>

      {isOpen["currency"] && (
        <ModalWrapper
          id="currency"
          wrapperClass="!max-w-3/12"
          title={`Default Currency: ${currency}`}
          titleClass="!text-grey-900 !text-sm !font-medium"
        >
          <CurrencySwitcher />
        </ModalWrapper>
      )}
    </>
  );
};
