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
    <div className=" top-full left-0 w-screen bg-white h-fit z-50">
      <div className="max-w-[1200px] py-6 mx-auto grid grid-cols-4 gap-8 text-[16px]">
        {cardItems.map((item, index) => (
          <div key={index}>
            <p className="font-semibold mb-2">{item.title}</p>

            <div className="p-4 bg-green-950/10 rounded-lg">
              <p className="text-gray-600">{item.desc}</p>

              <p className="font-medium cursor-pointer mt-2 hover:underline">
                View Detail
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
