"use client";
import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import { ArrowRight, Building, Cloud, Shield, Zap } from "lucide-react";
import Link from "next/link";
import FeaturedCard from "../card/FeaturedCard";

export default function TemplateLayout() {

  const cards = [
    {
      image: "/featured1.png",
      title: "Slash Time-to-Deployment",
      description:
        "Move from idea to testing in minutes. Templates eliminate repetitive setups, dramatically cutting provisioning lead times and freeing your engineers for innovation.",
    },
    {
      image: "/featured2.png",
      title: "Containerized Applications ",
      description:
        "Deploy with precision. Use the exact resources and configuration you need to reduce unnecessary compute costs and simplify budget forecasting.",
    },
    {
      image: "/featured2.png",
      title: "Containerized Applications ",
      description:
        "Guarantee an identical starting point for every launch. Templates prevent drift, reduce hard-to-find bugs, and ensure reliable, smoother production rollouts.",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center pt-24">
            <p className="text-4xl font-bold text-gray-700">
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
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch py-12">
            {cards.map((card, index) => (
              <div key={index} className="flex-1">
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

      <div className="bg-white py-36">
        <div className="max-w-7xl mx-auto inset-0 flex justify-between z-10 items-center">
          <div>
            <p className="text-4xl font-bold text-gray-800">
              Pricing{" "}
              <span className="py-1 px-2 bg-gcxPrimary text-white text-base font-medium ">
                Template
              </span>
            </p>
            <p className="text-xl text-gray-700 mt-4 max-w-2xl">
              Templates are persistent disk images stored for your convenience. Pricing is based on the compressed size of the image, offering you a low-cost solution for standardizing your deployments.
            </p>
            {/* Bottom Section */}
            <div className="mt-6 text-lg">
              <Link
                href="/get-started"
                className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
              >
                Create Template
                <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
              </Link>
            </div>
          </div>
 
          <div className="flex gap-12">
            <div className="mb-6">
              <p className="mb-3 text-gray-600  text-lg">
                Starting at
              </p>
              <div className="mt-4">
                <p className="text-6xl font-bold text-gcxPrimary">$0.05<span className="mb-3 text-gray-600 text-lg font-normal">/ GB per month</span></p>
                
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-24">
        <GetStartedCard />
      </div>
    </div>
  );
}
