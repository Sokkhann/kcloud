import React from "react";
import ProblemSolutionSection from "../section/vnf-detial/ProblemSolutionSection";
import VNFFeatureSection from "../section/vnf-detial/VNFFeatureSection";
import GetStartedCard from "../card/GetStartedCard";
import VNFUseCaseSection from "../section/vnf-detial/VNFUseCaseSection";

export default function VNFDetailLayout() {
  return (
    <div>
      <ProblemSolutionSection />
      <VNFFeatureSection />
      <VNFUseCaseSection />

      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
