import { Star } from "@/components/main/markets/star";
import { BandPCT } from "@/components/main/markets/table/bandPCT";
import { MarketPrice } from "@/components/main/markets/table/marketPrice";
import Button from "@/components/ui/button";
import { Column } from "@/components/ui/tableComponent/tableComponent";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { allImages } from "@/public/images/images";
import {
  AgricultureIcon,
  BankIcon,
  CellTowerIcon,
  EnergyIcon,
  InsuranceIcon,
  SectorIcon,
  UserIcon,
} from "@/public/svgs";
import { MarketInstrument } from "@/types/martkes";
import { StaticImageData } from "next/image";

export const compareBroker = [
  {
    title: "Availability",
    ngn: "24/7",
    broker: "Market hours",
  },
  {
    title: "Freely transferable",
    ngn: "Yes",
    broker: "No",
  },
  {
    title: "Liquid shares",
    ngn: "Borrow against your stocks",
    broker: "Hard",
  },
  {
    title: "Commissions",
    ngn: "Low venue fees",
    broker: "Often Higher",
  },
  {
    title: "Access",
    ngn: "Anyone who passes checks",
    broker: "Limited",
  },
];

export const topGainers: MarketInstrument[] = [
  {
    symbol: "xNGX",
    ticker: "ZenithBank",
    company: "Zenith Bank PLC",
    lastPrice: 2500,
    change24hPct: 20.45,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    logo: allImages.zenith,
  },
  {
    symbol: "xNGX",
    ticker: "AccessBank",
    company: "Access Bank PLC",
    lastPrice: 3000,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 18.3,
    logo: allImages.access,
  },
  {
    symbol: "xNGX",
    ticker: "FirstBank",
    company: "First Bank of Nigeria",
    lastPrice: 1800,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 6.15,
    logo: allImages.fbn,
  },
  {
    symbol: "xNGX",
    ticker: "UBA",
    company: "United Bank for Africa",
    lastPrice: 2200,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 13.0,
    logo: allImages.ubsa,
  },
  {
    symbol: "xNGX",
    ticker: "GTBank",
    company: "Guaranty Trust Bank",
    lastPrice: 2800,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 5.0,
    logo: allImages.gtb,
  },
];

export const topLosers: MarketInstrument[] = [
  {
    symbol: "xNGX",
    ticker: "SePlat",
    company: "Seplat Energy PLC",
    lastPrice: 2500,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 20.45,
    logo: null,
  },
  {
    symbol: "xNGX",
    ticker: "Guiness",
    company: "Guiness Nigeria PLC",
    lastPrice: 3000,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 18.3,
    logo: allImages.guiness,
  },
  {
    symbol: "xNGX",
    ticker: "Airtel",
    company: "Airtel Africa",
    lastPrice: 1800,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 6.15,
    logo: allImages.airtel,
  },
  {
    symbol: "xNGX",
    ticker: "Cornerstone",
    company: "Cornerstone Insurance",
    lastPrice: 2200,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 13.0,
    logo: allImages.cornerstone,
  },
  {
    symbol: "xNGX",
    ticker: "Nestlé",
    company: "Nestlé Nigeria",
    lastPrice: 2800,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 5.0,
    logo: allImages.nestle,
  },
];

export const marketCards: MarketInstrument[] = [
  {
    id: "xngx-energycorp",
    symbol: "xNGX",
    ticker: "EnergyCorp",
    company: "EnergyCorp PLC",
    sector: "Energy",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 75.2,
    bidPrice: 74.85,
    lastPrice: 75.05,
    change24hPct: 0.8,
    gainers: false,
    logo: allImages.energy,
  },
  {
    id: "xngx-agrigoldings",
    symbol: "xNGX",
    ticker: "AgriHoldings",
    company: "AgriHoldings PLC",
    sector: "Agriculture",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 22.5,
    bidPrice: 22.25,
    lastPrice: 22.4,
    change24hPct: 0.3,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-consumergoods",
    symbol: "xNGX",
    ticker: "ConsumerGoods",
    company: "ConsumerGoods PLC",
    sector: "Consumer",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 48.2,
    bidPrice: 47.9,
    lastPrice: 47.95,
    change24hPct: -0.3,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-insureplus",
    symbol: "xNGX",
    ticker: "InsurePlus",
    company: "InsurePlus PLC",
    sector: "Insurance",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 60.0,
    bidPrice: 59.75,
    lastPrice: 59.88,
    change24hPct: 1.2,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-powergrid",
    symbol: "xNGX",
    ticker: "PowerGrid",
    company: "PowerGrid PLC",
    sector: "Utilities",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 85.5,
    bidPrice: 85.0,
    lastPrice: 85.3,
    change24hPct: -1.7,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-telconet",
    symbol: "xNGX",
    ticker: "TelcoNet",
    company: "TelcoNet PLC",
    sector: "Telecom",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 32.0,
    bidPrice: 31.8,
    lastPrice: 31.9,
    change24hPct: 0.3,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-secureinsurance",
    symbol: "xNGX",
    ticker: "SecureInsurance",
    company: "SecureInsurance PLC",
    sector: "Insurance",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 72.0,
    bidPrice: 71.5,
    lastPrice: 71.75,
    change24hPct: -1.2,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-croptech",
    symbol: "xNGX",
    ticker: "CropTech",
    company: "CropTech PLC",
    sector: "Agriculture",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 18.75,
    bidPrice: 18.5,
    lastPrice: 18.62,
    change24hPct: -0.2,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-",
    symbol: "xNGX",
    ticker: "FreshMarket",
    company: "FreshMarket PLC",
    sector: "Consumer",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 45.0,
    bidPrice: 44.8,
    lastPrice: 44.9,
    change24hPct: 0.2,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-telcoservices",
    symbol: "xNGX",
    ticker: "TelcoServices",
    company: "TelcoServices PLC",
    sector: "Telecom",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 54.0,
    bidPrice: 53.8,
    lastPrice: 53.9,
    change24hPct: 1.0,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-agroenterprises",
    symbol: "xNGX",
    ticker: "AgroEnterprises",
    company: "AgroEnterprises PLC",
    sector: "Agriculture",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 30.25,
    bidPrice: 30.0,
    lastPrice: 30.1,
    change24hPct: 0.5,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-greenenergy",
    symbol: "xNGX",
    ticker: "GreenEnergy",
    company: "GreenEnergy PLC",
    sector: "Energy",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 67.0,
    bidPrice: 66.8,
    lastPrice: 66.9,
    change24hPct: -0.4,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-homegoods",
    symbol: "xNGX",
    ticker: "HomeGoods",
    company: "HomeGoods PLC",
    sector: "Consumer",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 27.5,
    bidPrice: 27.3,
    lastPrice: 27.4,
    change24hPct: 1.2,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-lifesecure",
    symbol: "xNGX",
    ticker: "LifeSecure",
    company: "LifeSecure PLC",
    sector: "Insurance",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 90.0,
    bidPrice: 89.5,
    lastPrice: 89.75,
    change24hPct: 0.6,
    gainers: false,
    logo: null,
  },
  {
    id: "xngx-globaltel",
    symbol: "xNGX",
    ticker: "GlobalTel",
    company: "GlobalTel PLC",
    sector: "Telecom",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 49.5,
    bidPrice: 49.3,
    lastPrice: 49.38,
    change24hPct: -0.8,
    gainers: false,
    logo: null,
  },
];

