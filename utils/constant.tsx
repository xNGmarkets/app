import { BandPCT } from "@/components/main/markets/table/bandPCT";
import { MarketPrice } from "@/components/main/markets/table/marketPrice";
import { SupplyClaimAction } from "@/components/main/supply/supplyActions";
import Button from "@/components/ui/button";
import { Column } from "@/components/ui/tableComponent/tableComponent";
import {
  AgricultureIcon,
  BankIcon,
  CellTowerIcon,
  EnergyIcon,
  InsuranceIcon,
  SectorIcon,
  UserIcon,
} from "@/public/svgs";
import {
  BorrowTypes,
  MarketInstrument,
  SupplyHistoryTypes,
  SupplyTypes,
} from "@/types/martkes";

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
    ticker: "MTNN",
    company: "MTN Nigeria",
    lastPrice: 2500,
    change24hPct: 20.45,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    logo: "https://s3-symbol-logo.tradingview.com/mtn-nigeria-communications-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "UBA",
    company: "UBA PLC",
    lastPrice: 3000,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 18.3,
    logo: "https://s3-symbol-logo.tradingview.com/united-bank-for-africa-plc-nigeria.svg",
  },
  {
    symbol: "xNGX",
    ticker: "GTCO",
    company: "GTCO",
    lastPrice: 1800,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 6.15,
    logo: "https://s3-symbol-logo.tradingview.com/guaranty-trust-company-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "ZENITH",
    company: "Zenith Bank",
    lastPrice: 2200,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 13.0,
    logo: "https://s3-symbol-logo.tradingview.com/zenith-bank-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "ARADEL",
    company: "Aradel Holdings",
    lastPrice: 2800,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 5.0,
    logo: "https://s3-symbol-logo.tradingview.com/aradel.svg",
  },
  {
    symbol: "xNGX",
    ticker: "TOTAL",
    company: "TotalEnergies",
    lastPrice: 1900,
    gainers: true,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: 4.2,
    logo: "https://s3-symbol-logo.tradingview.com/total.svg",
  },
];

export const topLosers: MarketInstrument[] = [
  {
    symbol: "xNGX",
    ticker: "AIICO",
    company: "AIICO Insurance",
    lastPrice: 2500,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -20.45,
    logo: "https://s3-symbol-logo.tradingview.com/aiico-insurance-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "CORNERST",
    company: "Cornerstone Ins.",
    lastPrice: 3000,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -18.3,
    logo: "https://s3-symbol-logo.tradingview.com/cornerstone-insurance-co-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "OKOMUOIL",
    company: "Okomu Oil",
    lastPrice: 1800,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -6.15,
    logo: "https://s3-symbol-logo.tradingview.com/okomu-oil-palm-co-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "PRESCO",
    company: "Presco",
    lastPrice: 2200,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -13.0,
    logo: "https://s3-symbol-logo.tradingview.com/presco-plc.svg",
  },
  {
    symbol: "xNGX",
    ticker: "NESTLE",
    company: "Nestlé Nigeria",
    lastPrice: 2800,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -5.0,
    logo: "https://s3-symbol-logo.tradingview.com/nestle.svg",
  },
  {
    symbol: "xNGX",
    ticker: "DANGSUGAR",
    company: "Dangote Sugar",
    lastPrice: 2100,
    gainers: false,
    changes: [1.2, 13, 5, 26, 12],
    change24hPct: -3.8,
    logo: "https://s3-symbol-logo.tradingview.com/dangote-sugar-refinery-plc.svg",
  },
];

