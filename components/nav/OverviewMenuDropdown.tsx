import Link from "next/link";
import React from "react";

export default function OverviewMenuDropdown() {
  const highlights = [
    {
      title: "Convenient Location",
      desc: "Easily accessible and strategically located for optimal connectivity.",
    },
    {
      title: "Stable Power Zone",
      desc: "Reliable and redundant power systems ensuring uptime and performance.",
    },
    {
      title: "Flood-Free Area",
      desc: "Physically secure and environmentally safe data center location.",
    },
  ];

  const sections = [
    {
      title: "Our Products & Services",
      href: "/#products", // hash link to products section
      items: [
        "Compute",
        "Storage & Data Protection",
        "Networking",
        "Policy & Placement",
      ],
    },
    {
      title: "Solutions",
      href: "/#solutions",
      items: [
        "Online Education",
        "Gaming Solution",
        "Audio and Video",
        "Game Media Solution",
      ],
    },
    {
      title: "Why Choose GCX Cloud",
      href: "/#why-choose",
      items: [
        "Prioritize your security and privacy",
        "Cloud infrastructure",
        "24/7 cloud support in Khmer & English",
      ],
    },
  ];

  return (
    <div className="max-w-7xl py-6 mx-auto flex justify-between gap-8">
      {/* Highlight / Featured Section */}
      <section className="w-2/5 flex flex-col bg-green-700/10 p-8 rounded-lg">
        <p className="font-normal text-[12px] text-gray-500">
          Cambodia&apos;s #1 Data Center
        </p>
        <p className="font-bold text-[16px] mt-1 text-gray-700">
          What Makes Us Different?
        </p>

        <div className="mt-4 space-y-4 text-[14px]">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p className="font-semibold text-gray-700">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <div className="flex w-full justify-between">
        {sections.map((section, index) => (
          <section key={index} className="max-w-[292px] px-4">
            <Link href={section.href} scroll={false}>
              <p className="font-semibold text-gray-700 inline-block relative group cursor-pointer">
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  {section.title}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <div className="space-y-1 text-gray-600">
              {section.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
