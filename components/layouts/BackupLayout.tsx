"use client";
import React from "react";
import GetStartedCard from "../card/GetStartedCard";
import { ArrowRight, Building, Cloud, Shield, Zap } from "lucide-react";
import BenefitListCard from "../card/BenefitListCard";
import Link from "next/link";

export default function BackupLayout() {
  const features = [
    {
      icon: <Cloud size={22} />,
      title: "Weekly, hands-off protection.",
      description:
        "Backups are taken automatically, typically once a week, during a configurable four-hour window to minimize performance impact.",
    },
    {
      icon: <Shield size={22} />,
      title: "Full server environment recovery.",
      description:
        "Restore your entire server image to a new instance in minutes, including the OS, data, and configuration files.",
    },
    {
      icon: <Building size={22} />,
      title: "Rolling 4-week history.",
      description:
        "Multiple restoration points are maintained (e.g., 4 or 7 rotating weekly backups). The oldest backup is automatically replaced by the newest.",
    },
    {
      icon: <Zap size={22} />,
      title: "Secure, isolated storage.",
      description:
        "Backup images are stored on resilient infrastructure and are encrypted at rest for security and compliance.",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto ">
          <div className="md:text-center xl:pt-24 pt-16 px-6">
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-700">
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

          <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 xl:py-12 py-8 ">
            {features.map((feature, index) => (
              <div key={index} className="xl:px-0 px-6">
                <BenefitListCard items={[feature]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white xl:py-36 xl:px-0 md:py-16 py-12 px-6">
        <div className="max-w-7xl mx-auto inset-0 xl:flex justify-between z-10 items-center">
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
