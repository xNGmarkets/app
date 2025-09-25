"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import PopoverWrapper from "../ui/popover/popoverWrapper";
import { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

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
