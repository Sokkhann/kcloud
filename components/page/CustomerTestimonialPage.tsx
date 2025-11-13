import React from "react";
import HeroComponent from "../HeroComponent";
import CustomerCard from "../card/CustomerCard";
import customerOverview from "@/data/cusomterReviews.json";
import GetStartedCard from "../card/GetStartedCard";

export default function CustomerTestimonialPage() {
  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Feedback That Matters"
        description="We value our customers’ opinions—here’s what they have to say about us. Their feedback inspires us to improve every day, helps us deliver better experiences, and guides us in creating solutions that truly matter. See how we’ve made a difference for those who trust us."
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-12">
          {customerOverview.map((item, index) => (
            <CustomerCard
              key={index}
              description={item.description}
              title={item.title}
              logo={item.logo}
            />
          ))}
        </div>

        <div className="pb-12">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
