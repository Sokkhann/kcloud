import React from "react";
import HeroComponent from "@/components/HeroComponent";
import GetStartedCard from "@/components/card/GetStartedCard";
import PricingCardV2 from "@/components/card/PricingCardV2";
import ScrollReveal from "@/components/animations/ScrolReveal";
import { PackageProps } from "@/type/dataTypes";

// additional data for pricing
const additionalPackages: PackageProps[] = [
  // compute
  {
    name: "Virtual Machine",
    category: "Compute",
    path: "/pricing/virtual-machine",
    description: "Scalable compute package providing high-performance virtual instances tailored to your workload."
  },
  {
    name: "Kubernetes",
    category: "Compute",
    path: "/pricing/kubernetes",
    description: "Managed orchestration service for streamlined deployment and scaling of containerized workloads."
  },
  // networking
  {
    name: "IP Address",
    category: "Networking",
    path: "/pricing/ip-address",
    description: "Networking package for provisioning and managing dedicated public and private IP resources."
  },
  {
    name: "Load Balancer",
    category: "Networking",
    path: "/pricing/load-balancer",
    description: "High-availability traffic management to balance workloads and scale your applications seamlessly."
  },
  {
    name: "VPC",
    category: "Networking",
    path: "/pricing/vpc",
    description: "Isolated cloud environment package for building secure, private virtual networks."
  },
  // storage
  {
    name: "Block Storage Snapshot",
    category: "Storage",
    path: "/pricing/block-storage-snapshot",
    description: "Point-in-time data protection package to ensure rapid recovery of your block storage volumes."
  },
  {
    name: "Block Storage",
    category: "Storage",
    path: "/pricing/block-storage",
    description: "High-performance SSD storage tier designed for low-latency and IOPS-intensive applications."
  },
  {
    name: "Virtual Machine Backup",
    category: "Storage",
    path: "/pricing/virtual-machine-backup",
    description: "Full-system image protection package designed to recover entire VM instances from data loss."
  },
];

export default async function PricingPage() {

  return (
    <div className="w-screen">
      {/* Hero section */}
      <HeroComponent
        showGetStarted
        showContactSales
        height="h-[600px]"
        image="/hero-bg.png"
        title="Power Up with the Right Plan"
        description="No hidden fees. No confusion. Just clear pricing that helps you move faster, achieve more, and focus on what truly matters — your success."
      />

      <div className="mt-26 max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          {/* name and description */}
          <div className="px-6 md:text-center">
            <p className="xl:text-4xl md:text-4xl text-2xl font-bold text-gray-700">Product Package</p>
            <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Our pricing is built to match your momentum. From startups to
              enterprises, get the performance, features, and support you need —
              all in one place.
            </p>
          </div>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
            {additionalPackages.map((item, index) => (
              <PricingCardV2 key={index} title={item.name} description={item.description} path={item.path} />
            ))}
          </div>
        </ScrollReveal>
        <div className="px-6 pb-16">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
