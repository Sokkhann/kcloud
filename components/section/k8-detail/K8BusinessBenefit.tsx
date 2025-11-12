import IconCard from "@/components/card/IconCard";
import { businessCards } from "@/type/productDetail";
import React from "react";

export default function K8BusinessBenefit() {

  const cards = businessCards

  return (
    <div>
      {/* Business Benefits */}
      <div className="">
        <div className="max-w-7xl mx-auto py-16 lg:py-32 md:py-32">
          <div className="text-center pb-8">
            <p className="text-2xl lg:text-4xl md:text-4xl font-bold text-gray-700">
              Business Benefits
            </p>
          </div>

          {/* business benefits card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
            {cards.map((card, index) => (
              <IconCard
                key={index}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
