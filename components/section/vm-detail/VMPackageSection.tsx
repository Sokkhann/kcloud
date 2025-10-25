import PricingCard from "@/components/card/PricingCard";
import { pricingData } from "@/data/productPricing";
import React from "react";

export default function VMPackageSection() {
  
  const selectedProduct = pricingData.find((p) => p.id === "virtual-machine");

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24">
          <div className="text-center my-16">
            <p className="text-4xl font-bold text-gray-700">
              Find the Perfect Plan for Your Needs
            </p>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
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
    </div>
  );
}
