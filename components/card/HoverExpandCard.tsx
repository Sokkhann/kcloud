"use client";

import Image from "next/image";
import data from "@/data/dataCards.json"

export default function HoverExpandCards() {
  const cards = data.whyGCXCards

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8 gap-4 w-full lg:px-8 md:px-8 px-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group overflow-hidden rounded-2xl h-[300px] sm:h-[320px] lg:h-[350px] cursor-pointer bg-white w-full"
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

          {/* Expanding White Panel */}
          <div
            className="absolute bottom-0 left-0 w-full bg-white p-6 sm:p-8 transition-all duration-500 ease-in-out
          h-[80px] sm:h-[90px] lg:h-[90px] group-hover:h-[130px] sm:group-hover:h-[140px]"
            style={{ transformOrigin: "bottom" }}
          >
            <h3 className="font-semibold text-xl text-gray-700">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
