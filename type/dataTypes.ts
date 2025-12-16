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

export interface NavbarProducts {
  id: string;
  name: string;
  path?: string;
  image: string;
}

export interface dataPlan {
  id: string;
  name?: string;
  attribute?: {
    cpu?: number;
    memory?: number;
    gpu?: number;
    storage?: number;
    bandwidth_threshold?: number;
    network_rate?: number;
    size?: number;
  };
  hourly_price?: number;
  monthly_price?: number;
  plan_category: {
    name?: string;
  };
  compute_category: {
    name?: string;
  };
  cloud_provider:{
    name?: string;
    display_name?: string;
    description?: string;
  };
  plan_region: {
    region: {
      name?: string;
      country?: string;
    }
  };
  cloud_provider_setup: {
    config: {
      bandwidth_threshold?: string;
      hypervisor?: string;
      storage_cluster?: string;
    }
  };
  region_names_by_setup: {
    regions?: string;
  };
  timezone?: string;
}