export const marketCards: MarketInstrument[] = [
  {
    id: "xngx-mtnn",
    symbol: "xNGX",
    ticker: "MTNN",
    company: "MTN Nigeria",
    sector: "Telecom",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 75.2,
    bidPrice: 74.85,
    lastPrice: 75.05,
    change24hPct: 0.8,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/mtn-nigeria-communications-plc.svg",
  },
  {
    id: "xngx-uba",
    symbol: "xNGX",
    ticker: "UBA",
    company: "UBA PLC",
    sector: "Banking",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 22.5,
    bidPrice: 22.25,
    lastPrice: 22.4,
    change24hPct: 0.3,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/united-bank-for-africa-plc-nigeria.svg",
  },
  {
    id: "xngx-gtco",
    symbol: "xNGX",
    ticker: "GTCO",
    company: "GTCO",
    sector: "Banking",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 48.2,
    bidPrice: 47.9,
    lastPrice: 47.95,
    change24hPct: -0.3,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/guaranty-trust-company-plc.svg",
  },
  {
    id: "xngx-zenith",
    symbol: "xNGX",
    ticker: "ZENITH",
    company: "Zenith Bank",
    sector: "Banking",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 60.0,
    bidPrice: 59.75,
    lastPrice: 59.88,
    change24hPct: 1.2,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/zenith-bank-plc.svg",
  },
  {
    id: "xngx-aradel",
    symbol: "xNGX",
    ticker: "ARADEL",
    company: "Aradel Holdings",
    sector: "Energy",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 85.5,
    bidPrice: 85.0,
    lastPrice: 85.3,
    change24hPct: -1.7,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/aradel.svg",
  },
  {
    id: "xngx-total",
    symbol: "xNGX",
    ticker: "TOTAL",
    company: "TotalEnergies",
    sector: "Energy",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 32.0,
    bidPrice: 31.8,
    lastPrice: 31.9,
    change24hPct: 0.3,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/total.svg",
  },
  {
    id: "xngx-aiico",
    symbol: "xNGX",
    ticker: "AIICO",
    company: "AIICO Insurance",
    sector: "Insurance",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 72.0,
    bidPrice: 71.5,
    lastPrice: 71.75,
    change24hPct: -1.2,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/aiico-insurance-plc.svg",
  },
  {
    id: "xngx-cornerst",
    symbol: "xNGX",
    ticker: "CORNERST",
    company: "Cornerstone Ins.",
    sector: "Insurance",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 18.75,
    bidPrice: 18.5,
    lastPrice: 18.62,
    change24hPct: -0.2,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/cornerstone-insurance-co-plc.svg",
  },
  {
    id: "xngx-okomuoil",
    symbol: "xNGX",
    ticker: "OKOMUOIL",
    company: "Okomu Oil",
    sector: "Agriculture",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 45.0,
    bidPrice: 44.8,
    lastPrice: 44.9,
    change24hPct: 0.2,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/okomu-oil-palm-co-plc.svg",
  },
  {
    id: "xngx-presco",
    symbol: "xNGX",
    ticker: "PRESCO",
    company: "Presco",
    sector: "Agriculture",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 54.0,
    bidPrice: 53.8,
    lastPrice: 53.9,
    change24hPct: 1.0,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/presco-plc.svg",
  },
  {
    id: "xngx-nestle",
    symbol: "xNGX",
    ticker: "NESTLE",
    company: "Nestlé Nigeria",
    sector: "Consumer",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 30.25,
    bidPrice: 30.0,
    lastPrice: 30.1,
    change24hPct: 0.5,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/nestle.svg",
  },
  {
    id: "xngx-dangsugar",
    symbol: "xNGX",
    ticker: "DANGSUGAR",
    company: "Dangote Sugar",
    sector: "Consumer",
    kycLevel: "KYC L1",
    bandPct: 1.2,
    askPrice: 67.0,
    bidPrice: 66.8,
    lastPrice: 66.9,
    change24hPct: -0.4,
    gainers: false,
    logo: "https://s3-symbol-logo.tradingview.com/dangote-sugar-refinery-plc.svg",
  },
];

