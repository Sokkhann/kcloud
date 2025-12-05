"use client";

import data from "@/data/dataCards.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function HoverExpandCards() {
  const [mounted, setMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
      setMounted(true);
    }, []);
  
    // Default size for server (to avoid mismatch)
    let iconSize = 60 ;
    if (mounted) {
      if (isMd) iconSize = 80;
      if (isLg) iconSize = 100;
    }
  
  const featureCards = data.whyGCXCards ?? [];
  const cards: IconCardProps[] = featureCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8 gap-4 w-full lg:px-8 md:px-8 px-4">
      {cards.map((item, index) => {
        const Icon = item.icon; // typed from IconCardProps

        return (
          <div key={index}>
            <div className="p-4 lg:p-8 md:p-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden h-full flex flex-wrap justify-between">
              {/* Title */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-gray-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                {item.desc}
              </p>

              {/* Icon */}
              <div className="flex justify-end w-full pt-8">
                <Icon className="text-gcxprimary opacity-70" size={iconSize}/>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
