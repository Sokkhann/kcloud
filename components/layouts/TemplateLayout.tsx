"use client";
import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import { ArrowRight} from "lucide-react";
import Link from "next/link";
import FeaturedCard from "../card/FeaturedCard";
import data from "@/data/dataCards.json";

export default function TemplateLayout() {
  const cards = data.templateFeatureDetailCards ?? []

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto py-16 md:py-32 lg:py-32 ">
          <div className="text-center px-4 lg:px-8 md:px-8">
            <p className="lg:text-4xl md:text-4xl text-2xl  font-bold text-gray-700 ">
              Why Build with Templates
            </p>
            {/* <p className="text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
              GCX Backups provides set-it-and-forget-it protection for your
              entire server. Get recurring, full-server image backups
              automatically, ensuring an immediate restoration point when
              failure strikes. Simple pricing—a flat percentage of your VM
              cost—makes disaster recovery easy and budget-friendly.
            </p> */}
          </div>

          {/* feature card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 xl:pt-12 pt-8 px-4 lg:px-8 md:px-8">
            {cards.map((card, index) => (
              <div key={index} className="">
                <FeaturedCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white mb-16 lg:mb-32 md:mb-32">
        <div className="max-w-7xl mx-auto inset-0 xl:flex justify-between z-10 items-center py-16 lg:py-32 md:py-32 px-4 lg:px-8 md:px-8">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              Pricing{" "}
              <span className="py-1 px-2 bg-gcxPrimary text-white md:text-base text-sm font-medium ">
                Template
              </span>
            </p>
            <p className="xl:text-xl md:text-lg text-base text-gray-700 mt-4 xl:max-w-2xl w-full">
              Templates are persistent disk images stored for your convenience.
              Pricing is based on the compressed size of the image, offering you
              a low-cost solution for standardizing your deployments.
            </p>
            {/* Bottom Section */}
            <div className="mt-6 text-lg hidden xl:block">
              <Link
                href="/get-started"
                className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
              >
                Create Template
                <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
              </Link>
            </div>
          </div>
          <div>

          </div>
          <div className="flex gap-12">
            <div className="mb-6">
              <p className="mb-3 text-gray-600  text-lg">Starting at</p>
              <div className="mt-4">
                <p className="md:text-6xl text-4xl font-bold text-gcxPrimary">
                  $0.05
                  <span className="mb-3 text-gray-600 md:text-lg text-base font-normal">
                    / GB per month
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" md:text-lg text-base xl:hidden block">
            <Link
              href="/get-started"
              className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
            >
              Create Template
              <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto xl:py-24 md:py-16 py-8 px-6">
        <GetStartedCard />
      </div>
    </div>
  );
}
