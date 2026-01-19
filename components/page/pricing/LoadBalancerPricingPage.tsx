"use client";

import HeroComponent from "@/components/HeroComponent";
import { lbColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { PackageData } from "@/type/dataTypes";
import VirtualRouterTablePriceSection from "@/components/section/pricing/virtual-router/VirtualRouterTablePriceSection";
import QuestionCard from "@/components/card/QuestionCard";

interface PackageProps {
  plans: PackageData[]
}

const loadBalancerFaqs = [
  {
    question: "What is a GCX Load Balancer?",
    answer: "It is a service that distributes incoming traffic across multiple Virtual Machines. This ensures your website stays online even if one server fails, making your infrastructure more secure and reliable."
  },
  {
    question: "Why use a local Load Balancer instead of a global one?",
    answer: "A local Load Balancer in Cambodia processes requests faster by reducing the distance data travels. This results in nearly instant page loads for your Cambodian customers."
  },
  {
    question: "Does the Load Balancer support SSL/HTTPS?",
    answer: "Yes. You can easily upload your SSL certificates to our Load Balancer. It handles the 'SSL Offloading,' making it easier for your web servers to focus on processing data."
  },
  {
    question: "How does the 'Health Check' feature work?",
    answer: "The Load Balancer constantly monitors your servers. If a server becomes unresponsive, it automatically stops sending traffic to it until it is healthy again. This is the easier way to prevent downtime."
  },
  {
    question: "Can I use one Load Balancer for multiple apps?",
    answer: "Yes, using 'Rule-based routing,' you can direct traffic to different backend groups based on the URL. This makes managing complex environments much easier."
  },
  {
    question: "How is Load Balancer pricing calculated?",
    answer: "GCX offers simple pricing based on the type of Load Balancer (Layer 4 or Layer 7) and the amount of data processed. No hidden fees, just transparent local pricing."
  }
];

export default function LoadBalancerPricingPage({ plans }: PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Load Balancer"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Load Balancer Price
              </p>
              <p className="text-base text-gray-600 max-w-5xl">
                Choose the plan that fits your team size and workload needs.
                From small team setups with a few VMs to enterprise-grade
                networks with multi-region support, each tier provides secure
                internal connectivity, advanced routing options, and monitoring
                to optimize your network performance.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable columns={lbColumns("load-balancer")} data={plans} />
            </div>

            <VirtualRouterTablePriceSection />

            <QuestionCard faqData={loadBalancerFaqs} />

          </div>
        </div>
      </div>
    </div>
  );
}
