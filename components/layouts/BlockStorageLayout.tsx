"use client";
import React, { useState } from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import BenefitListCard from "../card/BenefitListCard";
import data from "@/data/dataCards.json";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconCardProps, ImgTitleDescCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";

export interface StoragePrice {
  value: string;
  label: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export default function BlockStorageLayout() {

  // data of core functions
  const cards: ImgTitleDescCardProps[] = data.blockStorageCoreFunctionCards ?? [];

  // data of features
  const featureCards = data.blockStorageFeatureDetailCards ?? [];
  const features: IconCardProps[] = featureCards.map(
    (card) => ({
      ...card,
      icon: getReactIcon(card.icon),
    })
  );

  // data of pricing
  const blockStoragePricing: StoragePrice[] = data.blockStoragePricingCards ?? [];

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
      <div className="max-w-7xl mx-auto ">
        <div className="md:text-center xl:pt-24 pt-12 xl:px-0 px-6 ">
          <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-700 ">
            Core Functions
          </p>
          <p className="md:text-lg text-base text-gray-600 xl:mt-4 mt-2 ">
            GCX block storage delivers high-performance, low-latency persistent
            block storage designed to be the foundational engine for your most
            demanding workloads. This capability is essential for:
          </p>
        </div>

        {/* feature card section */}
        <div className="flex flex-col xl:flex-row gap-6 justify-center items-stretch xl:pt-12 pt-8">
          {cards.map((card, index) => (
            <div key={index} className="flex-1 xl:px-0 px-6">
              <FeaturedCard
                image={card.image}
                title={card.title}
                description={card.desc}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto ">
          <div className="md:text-center xl:pt-24 pt-8 xl:px-0 px-6 ">
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-700 text-wrap ">
              Scalable, Reliable, and Secure Data Access
            </p>
            <p className="md:text-lg text-base text-gray-600 xl:mt-4 mt-2">
              Our block storage is engineered for the three pillars of modern
              cloud computing:
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
        <div className="max-w-7xl mx-auto inset-0 md:flex justify-between z-10 items-center">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              Pricing{" "}
              <span className="py-1 px-2 bg-gcxPrimary text-white md:text-base text-sm font-medium ">
                BlockStorage
              </span>
            </p>
            <p className="md:text-lg text-base text-gray-700 mt-4 max-w-2xl">
              You are billed solely on the GiB you have right here, right now.
              No hidden fees, no complex tiers—just simple, predictable storage
              costs.
            </p>

            <div className="mt-6 font-bold text-gcxPrimary ">
              {/* 3. Add onChange handler to Select and use the initial/default value */}
              <Select
                onValueChange={handleStorageChange}
                defaultValue={selectedPrice.value} // Set the default selected item
              >
                <SelectTrigger className="max-w-[380px]">
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
          </div>

          <div>
            <p className="md:pt-0 pt-6 xl:text-lg text-base font-medium text-gray-500">
              Starting at
            </p>
            <div className="flex gap-12">
              <div className="mb-6">
                <div className="mt-4">
                  {/* 5. Use state value for hourly price */}
                  <p className="xl:text-6xl md:text-5xl text-4xl font-bold text-gcxPrimary">
                    ${selectedPrice.pricePerHour}
                  </p>
                  <p className="mb-3 text-gray-600 text-end">per hour</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="mt-4">
                  {/* 6. Use state value for monthly price */}
                  <p className="xl:text-6xl md:text-5xl text-4xl font-bold text-gcxPrimary">
                    ${selectedPrice.pricePerMonth}
                  </p>
                  <p className="mb-3 text-gray-600 text-end md:text-base text-sm">
                    per month
                  </p>
                </div>
              </div>
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
