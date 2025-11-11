"use client";

import DNSCard from "@/components/card/DNSCard";
import GetStartedCard from "@/components/card/GetStartedCard";
import HeroComponent from "@/components/HeroComponent";
import DNSTab from "@/components/tab/DNSTab";
import React, { useState } from "react";

export default function DNSPricingPage() {
  const tabs = ["Regional", "Global"];
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = [
    {
      titleL: "Regional pricing starts at $12 per month",
      descL:
        "Start with one node and add up to 100 of them, adding or removing nodes as you go. Let's go with regional ",
      titleR: "Each node increase Load Balancer capacity by:",
      descR: [
        "+10,000",
        " requests per second",
        "+10,000",
        " simultanous",
        "+250",
        "SSL connections per second",
      ],
    },
    {
      titleL: "Global pricing starts at $15 per month",
      descL:
        "Start with one node and add up to 100 of them, adding or removing nodes as you go.",
      titleR: "Standard Tier with included allowances of:",
      descR: [
        "+25M",
        "requests to GLB per month",
        "+10,000GB",
        "data transfer per month",
        "+5",
        "Domains",
      ],
    },
  ];

  return (
    <div className="w-screen">
      {/* Hero section */}
        <HeroComponent
          showGetStarted
          showContactSales
          height="h-[600px]"
          image="/hero-bg.png"
          title="Power Up with the Right Plan"
          description="The DNS translates human-readable domain names into IP addresses so
          browsers can load internet resources. It acts as the internet’s
          address book, making websites accessible using easy-to-remember names."
        />

      {/* tab card section */}
      <div className="max-w-7xl mx-auto w-full mt-10 py-16 lg:py-32 md:py-32">
        {/* title and description */}
        <div className="max-w-5xl mx-4 lg:mx-8 md:mx-8 mb-8">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
            Domain Name System (DNS)
          </p>
          <p className="text-base text-gray-600 mt-4">
            The DNS translates human-readable domain names into IP addresses so
            browsers can load internet resources. It acts as the internet’s
            address book, making websites accessible using easy-to-remember
            names.
          </p>
        </div>

        <div className="max-w-7xl flex flex-col mx-4 lg:mx-8 md:mx-8">
          {/* dns tabs section */}
          <DNSTab tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

          {/* dns card section */}
          <DNSCard
            titleL={tabContents[activeTab].titleL}
            descL={tabContents[activeTab].descL}
            titleR={tabContents[activeTab].titleR}
            descR={tabContents[activeTab].descR}
          />

          <div className="py-24">
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
