import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function VNFPricingPage() {
  const vnfData = [
    {
      id: "1",
      title: "Firewall VNF",
      price: "49",
      subTitle: "Protect your network",
      desc: [
        "Software-based firewall, no hardware required",
        "Supports up to 1 Gbps throughput",
        "Intrusion detection and prevention",
        "Cloud and on-premise deployment",
      ],
    },
    {
      id: "2",
      title: "Intrusion Detection VNF",
      price: "59",
      subTitle: "Detect threats in real-time",
      desc: [
        "Monitors network traffic for suspicious activity",
        "Supports signature and anomaly-based detection",
        "Integrates with existing firewall VNFs",
        "Email and dashboard alerts",
      ],
    },
    {
      id: "3",
      title: "Router VNF",
      price: "39",
      subTitle: "Virtual routing made easy",
      desc: [
        "Full routing protocols support (BGP, OSPF, RIP)",
        "Dynamic route management",
        "Multi-tenant network segmentation",
        "Monitor and optimize traffic in real-time",
      ],
    },
    {
      id: "4",
      title: "WAN Optimization VNF",
      price: "79",
      subTitle: "Accelerate your wide-area network",
      desc: [
        "Reduces latency and improves throughput",
        "Data compression and deduplication",
        "Optimizes application performance across sites",
        "Supports multi-tenant environments",
      ],
    },
    {
      id: "5",
      title: "VPN Gateway VNF",
      price: "39",
      subTitle: "Secure remote connections",
      desc: [
        "Supports IPSec, SSL, and site-to-site VPNs",
        "High availability and failover support",
        "User and device authentication",
        "Integrates with existing network policies",
      ],
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="VNF Appliance"
        description="A VNF is a software-based network function that traditionally required specialized hardware. It runs on general-purpose servers or cloud infrastructure and performs tasks such as routing, firewalling, load balancing, or VPN services."
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className=" lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                VNF Appliance Price
              </p>
              <p className="text-base text-gray-600">
                VNF pricing depends on factors like throughput, number of
                instances, support level, and subscription period.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
              {vnfData.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
