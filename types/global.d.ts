import { ReactNode } from "react";

export type LocaleLang = {
  lang: "en" | "fr" | "sw";
};

export type FAQTypes = {
  question: string;
  answer: string | ReactNode;
};

export type NavRouteTypes = {
  name: string;
  path: string;
};

export type NavRoutesTypes = {
  name: string;
  path: string;
  childRoutes?: NavRouteTypes[];
};

export type NavContentTypes = { cta: string; routes: NavRoutesTypes[] };

export type HeroContentTypes = {
  title: string;
  subtext: string;
  cta: string;
};

export type FeaturesContentTypes = {
  btnText: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  bg: string;
  cta: string;
  btnColor: string;
  path: string;
};

export type ReviewsDataType = {
  message: string;
  name: string;
  imageUrl: string;
  nameColor?: string;
  textColor: string;
  bg: string;
};

export type ReviewsType = {
  title: string;
  data: ReviewsDataType[];
};

export type HomePageContentTypes = {
  hero: HeroContentTypes;
  trusted: {
    title: string;
    subtext: string;
  };
  features: FeaturesContentTypes[];
  howItWorks: { id: string; title: string }[];
  pictureThis: string[];
  reviewsData: ReviewsType;
};

export type GetStartedTypes = {
  title: string;
  subtext: string;
  cta: string;
  backed: string;
  power: string;
  supported: string;
};

export type FooterTypes = {
  subtext: string;
  getStarted: GetStartedTypes;
  data: {
    productRoutes: { title: string; list: NavRouteTypes[] };
    companyRoutes: { title: string; list: NavRouteTypes[] };
    legalRoutes: { title: string; list: NavRouteTypes[] };
    resourcesRoutes: { title: string; list: NavRouteTypes[] };
  };
};

export type OtherPagesHeroTypes = {
  pagetitle: string;
  title: string;
  subtext: string;
};

export type OtherPagesFeaturesTypes = {
  title: string;
  cta: string;
  list: { title: string; subtext: string }[];
};

export type OtherPagesTypes = {
  hero: OtherPagesHeroTypes;
  features: OtherPagesFeaturesTypes;
  faqData: {
    title: string;
    faqs: FAQTypes[];
  };
};

export type ExtraTypes = { title: string; subtext: string };

export type RateCardTypes = {
  title: string;
  subtext: string;
  rate: string;
  adminRate: string;
};

export type NeoTypes = {
  useEverywhere: {
    title: string;
    list: string[];
  };

  howItWorks: {
    title: string;
    cta: string;
    list: ExtraTypes[];
  };
};

export type DictionaryTypes = {
  navigation: NavContentTypes;
  page: {
    home?: HomePageContentTypes;
    virtualCard?: OtherPagesTypes;
    remittance?: OtherPagesTypes & { countryTitle: string };
    payBills?: OtherPagesTypes;
    earnStake?: OtherPagesTypes & { stake: ExtraTypes; rewards: ExtraTypes };
    earnNeo?: OtherPagesTypes & NeoTypes;
    borrow?: OtherPagesTypes & { rateCard: RateCardTypes };
    payLater?: OtherPagesTypes & { rateCard: RateCardTypes };
  };
  footer: FooterTypes;
};

export type SearchParams = {
  tab: string;
  id: string;
  key: string;
  title: string;
};
