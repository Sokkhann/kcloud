"use client";

import Image from "next/image";

export default function HoverExpandCards() {
  const cards = [
    {
      id: 1,
      title: "Convenient Location",
      desc: "Data centers strategically positioned for easy access and minimal latency",
      image: "/convenient-location.png",
    },
    {
      id: 2,
      title: "Stable Power Zone",
      desc: "Uninterrupted, reliable power for maximum up-time and data security",
      image: "/stable-zone.png",
    },
    {
      id: 3,
      title: "Flood Free Area",
      desc: "Data centers strategically located in flood-free zones for worry-free data protection",
      image: "/flood-free.png",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group overflow-hidden rounded-2xl shadow-lg h-[350px] cursor-pointer bg-white"
        >
          {/* Background Image */}
          <div className="rounded-2xl w-full h-full relative overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Expanding White Panel (slides upward only) */}
          <div
            className="absolute bottom-0 left-0 w-full bg-white p-8 transition-all duration-500 ease-in-out
            h-[90px] group-hover:h-[140px] origin-bottom"
            style={{ transformOrigin: "bottom" }}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
