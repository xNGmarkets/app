import React from "react";
import Button from "./components/ui/button";
import Image from "next/image";
import { allImages } from "@/public/images/images";
import PopoverWrapper from "./components/ui/popover/popoverWrapper";
import { useGlobalHooks } from "@/hooks/globalHooks";
import { moreNavRoutes } from "./components/routes";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import ModalWrapper from "./components/ui/modals/ModalWrapper";
import CurrencySwitcher from "./components/currencySwitcher";
import { useModalContext } from "@/context/modalContext";
import { useViewLayoutContext } from "@/context/viewLayoutProvider";

export const ConnectWallet = ({
  connected = true,
}: {
  connected?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <CurrencyToggle />
      {connected ? (
        <article className="card flex items-center gap-2 p-3">
          <div className="flex items-center gap-2">
            <figure className="size-4">
              <Image src={allImages.metaMask} alt="" />
            </figure>
            <span>0x4.....8476</span>
          </div>
          <MoreNav />
        </article>
      ) : (
        <Button className="pry-btn" type="button">
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export const MoreNav = () => {
  const { show, setShow } = useGlobalHooks();

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
