"use client";
import React from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import BenefitListCard from "../card/BenefitListCard";
import data from "@/data/dataCards.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";

export interface StoragePrice {
  value: string;
  label: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export default function AffinityGroupLayout() {
  const cards = data.affinityGroupOfferCards ?? [];

  const featureCards = data.affinityGroupFeatureDetailCards ?? [];
  const features: IconCardProps[] = featureCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto py-16 md:py-32 lg:py-32">
          <div className="text-center px-4 lg:px-8 md:px-8 mb-8">
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 ">
              What We Offer
            </p>
            <p className="md:text-lg text-base text-gray-600 xl:mt-4 mt-2 ">
              Our Affinity Group service allows you to strategically define
              relationships between your VMs, ensuring your infrastructure meets
              your application&aposs unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 md:gap-8 px-4 lg:px-8 md:px-8">
            {features.map((feature, index) => (
              <div key={index} className="">
                <BenefitListCard items={[feature]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-32 lg:py-32">
        <div className="max-w-7xl mx-auto ">
          <div className=" px-4 lg:px-8 md:px-8 ">
            <div className="mb-8 text-center">
              <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-800">
              Benefits of Utilizing Affinity Groups{" "}
            </p>
            <p className="md:text-lg text-base text-gray-700 mt-4 ">
              Affinity Groups are more than just a configuration setting; they
              are a critical tool that directly translates into measurable
              improvements for your applications and operational efficiency.
            </p>
            </div>

            {/* feature card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 xl:pt-12 pt-8 ">
              {cards.map((card, index) => (
                <div key={index} className="">
                  <FeaturedCard
                    image={card.image}
                    title={card.title}
                    description={card.desc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-16 lg:py-32 md:py-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
