import StackCard from "@/components/card/StackCard";
import data from "@/data/dataCards.json";
import React from "react";

export default function ProblemSolutionSection() {
  const cardProblems = data.vnfProblemCards ?? [];

  return (
    <div className="max-w-7xl mx-auto lg:py-32 md:py-32 py-16">
      <div className="text-center mx-4 lg:mx-8 md:mx-8 pb-8">
        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
          Problem & Solution
        </p>
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          Eliminate the cost and rigidity of proprietary hardware appliances.
          Our separates the network function from the box, allowing you to
          deploy instantly on any cloud or NFVI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
        {cardProblems.map((i, index) => (
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
