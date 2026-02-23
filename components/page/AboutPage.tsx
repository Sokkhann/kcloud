"use client";

import HeroComponent from "../HeroComponent";
import GetStartedCard from "../card/GetStartedCard";
import ScrollReveal from "../animations/ScrolReveal";
import data from "@/data/dataCards.json";
import { ImgTitleDescCardProps } from "@/type/dataTypes";
import WaveCard from "../card/WaveCard";
import AboutGCXSection from "../section/about-us/AboutGCXSection";
import VisionSection from "../section/about-us/VisionSection";
import DataCenterSection from "../section/about-us/DataCenterSection";
import WhyGCXCloudSection from "../section/about-us/WhyGCXCloudSection";
import WhatMakeGCXDifferentSection from "../section/about-us/WhatMakeGCXDifferentSection";

export default function AboutPage() {

  const WelcomeCards = data.welcomeGCXCards as ImgTitleDescCardProps[]

  return (
    <div className="w-screen bg-white">
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[600px]"
        image="/about-us-bg.png"
        description="Cambodia's #1 Data Center"
        title="About GCX KCloud"
      />

      <div className="">
        <div className="text-center">

          {/* about us section */}
          <AboutGCXSection />

          {/* title and description */}
          <VisionSection />

          {/* data center location section */}
          <DataCenterSection />
          
          {/* what make cloud gcx different */}
          <WhatMakeGCXDifferentSection />

          <section className="max-w-7xl mx-auto lg:pb-32 md:pb-32 pb-16">
            <ScrollReveal>
              <div className=" lg:px-8 md:px-8 px-4">
                <GetStartedCard />
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </div>
  );
}
