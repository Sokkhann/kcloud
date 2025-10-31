import Link from "next/link";
import React from "react";

export default function SolutionDropDown() {
  const cardItems = [
    {
      title: "Online Education",
      desc: "Build a successful platform for online eaduction, with advanced technologies.",
    },
    {
      title: "Gaming Solution",
      desc: "Build a successful platform for online eaduction, with advanced technologies.",
    },
    {
      title: "Audio and Video",
      desc: "Build a successful platform for online eaduction, with advanced technologies.",
    },
    {
      title: "Game Media Solution",
      desc: "Build a successful platform for online eaduction, with advanced technologies.",
    },
  ];

  return (
    <div className="left-0 h-fit z-50 px-0 lg:px-4 lg:py-6 py-0">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-6 md:gap-8 text-[16px]
          max-h-[80vh] overflow-y-auto
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
          
        "
      >
        {cardItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="hidden lg:block font-medium lg:font-semibold mb-2 text-gray-700">
              {item.title}
            </p>

            <div className="p-4 bg-green-950/10 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <p className="block lg:hidden font-medium lg:font-semibold mb-2 text-gray-700">
                {item.title}
              </p>

              <p className="text-gray-600">{item.desc}</p>

              <Link href="/">
                <p className="font-medium cursor-pointer mt-3 text-green-800 hover:underline">
                  View Detail
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
