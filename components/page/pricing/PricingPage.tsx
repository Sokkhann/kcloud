import React from "react";
import PricingCard from "../../card/PricingCard";
import { pricingData } from "@/data/productPricing";
import HeroComponent from "@/components/HeroComponent";
import GetStartedCard from "@/components/card/GetStartedCard";

export default function PricingPage() {
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
          {/* title and description */}
          <div className="px-6 md:text-center">
            <p className="xl:text-4xl md:text-4xl text-2xl font-bold text-gray-700">Product Package</p>
            <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Our pricing is built to match your momentum. From startups to
              enterprises, get the performance, features, and support you need —
              all in one place.
            </p>
          </div>
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
            />
          ))}
        </div>

        <div className="px-6 pb-16">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
