"use client";
import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import { ArrowRight } from "lucide-react";
import BenefitListCard from "../card/BenefitListCard";
import Link from "next/link";
import data from "@/data/dataCards.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";

export default function BackupLayout() {
  const featureCards = data.backupFeatureDetailCards ?? []
  const features: IconCardProps[] = featureCards.map(
      (card) => ({
        ...card,
        icon: getReactIcon(card.icon),
      })
    );

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto py-16 md:py-32 lg:py-32">
          <div className="text-center px-4 md:px-8 lg:px-8">
            <p className="lg:text-4xl md:text-4xl text-2xl  font-bold text-gray-700">
              Automated Backups: Your Hands-Off Safety Net
            </p>
            <p className="md:text-lg text-base text-gray-600 mt-4 max-w-5xl mx-auto">
              GCX Backups provides set-it-and-forget-it protection for your
              entire server. Get recurring, full-server image backups
              automatically, ensuring an immediate restoration point when
              failure strikes. Simple pricing—a flat percentage of your VM
              cost—makes disaster recovery easy and budget-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 xl:py-12 py-8 px-4 lg:px-8 md:px-8">
            {features.map((feature, index) => (
              <div key={index} className="">
                <BenefitListCard items={[feature]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white mb-16 lg:mb-32 md:mb-32">
        <div className="max-w-7xl mx-auto inset-0 xl:flex justify-between z-10 items-center  py-16 lg:py-32 md:py-32 px-4 lg:px-8 md:px-8">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              Pricing
              <span className="ml-1 py-1 px-2 bg-gcxPrimary text-white  md:text-base text-sm  font-medium ">
                Backup
              </span>
            </p>
            <p className="xl:text-xl text-base text- text-gray-700 mt-4 max-w-2xl">
              GCX Backups are priced simply as a small percentage of your compute
              instance monthly cost, making budgeting straightforward.
            </p>
         
            <div className="mt-6 text-lg hidden xl:block">
              <Link
                href="/get-started"
                className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
              >
                Add Backup
                <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
              </Link>
            </div>
          </div>

          <div className="flex gap-12 mt-4">
            <div className="mb-6">
              <p className="mb-3 text-gray-600 font-bold xl:text-lg text-base">
                Weekly Backup
              </p>
              <div className="mt-4">
                <p className="xl:text-6xl md:text-5xl text-4xl font-bold text-gcxPrimary">20%</p>
                <p className="mb-3 text-gray-600 md:text-base text-sm">of your VM cost</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="mb-3 text-gray-600 font-bold xl:text-lg text-base">
                Daily Backup
              </p>
              <div className="mt-4">
                <p className="xl:text-6xl md:text-5xl text-4xl font-bold text-gcxPrimary">30%</p>
                <p className="mb-3 text-gray-600 md:text-base text-sm">of your VM cost</p>
              </div>
            </div>
            <div className=" md:text-lg text-base xl:hidden block">
           
          </div>
          
          </div>

           <Link
              href="/get-started"
              className="group text-gcxPrimary font-bold  rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
            >
              Add Backup
              <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
            </Link>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto xl:py-24 md:py-16 py-8 px-6">
        <GetStartedCard />
      </div>
    </div>
  );
}
