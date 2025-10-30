import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import AppFeatureSection from "../section/app-detail/AppFeatureSection";
import AppUseCaseSection from "../section/app-detail/AppUseCaseSection";
import AppMattersSection from "../section/app-detail/AppMattersSection";

export default function AppDetailLayout() {
  return (
    <div className=" bg-gray-200">
      {/* key feature section */}
      <AppFeatureSection />
       
       {/* why matters section */}
       <AppMattersSection/>

      {/* use case section */}
      <AppUseCaseSection />

     

      {/* get started section */}
      <div className="max-w-7xl mx-auto py-24">
        <GetStartedCard />
      </div>
    </div>
  );
}
