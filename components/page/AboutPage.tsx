"use client";

import HeroComponent from "../HeroComponent";
import AboutUsCard from "../card/AboutUsCard";
import GetStartedCard from "../card/GetStartedCard";
import WrapCard from "../card/WrapCard";
import VisionSecion from "../section/about-us/VisionSecion";
import ScrollReveal from "../animations/ScrolReveal";
import data from "@/data/dataCards.json"
import { ImgTitleDescCardProps } from "@/type/dataTypes";

export default function AboutPage() {
  const WelcomeCards = data.welcomeGCXCards as ImgTitleDescCardProps[]

  return (
    <div className="w-screen bg-gray-200">
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[300px]"
        image="/hero-bg.png"
        description="Cambodia s #1 Data Center"
        title="About Us"
      />

      {/* Vision Section */}
      <div className="mt-10">
        <div className="text-center">
          {/* title and description */}
          <div className="py-16 lg:py-32 md:py-32">
            <div className="mx-4 lg:mx-8 md:mx-8">
              <p className="font-bold text-gcxprimary lg:text-4xl md:text-4xl text-2xl ">Our Vision</p>
              <p className="text-base text-gray-600 max-w-3xl mx-auto font-medium">
                Revolutionizing Cloud and Data Center Services in Cambodia
              </p>
            </div>

            <ScrollReveal>
              {/* Vision Card Section */}
              <div className="max-w-7xl mx-auto">
                <VisionSecion />
              </div>
            </ScrollReveal>
          </div>

          {/* About Us Card Section */}
          <div className="py-16 lg:py-32 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* title and description */}
              <div className="text-center lg:mb-12 md:mb-6">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gcxprimary">
                  About GCX
                </p>
              </div>

              <ScrollReveal>
                {/* Solutions section */}
                <AboutUsCard />
              </ScrollReveal>
            </div>
          </div>

          <div className="py-16 lg:py-32 md:py-32 overflow-hidden max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="mb-12 text-center">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gcxprimary">
                  Welcome to GCX
                </p>
              </div>

              <ScrollReveal>
                <div className="gap-4 lg:gap-8 md:gap-8 px-4 lg:px-8 md:px-8 justify-center items-start flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                  {WelcomeCards.map((card, index) => (
                    <WrapCard
                      key={index}
                      card={card}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

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
