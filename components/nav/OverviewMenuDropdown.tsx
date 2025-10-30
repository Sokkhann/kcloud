import React from "react";
import { Link } from "@radix-ui/react-navigation-menu";

interface OverviewMenuDropdownProps {
  onClose?: () => void;
}

export default function OverviewMenuDropdown({ onClose }: OverviewMenuDropdownProps) {
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
      id: "products", // hash link to products section
      items: [
        "Compute",
        "Storage & Data Protection",
        "Networking",
        "Policy & Placement",
      ],
    },
    {
      title: "Solutions",
      id: "solutions",
      items: [
        "Online Education",
        "Gaming Solution",
        "Audio and Video",
        "Game Media Solution",
      ],
    },
    {
      title: "Why Choose GCX Cloud",
      id: "why-choose-gcx",
      items: [
        "Prioritize your security and privacy",
        "Cloud infrastructure",
        "24/7 cloud support in Khmer & English",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row md:justify-between md:gap-8 gap-6 px-4">
      {/* Highlight / Featured Section */}
      <section className="md:w-2/5 w-full flex flex-col bg-green-700/10 p-6 md:p-8 rounded-lg">
        <p className="font-normal text-[12px] text-gray-500">
          Cambodia&apos;s #1 Data Center
        </p>
        <p className="font-bold text-[16px] md:text-[18px] mt-1 text-gray-700 inline-block relative group cursor-pointer">
          <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
            <Link onClick={onClose} href={"/#what-make-us-different"}>
              What Makes Us Different?
            </Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
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
      <div className="flex flex-wrap w-full md:flex-nowrap md:justify-between gap-4 md:gap-8">
        {sections.map((section, index) => (
          <section
            key={index}
            className="w-full sm:w-[45%] md:w-[25%] lg:w-[60%] px-2 md:px-4"
          >
            <Link onClick={onClose} key={index} href={`/#${section.id}`}>
              <p className="font-semibold text-gray-700 inline-block relative group cursor-pointer">
                <span className="relative text-base z-10 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  {section.title}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>

            <div className="space-y-1 text-gray-600 mt-2">
              {section.items.map((item, i) => (
                <p key={i} className="text-base">
                  {item}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
