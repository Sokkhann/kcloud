import React from "react";
import FeaturedCard from "../card/FeaturedCard";
import GetStartedCard from "../card/GetStartedCard";
import { pricingData } from "@/data/productPricing";
import PricingCard from "../card/PricingCard";

export default function VirtualMachineDetailLayout() {
  const cards = [
    {
      image: "/featured1.png",
      title: "Easily deploy and manage Virtual Machine",
      description:
        "Interact with your VM how you want. Our intuitive UI, CLI, API, and Terraform Provider make it simple to manage your virtual machines.",
    },
    {
      image: "/featured2.png",
      title: "Reliably Scale as Demands Shifts",
      description:
        "Resize a VM or scale horizontally with many of them. Deploy across globally distributed data centers each with our 99.99% uptime SLA.",
    },
    {
      image: "/featured3.png",
      title: "Build, monitor, and secure your apps for less",
      description:
        "Get exceptional bandwidth pricing and 500 GiB per month of outbound data transfer—plus monitoring and firewalls for free with every VM.",
    },
  ];

  const selectedProduct = pricingData.find((p) => p.id === "virtual-machine");
  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto py-24">
        <div className="text-center my-16">
          <p className="text-4xl font-bold text-gray-700">
            Comprehensive, cost-effective cloud computing
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Flexible and powerful computing resources to run your workloads
            efficiently. Scale CPU, memory, and storage as needed. Ideal for
            applications, services, and containerized workloads. Reliable, high
            performance, and ready for any demand.
          </p>
        </div>

        {/* feature card section */}
        <div className="flex flex-col md:flex-row gap-6 py-8 justify-center items-stretch">
          {cards.map((card, index) => (
            <div key={index} className="flex-1">
              <FeaturedCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24">
          <div className="text-center my-16">
            <p className="text-4xl font-bold text-gray-700">
              Find the Perfect Plan for Your Needs
            </p>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
            {selectedProduct?.plans?.map((item) => (
              <PricingCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                subTitle={item.subTitle}
                desc={item.desc}
                buttonLabel="Choose Plan"
              />
            ))}
          </div>

          {/* get started card section */}
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
