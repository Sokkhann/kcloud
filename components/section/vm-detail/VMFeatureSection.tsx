import FeaturedCard from "@/components/card/FeaturedCard";
import { vmFeatureDetail } from "@/data/productDetail";
import React from "react";

export default function VMFeatureSection() {

  const cards =vmFeatureDetail

  return (
    <div>
      <div className="max-w-7xl mx-auto py-24">
        <div className="text-center my-16">
          <p className="text-4xl font-bold text-gray-700">
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
        <div className="flex flex-col md:flex-row gap-6 py-8 justify-center items-stretch">
          {cards.map((card, index) => (
            <div key={index} className="flex-1">
              <FeaturedCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
