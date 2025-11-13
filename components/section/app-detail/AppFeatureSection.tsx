import FeaturedCard from "@/components/card/FeaturedCard";
import { appFeatureDetail } from "@/type/productDetail";
import React from "react";

export default function AppFeatureSection() {
  const cards = appFeatureDetail;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 lg:py-32 md:py-32">
        {/* Section Title */}
        <div className="text-center pb-12">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-800">
            Key Features
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Flexible and powerful computing resources to run your workloads
            efficiently. Scale CPU, memory, and storage as needed. Ideal for
            applications, services, and containerized workloads.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 mx-4 lg:mx-8 md:mx-8">
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
