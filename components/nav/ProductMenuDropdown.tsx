"use client";

import Link from "next/link";
import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";

export default function ProductDropDown() {

  const featuredProducts = [
    {
      title: "Snapshots",
      desc: "Point-in-time copy of a VM or volume.",
    },
    {
      title: "Backups",
      desc: "Data protection for recovery.",
    },
    {
      title: "Templates",
      desc: "Pre-built VM images to speed instance creation.",
    },
    {
      title: "ISOs",
      desc: "Bootable OS or tool images used to install or rescue a VM.",
    },
    {
      title: "Affinity Groups",
      desc: "Policies to keep VMs together or apart for performance/HA.",
    },
  ];

  const productCategories = [
    {
      title: "Compute",
      items: [
        { name: "Virtual Machines", id: "virtual-machine" },
        { name: "VNF Appliances", id: "vnf-appliance" },
        { name: "Kubernetes", id: "kubernetes" },
        { name: "Apps", id: "apps" },
      ],
    },
    {
      title: "Storage & Data Protection",
      items: [
        { name: "Block Storage", id: "block-storage" },
        { name: "Snapshots", id: "snapshot" },
        { name: "Backups", id: "backup" },
        { name: "Templates", id: "template" },
        { name: "ISOs", id: "iso" },
      ],
    },
    {
      title: "Networking",
      items: [
        { name: "Networks", id: "network" },
        { name: "Load Balancers", id: "load-balancer" },
        { name: "DNS", id: "dns" },
      ],
    },
    {
      title: "Security & Access",
      items: [
        { name: "Firewall", id: "firewall" },
        { name: "VPN", id: "vpn" },
        { name: "Affinity Group", id: "affinity-group" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  top-full left-0 flex flex-col gap-0 px-0 lg:px-4 lg:py-6 py-0">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-6 text-[16px]">
        {/* Featured Section */}
        <section className="w-full lg:max-w-[400px] bg-green-700/10 p-6 rounded-lg">
          <p className="font-normal text-[12px] text-gray-500">
            Featured Products
          </p>

          <div className="mt-4 space-y-4 text-[14px]">
            {featuredProducts.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 flex-1 h-fit lg:mt-6 md:mt-0 mt-0">
          {productCategories.map((category, index) => (
            <section key={index} className="w-full lg:px-2 px-0">
              <p className="font-semibold text-gray-700 inline-block relative group mb-2 ml-4">
                {category.title}
              </p>
              <div className="space-y-2 text-gray-700">
                {category?.items.map((item, i) => (
                  <NavigationMenuLink asChild key={i}>
                    <Link
                      href={`/products/${item.id}`}
                      key={i}
                      className="block !text-base cursor-pointer px-4 lg:py-2 py-0 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center pt-12">
        <NavigationMenuLink asChild>
          <Link href={"/products"}>
            <p className="font-semibold text-green-900 inline-block relative group cursor-pointer select-none">
              <span className="relative text-base z-10 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                See all products
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}
