"use client";

import MissionCard from "@/components/card/MissionCard";
import React from "react";
import data from "@/data/dataCards.json";
import { getReactIcon } from "@/type/getReactIcon";
import { IconCardProps } from "@/type/dataTypes";

export default function MissionSection() {
  const rawCards = data.missionCards ?? [];

  const cards: IconCardProps[] = rawCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <div className="lg:mx-8 md:mx-8 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 md:gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <MissionCard
              key={index}
              icon={Icon}
              title={card.title}
              desc={card.desc}
              align="items-center"
            />
          );
        })}
      </div>
    </div>
  );
}
