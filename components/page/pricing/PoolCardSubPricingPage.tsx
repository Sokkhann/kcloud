"use client"

import HeroComponent from "@/components/HeroComponent";
import { PackageData } from "@/type/dataTypes";
import { vmColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";

interface PackageProps {
  plans: PackageData[]
}

export default function PoolCardSubPricingPage({ plans }: PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Pool Card Subscription"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Pool Card Subscription Price
              </p>
              <p className="text-base text-gray-600">
                Choose the plan that fits your team size and workload needs.
                From small team setups with a few VMs to enterprise-grade
                networks with multi-region support, each tier provides secure
                internal connectivity, advanced routing options, and monitoring
                to optimize your network performance.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable columns={vmColumns("Load Balancer")} data={plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
