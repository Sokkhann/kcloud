import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function TemplatePricingPage() {
  const templateData = [
    {
      id: "1",
      title: "Starter Blueprint",
      price: "29",
      subTitle: "Quick start for small projects",
      desc: [
        "Pre-installed OS (Ubuntu 22.04 or CentOS 9)",
        "Includes essential utilities and tools",
        "Ready-to-launch VM setup",
        "Ideal for personal or test environments",
      ],
    },
    {
      id: "2",
      title: "DevOps Pack",
      price: "49",
      subTitle: "Optimized for development",
      desc: [
        "Pre-installed OS + development tools (Node.js, Python, Docker)",
        "Includes Git and basic CI/CD scripts",
        "Supports multiple user environments",
        "Fast deployment for dev/testing teams",
      ],
    },
    {
      id: "3",
      title: "Enterprise Pro Kit",
      price: "99",
      subTitle: "For large-scale deployment",
      desc: [
        "Pre-configured OS with enterprise-grade software",
        "Includes monitoring and logging tools",
        "Advanced networking and security settings",
        "Supports multi-tenant environments",
      ],
    },
    {
      id: "4",
      title: "Premium Launchpad",
      price: "149",
      subTitle: "All-in-one advanced plan",
      desc: [
        "Everything in Enterprise Pro Kit + extra tools",
        "Unlimited templates and automation scripts",
        "Enhanced compliance and security configurations",
        "24/7 global support and onboarding",
      ],
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="System Templates"
        description="Deploy virtual machines in seconds with pre-configured templates. Each template includes an operating system, essential tools, and optimized configurations so you can focus on building your applications instead of setting up infrastructure. Choose the plan that fits your project size and team needs."
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                System Templates Price
              </p>
              <p className="text-base text-gray-600">
                Choose a plan that fits your project needs. Our VM templates are
                priced based on included software, configuration level, and
                support. From quick-start options for small projects to fully
                loaded enterprise-ready templates, each plan ensures fast
                deployment and optimized performance, so you pay only for what
                you use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
              {templateData.map((item) => (
                <PricingCard
                  key={item.id}
                  slug={item.id}
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
