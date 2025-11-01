"use client";

import { Gamepad2, GraduationCap, RectangleGoggles, Video } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    id: 1,
    logo: <GraduationCap strokeWidth={1} className="h-12 w-12 text-white" />,
    image: "/graduated.png",
    title: "Online Education",
    customer: "NeocomISP Limited",
    products: [
      "Cloud Virtual Machine",
      "Block Storage",
      "Load Balancer",
      "DNS",
    ],
  },
  {
    id: 2,
    logo: <RectangleGoggles strokeWidth={1} className="h-12 w-12 text-white" />,
    image: "/gaming.png",
    title: "Online Education",
    customer: "NeocomISP Limited",
    products: ["Cloud Virtual Machine", "Block Storage", "DNS"],
  },
  {
    id: 3,
    logo: <Gamepad2 strokeWidth={1} className="h-12 w-12 text-white" />,
    image: "/video.png",
    title: "Online Education",
    customer: "NeocomISP Limited",
    products: ["Cloud Virtual Machine", "Block Storage", "Load Balancer"],
  },
  {
    id: 4,
    image: "/joy-stick.png",
    logo: <Video strokeWidth={1} className="h-12 w-12 text-white" />,
    title: "Online Education",
    customer: "NeocomISP Limited",
    products: ["Cloud Virtual Machine", "Block Storage"],
  },
];

export default function SolutionCard() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div>
      <div className="hidden lg:flex justify-center items-center mt-20 space-x-4">
        {cards.map((card) => {
          const isActive = activeCard === card.id;
          const width = isActive ? 500 : 250; // full vs half width

          return (
            <div
              key={card.id}
              className={`h-160 rounded-xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0`}
              style={{
                width: `${width}px`,
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setActiveCard(card.id)} // set card as active on hover
            >
              {/* Overlay */}
              <div className="w-full h-full bg-black/30 p-8 text-white">
                {(isActive && (
                  <>
                    <div className="flex flex-col justify-between w-full h-full">
                      <h2 className="text-xl font-bold">{card.title}</h2>

                      <div className="grid gap-4">
                        <div>
                          <p>Customer Stories</p>
                          <p className="inline-block bg-white/70 text-sm p-2 mr-2 mt-2 text-green-900">
                            {card.customer}
                          </p>
                        </div>

                        <div>
                          <p>Recommended Products</p>
                          {card.products?.map((product, index) => (
                            <span
                              key={index}
                              className="inline-block bg-white/70 text-sm p-2 mr-2 mt-2 text-green-900"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )) || <div className="flex items-end h-full">{card.logo}</div>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 lg:hidden mx-12 md:mx-16 mx-0">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-md shadow-lg overflow-hidden bg-cover bg-center h-80 flex flex-col justify-between text-white"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className="bg-black/40 p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-lg font-bold mb-3">{card.title}</h2>
                <p className="text-sm mb-2">Customer Stories</p>
                <p className="inline-block bg-white/70 text-sm p-2 mr-2 text-green-900">
                  {card.customer}
                </p>
              </div>

              <div>
                <p className="text-sm mb-2">Recommended Products</p>
                {card.products?.map((product, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white/70 text-sm p-2 mr-2 mt-2 text-green-900"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
