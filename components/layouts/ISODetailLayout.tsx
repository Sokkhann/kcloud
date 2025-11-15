"use client";

import React from "react";
import Image from "next/image";
import { productDetailLayout } from "@/type/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";
import data from "@/data/dataCards.json";
import { getReactIcon } from "@/type/getReactIcon";
import { IconCardProps } from "@/type/dataTypes";

interface ISODetailLayoutProps {
  product: productDetailLayout;
}

export default function ISODetailLayout({}: ISODetailLayoutProps) {
  const features = data.isoFeatureDetailCards ?? [];

  const useCasesCards = data.isoUseCaseCards ?? [];
  const useCases: IconCardProps[] = useCasesCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  const howItWorks = data.isoHowItWorkCards ?? [];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <section className="px-4 lg:px-8 md:px-8  py-16 md:py-32 lg:py-32">
          <div className="max-w-7xl mx-auto">
            {/* title and description */}
            <div className="pb-8 text-center max-w-3xl mx-auto">
              <p className="lg:text-4xl md:text-4xl text-2xl  font-bold text-gray-700">
                Attaching an ISO
              </p>
              <p className="text-base text-gray-600 mt-4">
                From the Instance Overview page, select Attach ISO for VM to
                mount your image to a virtual machine. Your VM will boot from
                the ISO, letting you install the OS or run recovery tools
                immediately.
              </p>
            </div>

            {/* Features grid with hover animation */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8">
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
                    className="absolute bottom-0 left-0 w-full bg-white p-6 sm:p-8 transition-all duration-500 ease-in-out
                  h-[80px] sm:h-[90px] lg:h-[90px] group-hover:h-[160px] sm:group-hover:h-[170px]"
                    style={{ transformOrigin: "bottom" }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>

        {/* How It Works Section */}
        <div className="px-4 lg:px-8 md:px-8  pb-16 md:pb-32 lg:pb-32">
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-4 text-center text-gray-700">
              How It Works
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              Get your custom OS running in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 md:gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className=" text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="px-4 lg:px-8 md:px-8  pb-16 md:pb-32 lg:pb-32">
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-center mb-4 text-gray-700">
              Common Use Cases
            </h2>
            <p className="text-center text-gray-600 mx-auto">
              ISOs are perfect for a variety of scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex gap-4"
              >
                <div className="flex-shrink-0">{<useCase.icon className="h-8 w-8 text-gcxPrimary" />}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {useCase.title}
                  </h3>
                  <p className=" text-gray-600">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular ISOs Section */}
        <div className="px-4 lg:px-8 md:px-8  pb-16 md:pb-32 lg:pb-32">
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="lg:text-4xl md:text-4xl text-2xl  font-bold text-center mb-4 text-gray-700">
              Popular ISO Images
            </h2>
            <p className="text-center text-gray-600 ">
              Commonly used operating systems and tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 md:gap-8">
            {[
              "Ubuntu Server",
              "CentOS Stream",
              "Debian",
              "Rocky Linux",
              "AlmaLinux",
              "Fedora Server",
              "openSUSE",
              "Arch Linux",
            ].map((os, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:border-green-600 transition-colors cursor-pointer"
              >
                <p className="font-medium text-gray-700">{os}</p>
              </div>
            ))}
          </div>
        </div>

        {/* get started card section */}
        <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
          <div className="mx-4 lg:mx-8 md:mx-8">
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
