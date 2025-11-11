"use client";

import React from "react";
import K8FeatureSection from "../section/k8-detail/K8FeatureSection";
import K8UseCaseSection from "../section/k8-detail/K8UseCaseSection";
import K8BusinessBenefit from "../section/k8-detail/K8BusinessBenefit";
import GetStartedCard from "../card/GetStartedCard";

export default function KubernetesDetailLayout() {
  return (
    <div className=" bg-gray-200">
      {/* key feature section */}
      <K8FeatureSection />

      {/* use case section */}
      <K8UseCaseSection />

      {/* business benefit */}
      <K8BusinessBenefit />

      {/* get started section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
