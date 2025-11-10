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

export interface StoragePrice {
  value: string;
  label: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export default function AffinityGroupLayout() {
  const cards = [
    {
      image: "/featured1.png",
      title: "Maximize Performance",
      description:
        "Affinity rules ensure interdependent VMs are co-located on the same host, which eliminates network latency and guarantees peak application speed.",
    },
    {
      image: "/featured2.png",
      title: "Ensure Fault Tolerance",
      description:
        "Anti-Affinity rules strategically separate redundant services across different hosts, preventing any single hardware failure from causing a total service disruption.",
    },
     {
      image: "/featured1.png",
      title: "Optimize Infrastructure",
      description:
        "The strategic placement controls spread heavy workloads evenly across the cloud, avoiding resource bottlenecks and ensuring optimal utilization of all physical hosts.",
    },

  ];
  const features = [
    {
      icon: <Cloud size={22} />,
      title: "Affinity Placement",
      description:
        "Dictates the mandatory clustering of selected VMs onto the same physical host, delivering the tangible benefit of near-zero network latency essential for hyper-accelerated communication between tightly integrated application components.",
    },
    {
      icon: <Shield size={22} />,
      title: "Anti-Affinity Placement",
      description:
        "Enforces the strategic dispersal of selected VMs across distinct physical hosts, delivering the essential benefit of ironclad high availability by isolating redundant services from single points of physical failure.",
    },
    {
      icon: <Building size={22} />,
      title: "Hard Rules",
      description:
        "The policy represents a non-negotiable deployment commitment—if the stringent placement criteria cannot be met, the provisioning request is halted—making it the ultimate lever for guaranteed placement required by critical compliance or mission-critical HA mandates.",
    },
    {
      icon: <Zap size={22} />,
      title: "Soft Rules",
      description:
        "The policy establishes an optimal placement preference that the orchestrator diligently pursues, yet allows for successful deployment if the preference is unattainable, ensuring intelligent deployment flexibility without sacrificing the integrity of the provisioning process.",
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
    const newPrice = blockStoragePricing.find(
      (item) => item.value === storageValue
    );
    if (newPrice) {
      setSelectedPrice(newPrice);
    }
  };

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="max-w-7xl mx-auto ">
          <div className="md:text-center xl:pt-24 pt-12 xl:px-0 px-6 ">
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-700 ">
              What We Offer
            </p>
            <p className="md:text-lg text-base text-gray-600 xl:mt-4 mt-2 ">
              Our Affinity Group service allows you to strategically define
              relationships between your VMs, ensuring your infrastructure meets
              your application's unique needs.
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

      <div className="bg-white xl:px-0 md:py-16 py-12 px-6">
        <div className="max-w-7xl mx-auto ">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              Benefits of Utilizing Affinity Groups{" "}
            </p>
            <p className="md:text-lg text-base text-gray-700 mt-4 ">
              Affinity Groups are more than just a configuration setting; they
              are a critical tool that directly translates into measurable
              improvements for your applications and operational efficiency.
            </p>

            {/* feature card section */}
            <div className="flex flex-col xl:flex-row gap-6 justify-center items-stretch xl:pt-12 pt-8">
              {cards.map((card, index) => (
                <div key={index} className="flex-1 xl:px-0 px-6">
                  <FeaturedCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto xl:py-24 md:py-16 py-8 px-6">
        <GetStartedCard />
      </div>
    </div>
  );
}
