import PricingCard from "@/components/card/PricingCard";
import { pricingData } from "@/type/productPricing";
import React from "react";

export default function VMPackageSection() {
  const selectedProduct = pricingData.find((p) => p.id === "virtual-machine");

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto lg:py-32 md:py-32 py-16">
        <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
            Find the Perfect Plan for Your Needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mx-4 lg:mx-8 md:mx-8">
          {selectedProduct?.plans?.map((item) => (
            <PricingCard
              key={item.id}
              slug={item.id}
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
