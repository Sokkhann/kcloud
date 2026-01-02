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
import BlockStorageFeatureSection from "../section/block-storage-dotail/BlockStorageFeatureSection";
import BlockStorageUseCaseSection from "../section/block-storage-dotail/BlockStorageUseCaseSection";

export interface StoragePrice {
  value: string;
  label: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export default function BlockStorageLayout() {
  // data of core functions
  const cards: ImgTitleDescCardProps[] =
    data.blockStorageCoreFunctionCards ?? [];

  // data of features
  const featureCards = data.blockStorageFeatureDetailCards ?? [];
  const features: IconCardProps[] = featureCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  // data of pricing
  const blockStoragePricing: StoragePrice[] =
    data.blockStoragePricingCards ?? [];

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
    <div className="bg-gray-100">
      {/* feature card section */}
      <BlockStorageFeatureSection />

      {/* use case secton */}
      <BlockStorageUseCaseSection/>

      {/* <div className="bg-white mb-16 lg:mb-32 md:mb-32">
        <div className="max-w-7xl mx-auto inset-0 md:flex justify-between z-10 items-center  py-16 lg:py-32 md:py-32 px-4 lg:px-8 md:px-8">
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
              <Select
                onValueChange={handleStorageChange}
                defaultValue={selectedPrice.value} // Set the default selected item
              >
                <SelectTrigger className="max-w-[380px]">
                  <SelectValue placeholder="Storage" />
                </SelectTrigger>
                <SelectContent>
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
                  <p className="xl:text-6xl md:text-5xl text-4xl font-bold text-gcxPrimary">
                    ${selectedPrice.pricePerHour}
                  </p>
                  <p className="mb-3 text-gray-600 text-end">per hour</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="mt-4">
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
      </div> */}

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
