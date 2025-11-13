import IconCard from "../../card/IconCard";
import { IconCardProps } from "@/type/dataTypes";
import data from "@/data/dataCards.json";
import { getReactIcon } from "@/type/getReactIcon";

export default function VisionSecion() {
  
  const rawCards = data.visionCards ?? [];
  
  const cards: IconCardProps[] = rawCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-8 gap-4 py-10 mx-4 lg:mx-8 md:mx-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <IconCard
            key={index}
            icon={Icon}
            title={card.title}
            desc={card.desc}
            align="items-center"
          />
        );
      })}
    </div>
  );
}
