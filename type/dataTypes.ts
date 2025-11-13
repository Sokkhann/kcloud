import { LucideIcon } from "lucide-react";

export interface ImgTitleDescCardProps {
  image: string;
  title: string;
  desc: string;
}

export interface IconCardProps {
  icon: LucideIcon,
  title: string,
  desc: string,
  link?: string,
  align?: string
}

export interface PricingProduct {
  id: string;
  title: string;
  subTitle: string;
  price: string;
  desc: string[];
  plans?: PricingProduct[]; // optional, only for categories
}

export interface SimpleCardProps  {
  title: string,
  desc: string
}

export interface ProblemSolutionSwitchCardProps {
  proTitle: string;
  proDesc: string;
  solTitle: string;
  solDesc: string;
}