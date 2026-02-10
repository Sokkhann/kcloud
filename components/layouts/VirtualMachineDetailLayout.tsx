import React from "react";
import VMFeatureSection from "../section/products/compute/vm-detail/VMFeatureSection";
import VMPackageSection from "../section/products/compute/vm-detail/VMPackageSection";
import GetStartedCard from "../card/GetStartedCard";
import VMUseCaseSection from "../section/products/compute/vm-detail/VMUseCaseSection";
import VMNestedProductSection from "../section/products/compute/vm-detail/VMNestedProductSection";

export default function VirtualMachineDetailLayout() {
  return (
    <div className="bg-gray-100">
      <VMFeatureSection />

      <VMUseCaseSection/>

      <VMNestedProductSection/>

      <div className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard/>
        </div>
      </div>

    </div>
  );
}
