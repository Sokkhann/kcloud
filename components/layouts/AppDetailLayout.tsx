import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import AppFeatureSection from "../section/app-detail/AppFeatureSection";
import AppUseCaseSection from "../section/app-detail/AppUseCaseSection";
import AppMattersSection from "../section/app-detail/AppMattersSection";
import AppFAQSection from "../section/app-detail/AppFAQSection";

export default function AppDetailLayout() {
  return (
    <div className=" bg-gray-100">
      {/* key feature section */}
      <AppFeatureSection />

      {/* use case section */}
      <AppUseCaseSection />

      {/* why matters section */}
      <AppMattersSection />

      {/* get started section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>

      <AppFAQSection/>
    </div>
  );
}
