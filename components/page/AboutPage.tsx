import React from "react";
import HeroComponent from "../HeroComponent";
import VisionCard from "../card/VisionCard";
import AboutUsCard from "../card/AboutUsCard";
import GetStartedCard from "../card/GetStartedCard";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[300px]"
        image="/hero-bg.png"
        description="Cambodia s #1 Data Center"
        title="About Us"
      />

      {/* Vision Section */}
      <div className="">
        <div className="mb-24 max-w-7xl mx-auto px-4 py-16 text-center">
          {/* title and description */}
          <div className="mb-12">
            <p className="font-bold text-green-800">Our Vision</p>
            <p className="text-5xl font-bold text-gray-700 max-w-5xl mx-auto">
              Revolutionizing Cloud and Data Center Services in Cambodia
            </p>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              To be the leading force in empowering businesses in Cambodia and
              beyond through tailored cloud solutions and data center services,
              fostering growth and prosperity.
            </p>
          </div>

          {/* Vision Card Section */}
          <div className="mb-24">
            <VisionCard />
          </div>

          {/* About Us Card Section */}
          <div className="mb-64">
            <AboutUsCard />
          </div>

          <div>
            <GetStartedCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
