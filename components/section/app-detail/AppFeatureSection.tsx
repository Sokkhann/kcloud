import FeaturedCard from "@/components/card/FeaturedCard";
import { appFeatureDetail } from "@/data/productDetail";
import React from "react";

export default function AppFeatureSection() {
  const cards = appFeatureDetail;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-3xl sm:text-4xl font-bold text-gray-800">
            Key Features
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Flexible and powerful computing resources to run your workloads
            efficiently. Scale CPU, memory, and storage as needed. Ideal for
            applications, services, and containerized workloads.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
    </div>
  );
}