export const tradeTypes = [
  { label: "Limit Order", value: "limit-order", cta: "Place Limit BUY" },
  { label: "Market Buy", value: "market-buy", cta: "Buy now" },
  // { label: "Primary Mint", value: "mint", cta: "Buy now" },
  // { label: "Primary Burn", value: "burn", cta: "Submit burn for USDC" },
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
  // { label: "Top volume", value: "topVolume" },
  // { label: "Percentage change", value: "percentageChange" },
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

// Supply and Accrued Data
export const supplyAccruedData = [
  {
    id: "1",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 5000,
    accrued: 0.0306,
  },
  {
    id: "2",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
  {
    id: "3",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
  {
    id: "4",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
];

// Borrow/Debt Data
export const borrowDebtData = [
  {
    amounts: 153000,
    units: 50,
    debts: 300,
    ltv: 1.2,
    hf: 59.75,
  },
  {
    amounts: 100,
    units: 50,
    debts: 300,
    ltv: 1.2,
    hf: 59.75,
  },
  {
    amounts: 100,
    units: 50,
    debts: 300,
    ltv: 1.2,
    hf: 59.75,
  },
  {
    amounts: 100,
    units: 50,
    debts: 300,
    ltv: 1.2,
    hf: 59.75,
  },
];

// Transaction History Data
export const transactionHistoryData = [
  {
    date: "8/23/2025, 1:38:59 PM",
    type: "Supply",
    amount: 5000,
  },
  {
    date: "8/23/2025, 1:38:59 PM",
    type: "Claim rewards",
    amount: 0.5,
  },
  {
    date: "8/23/2025, 1:38:59 PM",
    type: "Withdraw",
    amount: 2500,
  },
  {
    date: "8/23/2025, 1:38:59 PM",
    type: "Supply",
    amount: 1000,
  },
];

export const supplyColData: Column<SupplyTypes & { actions?: string }>[] = [
  {
    title: "DATE",
    key: "date",
    render: (_, { date }) => <> {date}</>,
  },
  {
    title: "ASSET",
    key: "asset",
    render: (_, { asset }) => <>{asset}</>,
  },

  {
    title: "SUPPLIED",
    key: "supplied",
    render: (_, { supplied }) => <MarketPrice price={supplied} />,
  },
  {
    title: "ACCRUED (USDC)",
    key: "accrued",
    render: (_, { accrued }) => <MarketPrice price={accrued} />,
  },
  {
    title: "Action",
    key: "actions",
    render: (_, record) => <SupplyClaimAction data={record} />,
  },
];

export const transactionHisoryColData: Column<
  SupplyHistoryTypes & { actions?: string }
>[] = [
  {
    title: "DATE",
    key: "date",
    render: (_, { date }) => <> {date}</>,
  },
  {
    title: "TYPE",
    key: "type",
    render: (_, { type }) => <>{type}</>,
  },

  {
    title: "AMOUNT",
    key: "amount",
    render: (_, { amount }) => <MarketPrice price={amount} />,
  },

  {
    title: "Action",
    key: "actions",
    render: () => <Button className="outline-btn">Claim</Button>,
  },
];

export const borrrowColData: Column<BorrowTypes & { actions?: string }>[] = [
  {
    title: "AMOUNTS",
    key: "amounts",
    render: (_, { amounts }) => <MarketPrice price={amounts} />,
  },
  {
    title: "UNITS",
    key: "units",
    render: (_, { units }) => <>{units}</>,
  },
  {
    title: "DEBTS (USDC)",
    key: "debts",
    render: (_, { debts }) => <>{debts}</>,
  },
  {
    title: "LTV",
    key: "ltv",
    render: (_, { ltv }) => <BandPCT bandPct={ltv} />,
  },
  {
    title: "HF",
    key: "hf",
    render: (_, { hf }) => <MarketPrice price={hf} />,
  },
  {
    title: "Action",
    key: "actions",
    render: () => <Button className="pry-btn">Repay</Button>,
  },
];

export const stockHoldingColData: Column<BorrowTypes & { actions?: string }>[] =
  [
    {
      title: "AMOUNTS",
      key: "amounts",
      render: (_, { amounts }) => <MarketPrice price={amounts} />,
    },
    {
      title: "UNITS",
      key: "units",
      render: (_, { units }) => <>{units}</>,
    },
    {
      title: "DEBTS (USDC)",
      key: "debts",
      render: (_, { debts }) => <>{debts}</>,
    },
    {
      title: "LTV",
      key: "ltv",
      render: (_, { ltv }) => <BandPCT bandPct={ltv} />,
    },
    {
      title: "HF",
      key: "hf",
      render: (_, { hf }) => <MarketPrice price={hf} />,
    },
    {
      title: "Action",
      key: "actions",
      render: () => <Button className="pry-btn">Repay</Button>,
    },
  ];
