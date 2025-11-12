import SimpleCard from "@/components/card/SimpleCard";
import { vnfUseCaseCard } from "@/type/productDetail";
import React from "react";

export default function VNFUseCaseSection() {
  const cards = vnfUseCaseCard;

  return (
    <div className="max-w-7xl mx-auto py-16 lg:py-32 md:py-32">
      <div className="">
        <div className="text-center mx-4 lg:mx-8 m:mx-8">
          <p className="text-4xl font-bold text-gray-700">Use Cases</p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Kubernetes (K8s) is an open-source system for automating the
            deployment, scaling, and management of containerized applications.
            Its primary use cases revolve around managing complex, distributed,
            and high-scale workloads.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 py-8 lg:mx-8 md:mx-8 mx-4">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <SimpleCard title={card.title} desc={card.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}
