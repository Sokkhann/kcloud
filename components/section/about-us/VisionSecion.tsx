import IconCard from "../../card/IconCard";
import { visionCard } from "@/data/aboutUs";


export default function VisionSecion() {

  const cards = visionCard;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <IconCard key={index} icon={Icon} title={card.title} desc={card.desc} align="items-center"/>
        );
      })}
    </div>
  );
}
