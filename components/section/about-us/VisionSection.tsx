import IconCard from "../../card/IconCard";
import { IconCardProps } from "@/type/dataTypes";
import data from "@/data/dataCards.json";
import { getReactIcon } from "@/type/getReactIcon";

export default function VisionSection() {

  const rawCards = data.visionCards ?? [];

  const cards: IconCardProps[] = rawCards.map((card) => ({
    ...card,
    icon: getReactIcon(card.icon),
  }));

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-700 mb-4"><span className="text-gcxPrimary">GCX</span> Vision</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-10 md:p-12 rounded-2xl bg-gray-50 border border-transparent transition-all duration-500 hover:bg-white hover:shadow-md hover:border-gcxprimary"
            >
              {/* Large Number Inside Card */}
              <div className="mb-8">
                <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-gcxPrimary to-gcxPrimary opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  0{index + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-[#0d793e] font-bold lg:text-2xl md:t2xl text-lg mb-5">
                  {card.title}
                </h4>
                <p className="text-gray-600  leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Subtle Decorative Corner Accent */}
              <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-gray-200 group-hover:border-[#0d793e] transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