export const tradeTypes = [
  { label: "Limit Order", value: "limit-order", cta: "Place Limit BUY" },
  { label: "Market Buy", value: "market-buy", cta: "Buy now" },
  { label: "Primary Mint", value: "mint", cta: "Buy now" },
  { label: "Primary Burn", value: "burn", cta: "Submit burn for USDC" },
];

export const preferenceTypes = [
  { label: "Lenient (Final VWAP check)", value: "Lenient (Final VWAP check)" },
  {
    label: "Strict (Strip cancel on breach)",
    value: "Strict (Strip cancel on breach)",
  },
];

export const toleranceTypes = [
  { label: "Conservative", value: "Conservative" },
  {
    label: "Balanced",
    value: "Balanced",
  },
  {
    label: "Aggressive",
    value: "Aggressive",
  },
  {
    label: "Opportunistic",
    value: "Opportunistic",
  },
  {
    label: "Custom",
    value: "Custom",
  },
];

export const filterDays = [
  { label: "Today", value: "1day" },
  { label: "Last 7 days", value: "7days" },
  { label: "Last 2 weeks", value: "2weeks" },
  { label: "Last 6 Months", value: "6months" },
  { label: "Last Year", value: "1year" },
  { label: "Last 2 Year", value: "2years" },
];

export const sortData = [
  { label: "Top volume", value: "topVolume" },
  { label: "Percentage change", value: "percentageChange" },
  { label: "Dividend score", value: "dividendScore" },
  { label: "Price (High - Low)", value: "priceHighLow" },
  { label: "Price (Low - High)", value: "priceLowHigh" },
];

export const filterSectors = [
  { label: "All Sectors", value: "all", icon: <SectorIcon /> },
  { label: "Banking", value: "banking", icon: <BankIcon /> },
  { label: "Energy", value: "energy", icon: <EnergyIcon /> },
  { label: "Agriculture", value: "agriculture", icon: <AgricultureIcon /> },
  { label: "Consumer", value: "consumer", icon: <UserIcon /> },
  { label: "Insurance", value: "insurance", icon: <InsuranceIcon /> },
  { label: "Telecom", value: "telecom", icon: <CellTowerIcon /> },
];

export const marketListDataColData: Column<
  MarketInstrument & { actions?: string }
>[] = [
  {
    title: "Name",
    key: "ticker",
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <Star />
        <UserAvatar
          url={record?.logo as StaticImageData}
          displayName={`${record?.symbol} - ${record?.ticker}`}
          initials={record?.ticker}
          subText={record?.company}
        />
      </div>
    ),
  },

  {
    title: "Sector",
    key: "sector",
    render: (_, { sector }) => <>{sector}</>,
  },
  {
    title: "KYC",
    key: "kycLevel",
    render: (_, { kycLevel }) => <>{kycLevel}</>,
  },
  {
    title: "Band",
    key: "bandPct",
    render: (_, { bandPct }) => <BandPCT bandPct={bandPct!} />,
  },
  {
    title: "Dividends",
    key: "dividends",
    render: () => <>5.2</>,
    // render: (_, { dividends }) => <>{dividends}</>,
  },
  {
    title: "Ask Price",
    key: "askPrice",
    render: (_, { askPrice }) => <MarketPrice price={Number(askPrice)} />,
  },
  {
    title: "Bid Price",
    key: "bidPrice",
    render: (_, { bidPrice }) => <MarketPrice price={Number(bidPrice)} />,
  },
  {
    title: "Buy Price",
    key: "lastPrice",
    render: (_, { lastPrice }) => <MarketPrice price={Number(lastPrice)} />,
  },
  {
    title: "Action",
    key: "actions",
    render: (_, record) => (
      <Button link href={`/markets/${record?.id}`} className="pry-btn">
        Open Trade
      </Button>
    ),
  },
];
