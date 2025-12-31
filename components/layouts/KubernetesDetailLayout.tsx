"use client";

import React from "react";
import K8FeatureSection from "../section/products/compute/k8-detail/K8FeatureSection";
import K8UseCaseSection from "../section/products/compute/k8-detail/K8UseCaseSection";
import K8BusinessBenefit from "../section/products/compute/k8-detail/K8BusinessBenefit";
import GetStartedCard from "../card/GetStartedCard";
import WelcomeSection from "../section/overview-detail/WelcomeSection";

export default function KubernetesDetailLayout() {
  return (
    <div className=" bg-gray-200">

      {/* Welcome section of kubernetes */}
      {/* <WelcomeSection
        title="Managed Kubernetes Service"
        desc="Deploy and scale containerized applications with ease. Our CloudStack-powered Kubernetes Service (CKS) integrates seamlessly with your existing virtual environment, providing high-performance container orchestration without the complexity of manual setup."
        image="s"
      /> */}

      {/* key feature section */}
      <K8FeatureSection />

      {/* use case section */}
      <K8UseCaseSection />

      {/* business benefit */}
      {/* <K8BusinessBenefit /> */}

      {/* get started section */}
      <div className="max-w-7xl mx-auto pb-6 lg:pb-12 md:pb-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
