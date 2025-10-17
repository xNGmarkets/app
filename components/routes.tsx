import { StakeIcon, UserIcon } from "@/public/svgs";
import { FaRegStar } from "react-icons/fa6";

export const landingNavRoutes = [
  {
    name: "How it works",
    path: "#how-it-works",
  },

  {
    name: "Read whitepaper",
    path: "https://github.com/xNGmarkets/Whitepaper",
  },
];

export const navRoutes = [
  {
    name: "Marketplace",
    path: "/markets",
  },

  {
    name: "Borrow",
    path: "/borrow",
  },
  {
    name: "Supply",
    path: "/supply",
  },
  {
    name: "Faucet",
    path: "https://hedera-usdc-faucet.vercel.app/",
  },
];

export const accountRoutes = [
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <StakeIcon />,
  },
];
export const moreNavRoutes = [
  {
    name: "Profile",
    path: "/profile",
    icon: <UserIcon />,
  },
  {
    name: "My Watchlist",
    path: "/watch-list",
    icon: <FaRegStar />,
  },
];

export const productRoutes = [
  {
    name: "Spend",
    path: "/spend",
  },

  {
    name: "Pay Bills",
    path: "/pay-bills",
  },
  {
    name: "Send",
    path: "/send",
  },
  {
    name: "Earn",
    path: "/earn",
  },
  {
    name: "Borrow",
    path: "/borrow",
  },
];

export const companyRoutes = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Careers",
    path: "$",
  },
];

export const legalRoutes = [
  {
    name: "Terms",
    path: "#",
  },
  {
    name: "Privacy",
    path: "#",
  },
  {
    name: "Licenses",
    path: "#",
  },
];

export const resourcesRoutes = [
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Help centre",
    path: "#",
  },
];
