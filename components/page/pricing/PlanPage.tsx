import { pricingData } from "@/data/productPricing";
import React from "react";
import PricingCard from "../../card/PricingCard";

interface VMProps {
  param: { slug: string };
}

export default function PlanPage({ param }: VMProps) {
  const { slug } = param;

  const selectedProduct = pricingData.find((p) => p.id === slug);

  return (
    <div>
      <div className="min-h-screen bg-white py-16">
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
