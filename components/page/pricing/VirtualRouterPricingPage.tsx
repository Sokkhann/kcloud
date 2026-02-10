"use client";

import { vmRouterColumns } from "./price-table/VMColumn";
import HeroComponent from "@/components/HeroComponent";
import { DataTable } from "./price-table/VMTable";
import { PackageData } from "@/type/dataTypes";

interface PackageProps {
  plans: PackageData[]
}

export default function VirtualRouterPricingPage({ plans }: PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Kubernetes Cluster"
        description="GCX block storage delivers high-performance, low-latency persistent block storage designed to be the foundational engine for your most demanding workloads. This capability is essential for:"
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
