import SimpleCard from "@/components/card/SimpleCard";
import { appUseCaseCard } from "@/type/productDetail";
import React from "react";

export default function AppUseCaseSection() {
  const cards = appUseCaseCard;

  return (
    <div className="w-screen bg-gcxprimary/10">
      <div className="max-w-7xl mx-auto py-16 md:py-32 lg:py-32">
        <div className="">
          <div className="text-center pb-8 ">
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">Use Cases</p>
            <p className="text-base text-gray-600 mt-4 mx-4 md:mx-8 lg:mx-0">
              Kubernetes (K8s) is an open-source system for automating the
              deployment, scaling, and management of containerized applications.
              Its primary use cases revolve around managing complex,
              distributed, and high-scale workloads.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
          {cards.map((card, index) => (
            <div key={index} className="relative">
              <SimpleCard title={card.title} desc={card.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
