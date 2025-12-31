import { icons, LucideIcon } from "lucide-react";

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

export interface SimpleCardProps {
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
  title: string;
  path: string;
  image: string;
}

export interface PackageProps {
  name: string;
  path: string;
  description: string;
}

export interface ProductListProps {
  name: string;
  path: string;
  icon: keyof typeof icons;
  description: string;
  category: string;
}

export interface ProductCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    price: string;
    unit?: string;
    showButton?: boolean;
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
  cloud_provider: {
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

export interface PackageData {
  name: string;
  slug: string;

  cpu?: string;
  memory?: string;
  storage?: string;
  bandwidth?: string;
  gpu?: string;

  priceHour: string;
  priceMonth: string;

  planCategory?: string;
  computeCategory?: string;
}

export interface dataPlanVM {
  name?: string;
  attribute?: {
    cpu?: number;
    memory?: number;
    storage?: number;
    gpu?: number;
    bandwidth_threshold?: number;
  };
  hourly_price?: number;
  monthly_price?: number;
  plan_category?: { name?: string };
  compute_category?: { name?: string };
}
