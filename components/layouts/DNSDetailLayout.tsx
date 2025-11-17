"use client";
import React from "react";
import Image from "next/image";
import { productDetailLayout } from "@/type/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";
import data from "@/data/dataCards.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";

interface DNSDetailLayoutProps {
  product: productDetailLayout;
}

export default function DNSDetailLayout({}: DNSDetailLayoutProps) {
  const features = data.dnsFeatureDetailCards ?? [];
  const howItWorks = data.dnsHowItWordCards ?? [];

  const whyChooseGCXCards = data.dnsWhyChooseCards ?? [];

  const whyChooseGCX: IconCardProps[] = whyChooseGCXCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="px-4 lg:px-8 md:px-8  py-16 md:py-32 lg:py-32">
          <div className="mb-8">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-center mb-4 text-gray-700">
              What Makes It Awesome?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage DNS records with confidence and ease
            </p>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl h-[300px] sm:h-[320px] lg:h-[350px] cursor-pointer bg-white w-full"
              >
                {/* Background Image */}
                <div className="rounded-2xl w-full h-full relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Expanding White Panel */}
                <div
                  className={`
                              absolute bottom-0 left-0 w-full bg-white p-6 sm:p-8
                              transition-all duration-500 ease-in-out
                              ${/* LG: hover expand */ ""}
                              lg:h-[90px] lg:group-hover:h-[170px]
                              ${/* SM + MD: always expanded */ ""}
                              h-[170px] sm:h-[170px] md:h-[170px]
                            `}
                  style={{ transformOrigin: "bottom" }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                    {feature.title}
                  </h3>

                  <p
                    className={`
                                text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base
                                transition-opacity duration-500
                                ${/* LG: fade in on hover */ ""}
                                lg:opacity-0 lg:group-hover:opacity-100
                                ${/* SM + MD: always visible */ ""}
                                opacity-100
                              `}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* How It Works Section */}
        <div className="px-4 lg:px-8 md:px-8  pb-16 md:pb-32 lg:pb-32">
          <div className="mb-8">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-center mb-4 text-gray-700">
              How It Works
            </h2>
            <p className="text-center text-gray-600  max-w-2xl mx-auto">
              Get your domain up and running in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 md:gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-gcxprimary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose GCX Section */}
        <div className="px-4 lg:px-8 md:px-8  pb-16 md:pb-32 lg:pb-32">
          <div className="mb-8">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-center mb-4 text-gray-700">
              Why Choose GCX Over Others?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Built for developers who want power without complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 md:gap-8">
            {whyChooseGCX.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="text-gcxPrimary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className=" text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mx-4 lg:mx-8 md:mx-8 p-8 mb-16 md:mb-32 lg:mb-32 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Focus on Building, Not DNS Management
              </h2>
              <p className="text-gray-600 leading-relaxed">
                GCX&apos;s DNS simplifies domain management so you can focus on
                building apps, services and websites without worrying about
                where they&apos;re pointing. Start by adding your domain,
                configuring the right records and let our platform handle the
                rest.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Card Section */}
        <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
          <div className="mx-4 lg:mx-8 md:mx-8">
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
