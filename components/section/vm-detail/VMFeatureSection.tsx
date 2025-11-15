import FeaturedCard from "@/components/card/FeaturedCard";
import data from "@/data/dataCards.json"
import React from "react";

export default function VMFeatureSection() {
  const cards = data.vmFeatureDetailCards ?? [];

  return (
    <div className="max-w-7xl mx-auto lg:py-32 md:py-32 py-16">
      <div className="text-center pb-8 lg:mx-8 md:mx-8 mx-4">
        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
          Comprehensive, cost-effective cloud computing
        </p>
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          Flexible and powerful computing resources to run your workloads
          efficiently. Scale CPU, memory, and storage as needed. Ideal for
          applications, services, and containerized workloads. Reliable, high
          performance, and ready for any demand.
        </p>
      </div>

      {/* feature card section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 justify-items-center items-stretch lg:mx-8 md:mx-8 mx-4"
      >
        {cards.map((card, index) => (
          <FeaturedCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
