"use client";
import React from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SnapshotLayout() {
  const cards = [
    {
      image: "/featured1.png",
      title: "Instant VM Protection",
      description:
        "Snapshots capture your virtual machine’s entire state, including configuration and data, so you can restore it in seconds if anything goes wrong.",
    },
    {
      image: "/featured2.png",
      title: "Effortless Management",
      description:
        "Take snapshots with just a few clicks, assign them to projects, pick the hosting location, and give them memorable names for perfect organization.",
    },
    {
      image: "/featured3.png",
      title: "Build, monitor, and secure your apps for less",
      description:
        "Choose flexible hourly billing, review costs upfront, and confirm your snapshot with confidence — no surprises, just peace of mind.",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto ">
        <div className="md:text-center xl:pt-24 pt-12 xl:px-0 px-6">
          <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-700">
            Snap, Restore, Protect
          </p>
          <p className="md:text-lg text text-gray-600 mt-4 max-w-5xl mx-auto  ">
            Protect your virtual machines instantly by capturing their full
            state configuration, data, and settings and restore them in seconds
            whenever needed. Snapshots make managing your VMs effortless,
           
          </p>
        </div>

        {/* feature card section */}
        <div className="flex flex-col xl:flex-row gap-6 justify-center items-stretch xl:py-12 py-8">
          {cards.map((card, index) => (
            <div key={index} className="flex-1 xl:px-0 px-6">
              <FeaturedCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white xl:py-36 xl:px-0 md:py-16 py-12 px-6">
        <div className="max-w-7xl mx-auto inset-0 xl:flex justify-between z-10 items-center">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
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
              $0.06<span className="md:text-lg text-base text-gray-600 font-normal"> /month</span>
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
      <div className="max-w-7xl mx-auto xl:py-24 md:py-16 py-8 px-6">
        <GetStartedCard />
      </div>
    </div>
  );
}
