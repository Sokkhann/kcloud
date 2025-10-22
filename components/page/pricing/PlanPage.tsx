import { pricingData } from "@/data/productPricing";
import React from "react";
import PricingCard from "../../card/PricingCard";
import GetStartedCard from "@/components/card/GetStartedCard";
import HeroComponent from "@/components/HeroComponent";

interface VMProps {
  param: { slug: string };
}

export default function PlanPage({ param }: VMProps) {
  const { slug } = param;

  const selectedProduct = pricingData.find((p) => p.id === slug);

  return (
    <div>
      <div className="mt-10">
        {/* Hero section */}
        <HeroComponent
          height="h-[600px]"
          image="/hero-bg.png"
          title="Virtual Machine"
          description="Global Cloud Exchange Company Limited (GCX), a Cambodia-registered company, is one of the country’s first “Carrier Neutral” Tier 3 Data Center built to meet the ever-growing needs of institutional and high-level clients in Cambodia’s emerging economy."
        />
      </div>
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {selectedProduct?.plans?.map((item) => (
            <PricingCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              subTitle={item.subTitle}
              desc={item.desc}
              buttonLabel="Choose Plan"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
