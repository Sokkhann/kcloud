"use client";
import React from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import { Building, Cloud, Shield, Zap } from "lucide-react";
import BenefitListCard from "../card/BenefitListCard";
import { DataTable } from "../page/pricing/price-table/VMTable";
import {
  storageColumns,
  StoragePlan,
} from "../page/pricing/price-table/StorageColumn";

export default function BlockStorageLayout() {
  const cards = [
    {
      image: "/featured1.png",
      title: "Virtual Machines",
      description:
        "Giving your VMs the speed and persistence of a local NVMe drive, but with the scalability and resilience of the cloud.",
    },
    {
      image: "/featured2.png",
      title: "Containerized Applications ",
      description:
        "Providing reliable, stateful persistent volumes that follow your containers, ensuring data integrity even during scaling or pod migration.",
    },
  ];
  const features = [
    {
      icon: <Cloud size={22} />,
      title: "Dedicated Performance",
      description:
        "Achieve the lowest latency and highest throughput for your applications. Guarantee up to IOPS and GB/s throughput with dedicated volumes, ensuring your databases and transaction systems never suffer from noisy neighbor issues",
    },
    {
      icon: <Shield size={22} />,
      title: "Elastic Scalability",
      description:
        "Provision from 1 GB up to 16 TB and scale your capacity instantly and without downtime. Dynamically grow or shrink volumes to perfectly match your workload demands and budget.",
    },
    {
      icon: <Building size={22} />,
      title: "Enterprise Reliability",
      description:
        "Trust your critical data to 99.999% durability. Data is automatically replicated across multiple devices, offering built-in fault tolerance and high availability to keep your applications running continuously.",
    },
    {
      icon: <Zap size={22} />,
      title: "Zero-Trust Security",
      description:
        "Protect your assets with mandatory AES-256 encryption for data both at rest and in transit. Control access with granular IAM policies, ensuring complete security and helping you meet compliance requirements.",
    },
  ];

  const data: StoragePlan[] = [
    {
      slug: "1gib-plan",
      storage: "1 GiB",
      priceHour: "-",
      priceMonth: "$0.10",
    },
    {
      slug: "10gib-plan",
      storage: "10 GiB",
      priceHour: "$0.001",
      priceMonth: "$1.00",
    },
    {
      slug: "100gib-plan",
      storage: "100 GiB",
      priceHour: "$0.0149",
      priceMonth: "$10.00",
    },
    {
      slug: "500gib-plan",
      storage: "500 GiB",
      priceHour: "$0.0744",
      priceMonth: "$50.00",
    },
    {
      slug: "1000gib-plan",
      storage: "1000 GiB",
      priceHour: "$0.1488",
      priceMonth: "$100.00",
    },
  ];
  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center pt-24">
          <p className="text-4xl font-bold text-gray-700">Core Functions</p>
          <p className="text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
            GCX block storage delivers high-performance, low-latency persistent
            block storage designed to be the foundational engine for your most
            demanding workloads. This capability is essential for:
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

      <div className="">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center pt-24">
            <p className="text-4xl font-bold text-gray-700">
              Scalable, Reliable, and Secure Data Access
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
              Our block storage is engineered for the three pillars of modern
              cloud computing:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-12  ">
            {features.map((feature, index) => (
              <div key={index}>
                <BenefitListCard items={[feature]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center pt-24">
            <p className="text-4xl font-bold text-gray-700">Pricing</p>
            {/* <p className="text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
              Our block storage is engineered for the three pillars of modern
              cloud computing:
            </p> */}
          </div>
          <div className="pt-12 pb-24">
            <DataTable columns={storageColumns} data={data} />
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
