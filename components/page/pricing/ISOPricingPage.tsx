import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function ISOPricingPage() {
  const isoData = [
    {
      id: "1",
      title: "Ubuntu ISO",
      price: "0",
      subTitle: "Open-source OS",
      desc: [
        "Includes Ubuntu 22.04 LTS",
        "Minimal setup for quick VM deployment",
        "Compatible with most cloud platforms",
        "Free and open-source",
      ],
    },
    {
      id: "2",
      title: "Windows Server ISO",
      price: "49",
      subTitle: "Enterprise-ready OS",
      desc: [
        "Includes Windows Server 2022",
        "Pre-configured for cloud deployment",
        "Supports Active Directory and IIS",
        "License cost included in price",
      ],
    },
    {
      id: "3",
      title: "CentOS ISO",
      price: "0",
      subTitle: "Stable Linux OS",
      desc: [
        "Includes CentOS 9 Stream",
        "Lightweight and secure",
        "Optimized for server workloads",
        "Ideal for enterprise and dev environments",
      ],
    },
    {
      id: "4",
      title: "Fedora 39",
      price: "0",
      subTitle: "Cutting-edge Linux",
      desc: [
        "Latest Linux features and updates",
        "Pre-installed with development tools",
        "Ideal for testing and modern applications",
        "Community-supported and free",
      ],
    },
    {
      id: "5",
      title: "FreeBSD 13.3",
      price: "0",
      subTitle: "Secure and robust Unix",
      desc: [
        "Stable and secure BSD operating system",
        "Lightweight and performant",
        "Pre-installed basic system utilities",
        "Perfect for networking or server-focused workloads",
      ],
    },
    {
      id: "6",
      title: "Windows Server 2019",
      price: "12",
      subTitle: "Microsoft enterprise OS",
      desc: [
        "Includes server GUI and essentials",
        "Ready for Active Directory and IIS",
        "License cost included in pricing",
        "Supports enterprise applications and .NET workloads",
      ],
    },
  ];

  return (
    <div>
      <div>
        <div>
          {/* Hero section */}
          <HeroComponent
            height="h-[600px]"
            image="/hero-bg.png"
            title="ISO"
            description="ISOs are pre-built operating system images that allow you to quickly create virtual machines. Choose from popular Linux distributions, BSD systems, or Windows Server versions to get started instantly, with minimal setup required. Perfect for testing, development, or production environments."
          />

          <div className="w-screen mt-10">
            <div className="py-16 lg:py-32 md:py-32">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="lg:mx-8 md:mx-8 mx-4">
                  <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                    ISO Price
                  </p>
                  <p className="text-base text-gray-600">
                    Our ISO pricing is straightforward: most Linux and BSD
                    images are free to use, while commercial OS images like
                    Windows Server include licensing fees. Pay only for the
                    resources your virtual machine consumes — CPU, memory, and
                    storage — while the OS image is ready-to-deploy.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
                  {isoData.map((item) => (
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
      </div>
    </div>
  );
}
