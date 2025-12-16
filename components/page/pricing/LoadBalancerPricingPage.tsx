"use client";

import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React, { useEffect, useState } from "react";
import { lbColumns, PricingPlan } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { dataPlan } from "@/type/dataTypes";

export default function LoadBalancerPricingPage() {
  const loadBalancerData = [
    {
      id: "1",
      title: "Basic Load Balancer",
      price: "29",
      subTitle: "Perfect for small apps",
      desc: [
        "Distribute traffic across up to 3 servers",
        "Automatic health checks for backend servers",
        "HTTP/HTTPS support",
        "Email support",
      ],
    },
    {
      id: "2",
      title: "Developer Load Balancer",
      price: "59",
      subTitle: "For growing teams and projects",
      desc: [
        "Distribute traffic across up to 10 servers",
        "Custom routing rules and sticky sessions",
        "Advanced monitoring and analytics",
        "Priority email support",
      ],
    },
    {
      id: "3",
      title: "Enterprise Load Balancer",
      price: "129",
      subTitle: "High availability for critical apps",
      desc: [
        "Distribute traffic across unlimited servers",
        "Global load balancing for multi-region apps",
        "SSL offloading and DDoS protection",
        "24/7 dedicated support",
      ],
    },
  ];

  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/pricing/Load Balancer`);
        const json = await res.json();

        // Mapping API response to display-ready PricingPlan
        const formattedPlans: PricingPlan[] = (json.data ?? []).map(
          (plan: dataPlan) => ({
            name: plan.name,
            slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",
            // Use formatted memory in GB if available
            
            bandwidth:
              plan.cloud_provider_setup?.config?.bandwidth_threshold !== undefined
                ? `${plan.cloud_provider_setup?.config.bandwidth_threshold} GB`
                : undefined,
            priceHour:
              plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
            priceMonth:
              plan.monthly_price !== undefined
                ? `$${plan.monthly_price}`
                : "$0",
            cloudProvider: plan.cloud_provider?.display_name ?? "Cloud",
            region: plan.plan_region?.region?.name ?? "Region"
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
                Kubernetes Cluster Price
              </p>
              <p className="text-base text-gray-600">
                Choose the plan that fits your team size and workload needs.
                From small team setups with a few VMs to enterprise-grade
                networks with multi-region support, each tier provides secure
                internal connectivity, advanced routing options, and monitoring
                to optimize your network performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
              {loadBalancerData.map((item) => (
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
              <DataTable columns={lbColumns("Load Balancer")} data={plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
