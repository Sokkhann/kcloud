"use client"

import React, { useState } from "react";
import HeroComponent from "@/components/HeroComponent";
import { PackageData } from "@/type/dataTypes";
import { columns, vmColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import VirtualMachineTablePriceSection from "@/components/section/pricing/virtual-machine/VirtualMachineTablePriceSection";

interface PackageProps {
  plans: PackageData[]
}

export default function VirtualMachinePricingPage({ plans }: PackageProps) {

  const tabs = ["General", "Optimized"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="w-screen">
      {/* Hero section */}
      <HeroComponent
        showGetStarted
        showContactSales
        height="h-[600px]"
        image="/hero-bg.png"
        title="Power Up with the Right Plan"
        description="No hidden fees. No confusion. Just clear pricing that helps you move faster, achieve more, and focus on what truly matters — your success."
      />

      <div className="w-screen mt-10">
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className=" lg:mx-4 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Virtual Machine Price
              </p>
              <p className="text-base text-gray-600">
                Always know what you&apos;ll pay with monthly caps and flat
                pricing across all data centers.
              </p>
            </div>

            {/* Basic VM */}
            {/* <div className="px-6">
              <p className="xl:text-2xl text-xl text-gray-700 font-semibold mb-2">
                Basic Virtual Machine
              </p>
              <p className="text-gray-600">
                Experience the power, flexibility, and reliability of our
                cutting-edge Virtual Machines (VMs). Designed for developers,
                startups, and enterprises, our VMs allow you to run applications,
                host websites, perform testing, or manage workloads in a secure
                and scalable cloud environment.
              </p>
            </div> */}

            {/* <div className="px-6 space-y-6">
              <div className="mt-6 flex gap-4 items-center ">
                <p className="font-bold text-gcxPrimary">General Compute</p>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-full font-semibold transition
              ${activeTab === tab
                        ? "bg-gcxPrimary text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div>
                {activeTab === "General" && (
                  <div className="px-4 lg:px-8 md:px-8">
                    <DataTable
                      columns={vmColumns("virtual-machines")}
                      data={plans}
                    />
                  </div>
                )}
                {activeTab === "Optimized" && (
                  <div className="px-4 lg:px-8 md:px-8">
                    <DataTable
                      columns={vmColumns("virtual-machines")}
                      data={plans}
                    />
                  </div>
                )}
              </div>
            </div> */}

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable
                columns={vmColumns("virtual-machines")}
                data={plans}
              />
            </div>

            <VirtualMachineTablePriceSection />
          </div>
        </div>
      </div>
    </div>
  );
}
