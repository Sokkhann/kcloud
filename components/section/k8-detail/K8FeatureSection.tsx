import FeaturedCard from "@/components/card/FeaturedCard";
import { k8sFeatureDetail } from "@/data/productDetail";
import React from "react";

export default function K8FeatureSection() {

  const cards = k8sFeatureDetail

  return (
    <div>
      <div className="max-w-7xl mx-auto py-24">
        <div className="text-center my-16">
          <p className="text-4xl font-bold text-gray-700">Key Features</p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Flexible and powerful computing resources to run your workloads
            efficiently. Scale CPU, memory, and storage as needed. Ideal for
            applications, services, and containerized workloads. Reliable, high
            performance, and ready for any demand.
          </p>
        </div>

        {/* feature card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
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
