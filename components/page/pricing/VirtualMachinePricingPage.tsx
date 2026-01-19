"use client"

import React, { useEffect, useState } from "react";
import HeroComponent from "@/components/HeroComponent";
import { PackageData } from "@/type/dataTypes";
import { vmColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import VirtualMachineTablePriceSection from "@/components/section/pricing/virtual-machine/VirtualMachineTablePriceSection";
import QuestionCard from "@/components/card/QuestionCard";

interface PackageProps {
  planProxmox: PackageData[],
  planCloudstackGeneralCompute: PackageData[],
  planCloudstackComputeOptimized: PackageData[],
}

const faqData = [
  {
    question: "Why choose a local cloud like GCX?",
    answer: "By hosting locally in Cambodia, you get faster speeds (low latency) and ensure your data stays secure within national borders."
  },
  {
    question: "How fast can I deploy a server?",
    answer: "With our optimized infrastructure, you can launch a new instance in under 60 seconds, making your deployment easier and more efficient."
  },
  {
    question: "Is my data secure with GCX?",
    answer: "Yes. We use enterprise-grade encryption and local Tier-3 data centers to ensure your business remains secure and online 24/7."
  },
  {
    question: "Can I scale my resources easily?",
    answer: "Absolutely. GCX allows you to upgrade your CPU, RAM, or Storage with a single click—an easier way to grow without downtime."
  },
  {
    question: "Do you provide local technical support?",
    answer: "Yes! Our team is right here in Cambodia. Being local means we offer faster resolution times in your own timezone."
  }
];

export default function VirtualMachinePricingPage({ planProxmox, planCloudstackGeneralCompute, planCloudstackComputeOptimized }: PackageProps) {
  const tabs = ["General", "Optimized"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // 1. State for page entry animation
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    setIsLoaded(true);

    // 2. Handle scrolling to section based on URL Hash (#proxmox or #cloudstack)
    const hash = window.location.hash;
    if (hash) {
      // Small timeout ensures the DOM has rendered before we try to scroll
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500); // Adjust timing based on your animation speed
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    // 3. Apply animation classes to the main wrapper
    <div className={`w-screen transition-all duration-1000 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>

      <HeroComponent
        showGetStarted
        showContactSales
        height="h-[600px]"
        image="/hero-bg.png"
        title="Power Up with the Right Plan"
        description="No hidden fees. No confusion. Just clear pricing..."
      />

      <div className="w-screen mt-10">
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">

            <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Virtual Machine Pricing
              </p>
              <p className="text-base text-gray-600 max-w-5xl">
                Deploy with confidence on your choice of Proxmox or CloudStack infrastructure. We provide a simplified billing experience with monthly price caps and consistent rates across all regions, ensuring your infrastructure costs remain stable even as your traffic grows.
              </p>
            </div>

            {/* Proxmox */}
            <section id="proxmox" className="scroll-mt-40">
              <div className="px-4 lg:px-8 md:px-8 pb-4">
                <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                  Proxmox Cloud Compute
                </p>
                <p className="text-gray-600 max-w-5xl">
                  Take full control of your infrastructure with Proxmox. Whether you need full hardware virtualization with KVM or lightweight isolated containers, our Proxmox nodes offer high-speed I/O and low-latency networking to keep your development pipeline moving fast.
                </p>
              </div>

              <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
                <DataTable
                  columns={vmColumns("virtual-machines")}
                  data={planProxmox}
                />
              </div>
            </section>

            {/* Cloudstack */}
            <section id="cloudstack" className="scroll-mt-40">
              <div className="px-4 lg:px-8 md:px-8">
                <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                  CloudStack Compute Instances
                </p>
                <p className="text-gray-600 max-w-5xl">
                  Experience low-latency performance and high-density computing. Built on the Apache CloudStack framework, our compute instances offer the flexibility to deploy and manage virtualized resources instantly, backed by a resilient architecture that grows with your business needs.              </p>
              </div>

              <div className="px-4 lg:px-8 md:px-8 space-y-6">
                <div className="mt-6 flex gap-4 items-center ">
                  <p className="font-bold text-gcxPrimary">Compute Offer</p>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-full font-semibold transition
              ${activeTab === tab
                          ? "bg-gcxPrimary text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div>
                  {activeTab === "General" && (
                    <div className="">
                      <DataTable
                        columns={vmColumns("virtual-machines")}
                        data={planCloudstackGeneralCompute}
                      />
                    </div>
                  )}
                  {activeTab === "Optimized" && (
                    <div className="">
                      <DataTable
                        columns={vmColumns("virtual-machines")}
                        data={planCloudstackComputeOptimized}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>

            <VirtualMachineTablePriceSection />
            <QuestionCard faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}
