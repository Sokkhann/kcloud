"use client";
import React from "react";
import Image from "next/image";

import { Zap, Settings, TrendingUp } from "lucide-react";
import { productDetailLayout } from "@/type/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";
import data from "@/data/dataCards.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";
import LoadBalacerFeatureSection from "../section/products/Networking/load-balancer/LoadBalacerFeatureSection";
import LoadBalancerUseCaseSection from "../section/products/Networking/load-balancer/LoadBalancerUseCaseSection";

interface LoadBalancerDetailLayoutProps {
  product: productDetailLayout;
}

export default function LoadBalancerDetailLayout({ }: LoadBalancerDetailLayoutProps) {
  const features = data.loadBalanceFeatureDetailCards ?? [];
  const algorithms = data.loadBalanceAlgorithmCards ?? [];
  const whyChooseCards = data.loadBalanceWhyChooseCards ?? [];
  const whyChoose: IconCardProps[] = whyChooseCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <div className="bg-gray-100">
      {/* load balancer feature section */}
      <LoadBalacerFeatureSection/>

      {/* load balancer use case section */}
      <LoadBalancerUseCaseSection/>

      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
