import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function NetworkPricingPage() {
  const privateNetworkData = [
    {
      id: "1",
      title: "Basic Network",
      price: "5",
      subTitle: "Secure internal communication",
      desc: [
        "Private IP addresses for each VM",
        "Supports up to 5 VMs",
        "Internal traffic is isolated from the public internet",
        "Basic monitoring and logging",
      ],
    },
    {
      id: "2",
      title: "Team Network",
      price: "15",
      subTitle: "Optimized for small teams",
      desc: [
        "Supports up to 20 VMs",
        "Custom subnet configuration",
        "Enhanced traffic monitoring",
        "Secure internal DNS resolution",
      ],
    },
    {
      id: "3",
      title: "Enterprise Network",
      price: "49",
      subTitle: "For large organizations",
      desc: [
        "Unlimited VM connections",
        "Advanced routing and firewall rules",
        "Private VPN connectivity",
        "Full monitoring, logging, and audit support",
      ],
    },
    {
      id: "4",
      title: "Advanced Network",
      price: "99",
      subTitle: "High-performance private networking",
      desc: [
        "Supports up to 50 VMs",
        "Low-latency connections for distributed apps",
        "Custom routing policies and VLAN support",
        "Priority support and monitoring",
      ],
    },
    {
      id: "5",
      title: "Global Network",
      price: "199",
      subTitle: "For multi-region deployments",
      desc: [
        "Connect VMs across multiple regions privately",
        "High-throughput and low-latency backbone",
        "Advanced network segmentation and security",
        "Dedicated account support and SLA",
      ],
    },
  ];

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
              {privateNetworkData.map((item) => (
                <PricingCard
                  key={item.id}
                  slug={item.id}
                  title={item.title}
                  price={item.price}
                  subTitle={item.subTitle}
                  desc={item.desc}
                  buttonLabel="Get Started"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
