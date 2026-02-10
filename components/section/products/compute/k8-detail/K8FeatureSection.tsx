import React from "react";
import data from "@/data/dataCards.json";
import { Box, Share2, ShieldCheck, Zap } from "lucide-react";
import FeatureCardV2 from "@/components/card/FeatureCardV2";

const K8Features = [
    {
      title: "K8s as a Service",
      icon: Box,
      desc: "Deploy production-ready Kubernetes clusters instantly. Our KaaS offering removes the complexity of manual configuration, allowing you to focus on your applications."
    },
    {
      title: "CAPI Integration",
      icon: Share2,
      desc: "Leverage the CNCF-managed Cluster API for declarative, Kubernetes-style management. Enable true hybrid-cloud deployments with standardized configuration."
    },
    {
      title: "Agnostic Orchestration",
      icon: ShieldCheck,
      desc: "Decouple your workloads from specific virtualization platforms. Ensure consistent and predictable application behavior across any underlying infrastructure."
    },
    {
      title: "Native Cloud Stack",
      icon: Zap,
      desc: "Access a complete suite of enterprise features: Network-as-a-Service, automated resource accounting, and identity management out of the box."
    }
  ];
  
export default function K8FeatureSection() {

  return (
    <section className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
      <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
          Key Features
        </p>
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          Flexible and powerful computing resources to run your workloads
          efficiently. Scale CPU, memory, and storage as needed. Ideal for
          applications, services, and containerized workloads. Reliable, high
          performance, and ready for any demand.
        </p>
      </div>

      {/* feature card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
        {K8Features.map((card, index) => (
          <FeatureCardV2
            key={index}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </section>
  );
}
