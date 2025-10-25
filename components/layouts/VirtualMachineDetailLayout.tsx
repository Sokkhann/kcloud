import React from "react";
import VMFeatureSection from "../section/vm-detail/VMFeatureSection";
import VMPackageSection from "../section/vm-detail/VMPackageSection";
import GetStartedCard from "../card/GetStartedCard";

export default function VirtualMachineDetailLayout() {
  return (
    <div className=" bg-gray-100">
      <VMFeatureSection />
      <VMPackageSection />

      <div className="max-w-7xl mx-auto py-24">
        <GetStartedCard/>
      </div>
    </div>
  );
}
