"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import PopoverWrapper from "../ui/popover/popoverWrapper";

type NavbarLinkProps = {
  path: string;
  name: string;
  icon?: ReactNode;
  className?: string;
  action?: () => void;
  childRoutes?: NavbarLinkProps[];
};

export default function NavbarLink({
  path,
  name,
  childRoutes,
  className,
  icon,
  action,
}: NavbarLinkProps) {
  const pathName = usePathname();

  return (
    <>
      {childRoutes ? (
        <PopoverWrapper
          selected={<span>{name}</span>}
          icon={<FiChevronDown />}
          triggerClassName={`${"navbarNotActive"} hover:!text-primary ${className}`}
          className="w-fit"
        >
          {childRoutes?.map(({ name, icon, path }, idx) => (
            <Link
              key={idx}
              href={path}
              target={path.includes("https") ? "_blank" : "_self"}
              className={` ${pathName.includes(path) ? "navbarActive" : "navbarNotActive"} hover:!text-primary flex items-center gap-2`}
              onClick={action}
            >
              {icon} {name}
            </Link>
          ))}
        </PopoverWrapper>
      ) : (
        <Link
          href={path}
          className={` ${pathName.includes(path) ? "navbarActive" : "navbarNotActive"} hover:!text-primary flex items-center gap-2 ${className}`}
          onClick={action}
        >
          {icon} {name}
        </Link>
      )}
    </>
  );
}
