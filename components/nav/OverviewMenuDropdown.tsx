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
      items: [
        "Compute",
        "Storage & Data Protection",
        "Networking",
        "Policy & Placement",
      ],
    },
    {
      title: "Solutions for Modern Agribusiness Systems",
      items: [
        "Online Education",
        "Gaming Solution",
        "Audio and Video",
        "Game Media Solution",
      ],
    },
    {
      title: "Why Choose GCX Cloud",
      items: [
        "Prioritize your security and privacy",
        "Cloud infrastructure",
        "24/7 cloud support in Khmer & English",
      ],
    },
  ];

  return (
    <div className="top-full left-0 w-screen bg-white h-fit z-50">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between gap-8 py-8 text-[16px]">
        {/* Highlight / Featured Section */}
        <section className="w-full sm:max-w-[292px] bg-green-700/10 p-8 rounded-lg">
          <p className="font-normal text-[12px] text-gray-500">
            Cambodia&apos;s #1 Data Center
          </p>
          <p className="font-bold text-[16px] mt-1">
            What Makes Us Different?
          </p>

          <div className="mt-4 space-y-4 text-[14px]">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-start flex-1">
          {sections.map((section, index) => (
            <section key={index} className="max-w-[292px] px-4">
              <p className="font-bold pb-4 hover:underline cursor-pointer transition">
                {section.title}
              </p>
              <div className="space-y-1 text-gray-700">
                {section.items.map((item, i) => (
                  <p
                    key={i}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
