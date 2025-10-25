import StackCard from "@/components/card/StackCard";
import { problemSolutionCards } from "@/data/productDetail";
import React from "react";

export default function ProblemSolutionSection() {

  const cards = problemSolutionCards;
  
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="text-center my-16">
        <p className="text-4xl font-bold text-gray-700">Problem & Solution</p>
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          Eliminate the cost and rigidity of proprietary hardware appliances.
          Our separates the network function from the box, allowing
          you to deploy instantly on any cloud or NFVI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {cards.map((i, index) => (
          <StackCard
            key={index}
            proTitle={i.proTitle}
            proDesc={i.proDesc}
            solTitle={i.solTitle}
            solDesc={i.solDesc}
          />
        ))}
      </div>
    </div>
  );
}
