"use client";

import React, { useState } from "react";
import HeroComponent from "../HeroComponent";
import AboutUsCard from "../card/AboutUsCard";
import GetStartedCard from "../card/GetStartedCard";
import WrapCard from "../card/WrapCard";
import VisionSecion from "../section/about-us/VisionSecion";

const cards = [
  {
    image: "/cloud.png",
    title: "Explore the Cloud",
    desc: "Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability.",
  },
  {
    image: "/cloud.png",
    title: "Secure Infrastructure",
    desc: "Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability.",
  },
  {
    image: "/cloud.png",
    title: "Data Insights",
    desc: "Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability.",
  },
  {
    image: "/cloud.png",
    title: "Data Insights",
    desc: "Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability. Discover powerful cloud solutions for growth and scalability.",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="mt-24">
        <div className="mb-24 px-4 py-16 text-center">
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
          <div className="mb-24 max-w-7xl mx-auto ">
            <VisionSecion />
          </div>

          {/* About Us Card Section */}
          <div className="px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto  mb-24">
              {/* title and description */}
              <div className="my-12 text-center">
                <p className="text-5xl font-bold text-green-800">
                  Welcome to GCX
                </p>
              </div>

              {/* Solutions section */}
              <AboutUsCard />
            </div>
          </div>

          <div className="px-4 py-16 h-[650px] overflow-hidden">
            <div className="mb-12">
              <div className="mt-12 mb-24 text-center">
                <p className="text-5xl font-bold text-green-800">
                  Welcome to GCX
                </p>
              </div>

              <div className="flex gap-6 justify-center items-start flex-wrap">
                {cards.map((card, index) => (
                  <WrapCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    desc={card.desc}
                    isActive={activeIndex === index}
                    onHover={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="px-4 py-16 max-w-7xl mx-auto">
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
