"use client"

import React from "react";
import HeroComponent from "@/components/HeroComponent";
import { PackageData } from "@/type/dataTypes";
import { vmRouterColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";

interface PackageProps {
  plans: PackageData[]
}

export default function VirtualMachinePricingPage({ plans }: PackageProps) {

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
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className=" lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Virtual Router Price
              </p>
              <p className="text-base text-gray-600">
                Always know what you&apos;ll pay with monthly caps and flat
                pricing across all data centers.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable
                columns={vmRouterColumns("Virtual Router")}
                data={plans}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
