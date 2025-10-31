"use client";

import React from "react";
import HeroComponent from "@/components/HeroComponent";
import { DataTable } from "./price-table/VMTable";
import { storageColumns, StoragePlan } from "./price-table/StorageColumn";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export default function StoragePage() {
  const data: StoragePlan[] = [
    {
      slug: "storage-1gib",
      storage: "1 GiB",
      priceHour: "0.01",
      priceMonth: "0.10",
    },
    {
      slug: "storage-10gib",
      storage: "10 GiB",
      priceHour: "0.09",
      priceMonth: "0.90",
    },
    {
      slug: "storage-100gib",
      storage: "100 GiB",
      priceHour: "0.75",
      priceMonth: "7.50",
    },
    {
      slug: "storage-1tb",
      storage: "1 TB",
      priceHour: "6.50",
      priceMonth: "65.00",
    },
  ];

  return (
    <div className="w-screen">
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Block Storage"
        description="GCX block storage delivers high-performance, low-latency persistent block storage designed to be the foundational engine for your most demanding workloads. This capability is essential for:"
      />
      <div className=" xl:py-32 py-24  px-6 ">
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

          {/* Basic VM */}
          <div>
            <p className="xl:text-3xl md:text-2xl text-xl font-bold  mb-2 ">
              Block Storage Price
            </p>
            <p className="md:text-lg text-base">
              Always know what you&apos;ll pay with monthly caps and flat pricing
              across all data centers.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[400px]">
              <DataTable columns={storageColumns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
