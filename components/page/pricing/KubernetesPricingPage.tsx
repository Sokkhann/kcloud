"use client";

import React, { useEffect, useState } from "react";
import PricingCard from "../../card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import { dataPlan } from "@/type/dataTypes";
import { k8Columns, PricingPlan } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";

export default function KubernetesPricingPage() {
  const pricingData = [
    {
      id: "1",
      title: "Starter",
      price: "9",
      subTitle: "Perfect for individuals",
      desc: [
        "Essential tools to get started quickly",
        "1 project and 1 user account",
        "Basic analytics dashboard",
        "Email support",
      ],
    },
    {
      id: "2",
      title: "Pro",
      price: "29",
      subTitle: "Ideal for growing teams",
      desc: [
        "Unlimited projects and users",
        "Team collaboration features",
        "Advanced analytics and reports",
        "Priority email support",
      ],
    },
    {
      id: "3",
      title: "Business",
      price: "79",
      subTitle: "For established businesses",
      desc: [
        "Dedicated workspace and admin controls",
        "Custom integrations and API access",
        "Advanced performance monitoring",
        "Phone and chat support",
      ],
    },
    {
      id: "4",
      title: "Ultimate",
      price: "149",
      subTitle: "All-in-one premium plan",
      desc: [
        "Everything in Business + Enterprise features",
        "Unlimited API calls and storage",
        "Advanced compliance and audit tools",
        "Full 24/7 global support",
      ],
    },
  ];

  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/pricing/Kubernetes`);
        const json = await res.json();

        // Mapping API response to display-ready PricingPlan
        const formattedPlans: PricingPlan[] = (json.data ?? []).map(
          (plan: dataPlan) => ({
            name: plan.name,
            slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",
            // Use formatted memory in GB if available
            bandwidth:
              plan.cloud_provider_setup?.config?.bandwidth_threshold !==
              undefined
                ? `${plan.cloud_provider_setup?.config.bandwidth_threshold} GB`
                : undefined,
            memory:
              plan.attribute?.memory !== undefined
                ? `${(plan.attribute.memory / 1024).toFixed(1)} MB`
                : undefined,
            cpu:
              plan.attribute?.cpu !== undefined
                ? `${plan.attribute.cpu} GB`
                : undefined,
            priceHour:
              plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
            priceMonth:
              plan.monthly_price !== undefined
                ? `$${plan.monthly_price}`
                : "$0",
            cloudProvider: plan.cloud_provider?.display_name ?? "Cloud",
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
        title="Kubernetes Cluster"
        description="GCX block storage delivers high-performance, low-latency persistent block storage designed to be the foundational engine for your most demanding workloads. This capability is essential for:"
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className=" lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Kubernetes Cluster Price
              </p>
              <p className="text-base text-gray-600">
                Always know what you&apos;ll pay with monthly caps and flat
                pricing across all data centers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
              {pricingData.map((item) => (
                <PricingCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  subTitle={item.subTitle}
                  desc={item.desc}
                  buttonLabel="Get Started"
                />
              ))}
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable columns={k8Columns("Kubernetes")} data={plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
