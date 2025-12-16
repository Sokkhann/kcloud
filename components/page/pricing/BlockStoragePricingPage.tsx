"use client";

import HeroComponent from "@/components/HeroComponent";
import React, { useEffect, useState } from "react";
import { blockStorageColumns, PricingPlan } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { dataPlan } from "@/type/dataTypes";

export default function BlockStoragePricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/pricing/Block Storage`);
        const json = await res.json();

        // Mapping API response to display-ready PricingPlan
        const formattedPlans: PricingPlan[] = (json.data ?? []).map(
          (plan: dataPlan) => ({
            name: plan.name,
            slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",
            // Use formatted memory in GB if available
            memory:
              plan.attribute?.memory !== undefined
                ? `${(plan.attribute.memory / 1024).toFixed(1)} MB`
                : undefined,
            cpu:
              plan.attribute?.cpu !== undefined
                ? `${plan.attribute.cpu} GB`
                : undefined,
            storage:
              plan.attribute?.storage !== undefined
                ? `${plan.attribute.storage} GB`
                : "undefined",
            capacity:
              plan.attribute?.size !== undefined
                ? `${plan.attribute.size} GB`
                : "undefined",
            priceHour:
              plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
            priceMonth:
              plan.monthly_price !== undefined
                ? `$${plan.monthly_price}`
                : "$0",
            planCategory: plan.plan_category?.name ?? "N/A", // Plan Category
            displayName: plan.cloud_provider?.display_name ?? "Display Name",
            region: plan.plan_region?.region?.name ?? "Region",
            
          })
        );

        setPlans(formattedPlans);
        console.log("Respone data => ", formattedPlans);
      } catch (error) {
        console.error("Failed to load pricing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Private Network"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Block Storage
              </p>
              <p className="text-base text-gray-600">
                An IP Address is a unique identifier that allows your server or
                device to communicate on a network. It enables public access to
                your applications and secure internal connectivity between cloud
                resources. Used for hosting websites, APIs, and managing remote
                access.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable columns={blockStorageColumns("Block Storage")} data={plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
