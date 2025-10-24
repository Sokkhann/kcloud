"use client";
import { pricingData } from "@/data/productPricing";
import React, { useState } from "react";
import HeroComponent from "@/components/HeroComponent";
import { DataTable } from "./price-table/VMTable";
import { columns, PricingPlan } from "./price-table/VMColumn";

interface VMProps {
  param: { slug: string };
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export default function PlanPage({ param }: VMProps) {
  const { slug } = param;
  const tabs = ["Regular", "Premium"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const selectedProduct = pricingData.find((p) => p.id === slug);

  const data: PricingPlan[] = [
    {
      slug: "basic-plan",
      memory: "2 GB",
      vcpu: "1 vCPU",
      transfer: "1 TB",
      ssd: "25 GB",
      priceHour: "$0.007",
      priceMonth: "$5",
    },
    {
      slug: "standard-plan",
      memory: "4 GB",
      vcpu: "2 vCPU",
      transfer: "2 TB",
      ssd: "50 GB",
      priceHour: "$0.015",
      priceMonth: "$10",
    },
    {
      slug: "pro-plan",
      memory: "8 GB",
      vcpu: "4 vCPU",
      transfer: "4 TB",
      ssd: "100 GB",
      priceHour: "$0.03",
      priceMonth: "$20",
    },
    {
      slug: "business-plan",
      memory: "16 GB",
      vcpu: "6 vCPU",
      transfer: "8 TB",
      ssd: "200 GB",
      priceHour: "$0.06",
      priceMonth: "$40",
    },
    {
      slug: "enterprise-plan",
      memory: "32 GB",
      vcpu: "8 vCPU",
      transfer: "10 TB",
      ssd: "400 GB",
      priceHour: "$0.12",
      priceMonth: "$80",
    },
    {
      slug: "ultimate-plan",
      memory: "64 GB",
      vcpu: "16 vCPU",
      transfer: "15 TB",
      ssd: "800 GB",
      priceHour: "$0.25",
      priceMonth: "$160",
    },
  ];

  return (
    <div>
      <div className="mt-10">
        {/* Hero section */}
        <HeroComponent
          height="h-[600px]"
          image="/hero-bg.png"
          title="Virtual Machine"
          description="Global Cloud Exchange Company Limited (GCX), a Cambodia-registered company, is one of the country’s first “Carrier Neutral” Tier 3 Data Center built to meet the ever-growing needs of institutional and high-level clients in Cambodia’s emerging economy."
        />
      </div>
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* {selectedProduct?.plans?.map((item) => (
            <PricingCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              subTitle={item.subTitle}
              desc={item.desc}
              buttonLabel="Choose Plan"
            />
          ))} */}

          <div>
            <p className="text-3xl font-semibold">Virtual Machine</p>
            <p>
              Experience the power, flexibility, and reliability of our
              cutting-edge Virtual Machines (VMs). Designed for developers,
              startups, and enterprises, our VMs allow you to run applications,
              host websites, perform testing, or manage workloads in a secure
              and scalable cloud environment.
            </p>
          </div>

          {/* Basic VM */}
          <div>
            <p className="text-2xl font-semibold">Basic Virtual Machine</p>
            <p>
              Experience the power, flexibility, and reliability of our
              cutting-edge Virtual Machines (VMs). Designed for developers,
              startups, and enterprises, our VMs allow you to run applications,
              host websites, perform testing, or manage workloads in a secure
              and scalable cloud environment.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <p className="font-bold text-gcxPrimary">CPU Options</p>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full font-semibold transition
              ${
                activeTab === tab
                  ? "bg-gcxPrimary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Tab content */}
          <div>
            {activeTab === "Regular" && (
              <DataTable columns={columns} data={data} />
            )}
            {activeTab === "Premium" && (
              <DataTable columns={columns} data={data} />
            )}
          </div>

          {/* Basic VM */}
          <div>
            <p className="text-2xl font-semibold">CPU-Optimized Virtual Machine</p>
            <p>
              Maximize your computing power with our CPU-Optimized Virtual Machines — designed for workloads that demand high processing performance and low latency. Perfect for applications such as data analytics, high-performance computing (HPC), software compilation, machine learning inference, or real-time simulations, these VMs give you the processing capability you need without compromise.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <p className="font-bold text-gcxPrimary">CPU Options</p>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full font-semibold transition
              ${
                activeTab === tab
                  ? "bg-gcxPrimary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Tab content */}
          <div>
            {activeTab === "Regular" && (
              <DataTable columns={columns} data={data} />
            )}
            {activeTab === "Premium" && (
              <DataTable columns={columns} data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
