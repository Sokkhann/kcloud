import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function AppPricingPage() {
  const appPlatformPricing = [
    {
      id: "1",
      title: "Starter",
      price: "5",
      subTitle: "For hobby projects & small apps",
      desc: [
        "Deploy static sites or small web apps",
        "1 CPU, 512MB RAM shared environment",
        "Automatic Git deployments",
        "Free SSL & global CDN",
        "Email support",
      ],
    },
    {
      id: "2",
      title: "Professional",
      price: "12",
      subTitle: "For production-grade applications",
      desc: [
        "Dedicated CPU & memory (2 vCPU, 2GB RAM)",
        "Autoscaling & zero-downtime deploys",
        "Custom domains with SSL",
        "Built-in metrics & logs",
        "Priority support",
      ],
    },
    {
      id: "3",
      title: "Scale",
      price: "25+",
      subTitle: "For high-traffic & scalable workloads",
      desc: [
        "Dedicated instances (up to 8 vCPU, 16GB RAM)",
        "Horizontal scaling & load balancing",
        "Private networking",
        "Managed databases integration",
        "24/7 premium support & SLAs",
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
          title="App Platform"
          description="App Platform is a fully managed environment that allows developers to build, deploy, and scale applications effortlessly. 
It handles infrastructure management, scaling, load balancing, and security — so you can focus on creating great software instead of maintaining servers."
        />

        <div className="w-screen mt-10">
          <div className="py-16 lg:py-32 md:py-32">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="lg:mx-8 md:mx-8 mx-4">
                <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                  App Platform Price
                </p>
                <p className="text-base text-gray-600">
                  App Platform pricing is transparent and flexible, designed to
                  grow with your needs. You only pay for the resources you use,
                  with options ranging from shared environments for small
                  projects to dedicated instances for production and enterprise
                  workloads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
                {appPlatformPricing.map((item) => (
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
