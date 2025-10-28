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
        <div className="text-center pt-24">
          <p className="text-4xl font-bold text-gray-700">
            Snap, Restore, Protect
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
            Protect your virtual machines instantly by capturing their full
            state configuration, data, and settings and restore them in seconds
            whenever needed. Snapshots make managing your VMs effortless,
            ensuring your workloads are safe, organized, and always ready.
          </p>
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

      <div className="bg-white py-36">
        <div className="max-w-7xl mx-auto inset-0 flex justify-between z-10 items-center">
          <div>
            <p className="text-4xl font-bold text-gray-800">Pricing <span className="py-1 px-2 bg-gcxPrimary text-white text-base font-medium ">Snapshot</span></p>
            <p className="text-xl text-gray-700 mt-4 max-w-2xl">
              Easily secure your <b>instances</b> and <b>volumes</b> with
              automated monthly snapshots. Whether it&lsquo;s a system update or
              unexpected issue, your data stays safe and can be restored
              instantly with a single click.
            </p>
            {/* Bottom Section */}
            <div className="mt-6 text-lg">
              <Link
                href="/get-started"
                className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
              >
                Add Snapshot
                <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-gray-600">Starting at</p>
            <p className="text-6xl font-bold text-gcxPrimary">
              $0.06<span className="text-2xl">/month</span>
            </p>
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
