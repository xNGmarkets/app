import { BrandIcon } from "@/public/svgs";
import Link from "next/link";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`${className} w-[140px] lg:h-[50px] lg:w-[220px]`}
    >
      <BrandIcon />
    </Link>
  );
};

export default BrandLogo;
