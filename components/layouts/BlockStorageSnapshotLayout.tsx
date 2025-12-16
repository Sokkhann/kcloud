"use client";
import React from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import data from "@/data/dataCards.json";

export default function SnapshotLayout() {
  const cards = data.snapshotFeatureDetailCards ?? [];

  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 md:py-32 lg:py-32">
        <div className="text-center px-4 lg:px-8 md:px-8">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
            Snap, Restore, Protect
          </p>
          <p className="md:text-lg text text-gray-600 mt-4 max-w-5xl mx-auto  ">
            Protect your virtual machines instantly by capturing their full
            state configuration, data, and settings and restore them in seconds
            whenever needed. Snapshots make managing your VMs effortless,
          </p>
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

      <div className="bg-white mb-16 lg:mb-32 md:mb-32">
        <div className="max-w-7xl mx-auto inset-0 xl:flex justify-between z-10 items-center  py-16 lg:py-32 md:py-32 px-4 lg:px-8 md:px-8">
          <div>
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-800">
              Pricing{" "}
              <span className="py-1 px-2 bg-gcxPrimary text-white md:text-base text-sm font-medium ">
                Snapshot
              </span>
            </p>
            <p className="xl:text-xl md:text-lg text-base text-gray-700 mt-4 max-w-2xl">
              Easily secure your <b>instances</b> and <b>volumes</b> with
              automated monthly snapshots. Whether it&lsquo;s a system update or
              unexpected issue, your data stays safe and can be restored
              instantly with a single click.
            </p>

            {/* Bottom Section */}
            <div className="mt-6 text-lg hidden xl:block">
              <Link
                href="/get-started"
                className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
              >
                Add Snapshot
                <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
              </Link>
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-3 text-gray-600">Starting at</p>
            <p className="md:text-6xl text-4xl  font-bold text-gcxPrimary">
              $0.06
              <span className="md:text-lg text-base text-gray-600 font-normal">
                {" "}
                /month
              </span>
            </p>
          </div>
          <div className=" md:text-lg text-base xl:hidden block">
            <Link
              href="/get-started"
              className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
            >
              Add Snapshot
              <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
