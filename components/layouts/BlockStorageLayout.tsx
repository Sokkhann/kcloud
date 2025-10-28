"use client";
import React, { useState } from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import { Building, Cloud, Shield, Zap } from "lucide-react";
import BenefitListCard from "../card/BenefitListCard";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


interface StoragePrice {
  value: string;
  label: string;
  pricePerHour: string;
  pricePerMonth: string;
}

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

  const blockStoragePricing: StoragePrice[] = [
    {
      value: "1gb",
      label: "Storage 1 GiB",
      pricePerHour: "0.01",
      pricePerMonth: "0.10",
    },
    {
      value: "10gb",
      label: "Storage 10 GiB",
      pricePerHour: "0.09",
      pricePerMonth: "0.90",
    },
    {
      value: "100gb",
      label: "Storage 100 GiB",
      pricePerHour: "0.75",
      pricePerMonth: "7.50",
    },
    {
      value: "1tb",
      label: "Storage 1 TB",
      pricePerHour: "6.50",
      pricePerMonth: "65.00",
    },
  ];

  const [selectedPrice, setSelectedPrice] = useState(blockStoragePricing[0]);

  const handleStorageChange = (storageValue: string) => {
    const newPrice = blockStoragePricing.find(item => item.value === storageValue);
    if (newPrice) {
      setSelectedPrice(newPrice);
    }
  };

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

      <div className="bg-white py-36">
      <div className="max-w-7xl mx-auto inset-0 flex justify-between z-10 items-center">
        <div>
          <p className="text-4xl font-bold text-gray-800">
            Pricing{" "}
            <span className="py-1 px-2 bg-gcxPrimary text-white text-base font-medium ">
              BlockStorage
            </span>
          </p>
          <p className="text-xl text-gray-700 mt-4 max-w-2xl">
            You are billed solely on the GiB you have right here, right now.
            No hidden fees, no complex tiers—just simple, predictable storage
            costs.
          </p>

          <div className="mt-6 font-bold text-gcxPrimary l">
            {/* 3. Add onChange handler to Select and use the initial/default value */}
            <Select 
              onValueChange={handleStorageChange} 
              defaultValue={selectedPrice.value} // Set the default selected item
               
            >
              <SelectTrigger className="w-[380px]">
                {/* Display the current label of the selected item */}
                <SelectValue placeholder="Storage" />
              </SelectTrigger>
              <SelectContent>
                {/* 4. Map the pricing data to dynamically create SelectItems */}
                {blockStoragePricing.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bottom Section */}
          {/* <div className="mt-6 text-lg">
            <Link
              href="/get-started"
              className="group text-gcxPrimary font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] inline-flex items-center"
            >
              Add Storage
              <ArrowRight className="ml-0.5 transition-all duration-300 group-hover:ml-2" />
            </Link>
          </div> */}
        </div>

        <div>
          <p className="text-lg font-medium text-gray-500">Starting at</p>
          <div className="flex gap-12">
            <div className="mb-6">
              <div className="mt-4">
                {/* 5. Use state value for hourly price */}
                <p className="text-6xl font-bold text-gcxPrimary">${selectedPrice.pricePerHour}</p>
                <p className="mb-3 text-gray-600 text-end">per hour</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="mt-4">
                {/* 6. Use state value for monthly price */}
                <p className="text-6xl font-bold text-gcxPrimary">${selectedPrice.pricePerMonth}</p>
                <p className="mb-3 text-gray-600 text-end ">per month</p>
              </div>
            </div>
          </div>
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
