import IconCard from "@/components/card/IconCard";
import { businessCards } from "@/data/productDetail";
import React from "react";

export default function K8BusinessBenefit() {

  const cards = businessCards

  return (
    <div>
      {/* Business Benefits */}
      <div className="">
        <div className="max-w-7xl mx-auto py-24">
          <div className="text-center my-16">
            <p className="text-4xl font-bold text-gray-700">
              Business Benefits
            </p>
          </div>

          {/* business benefits card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
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
