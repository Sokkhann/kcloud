import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function SnapshotPricingPage() {
const pricingData = [
    {
      id: "1",
      title: "Basic Snapshot",
      price: "0.05",
      subTitle: "Best for small projects",
      desc: [
        "Pay-as-you-go storage at $0.05 per GB per month",
        "Create and restore snapshots manually",
        "Store up to 5 snapshots per resource",
        "Ideal for testing or short-term backups",
      ],
    },
    {
      id: "2",
      title: "Pro Snapshot",
      price: "0.045",
      subTitle: "For growing environments",
      desc: [
        "Lower rate at $0.045 per GB per month",
        "Automatic incremental snapshots",
        "Snapshot scheduling and retention control",
        "Faster restore time and regional redundancy",
      ],
    },
    {
      id: "3",
      title: "Business Snapshot",
      price: "0.04",
      subTitle: "For production workloads",
      desc: [
        "Enterprise-grade durability and redundancy",
        "API and automation support for backups",
        "Cross-region replication for disaster recovery",
        "Priority support and SLA guarantee",
      ],
    },
  ];

  return (
    <div>
      <div>
        {/* Hero section */}
        <HeroComponent
          height="h-[600px]"
          image="/hero-bg.png"
          title="Snapshot Service"
          description="Take full control of your data with secure, point-in-time snapshots. Instantly capture, store, and restore your system or volume to any previous state with ease. Snapshots make it simple to protect workloads, test safely, and recover quickly — all with flexible, pay-as-you-go pricing."
        />

        <div className="w-screen mt-10">
          <div className="py-16 lg:py-32 md:py-32">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className=" lg:mx-8 md:mx-8 mx-4">
                <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                  Snapshot Service Price
                </p>
                <p className="text-base text-gray-600">
                  Instantly back up and restore your data with our scalable snapshot service. Pay only for what you use.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
