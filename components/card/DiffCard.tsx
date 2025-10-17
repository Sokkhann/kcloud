// components/CardGrid.tsx
const cards = [
  {
    id: 1,
    image: "/convenient-location.png",
    title: "Convienient Location",
    description:
      "Data centers strategically positioned for easy access and minimal latency",
  },
  {
    id: 2,
    image: "/stable-zone.png",
    title: "Stable Power Zone",
    description:
      "Uninterrupted, reliable power for maximum up-time and data security",
  },
  {
    id: 3,
    image: "/flood-free.png",
    title: "Flood Free Area",
    description:
      "Data centers strategically located in flood-free zones for worry-free data protection",
  },
];

export default function DiffCard() {
  return (
    <div className="grid grid-cols-3 gap-6 justify-items-center mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-100 h-80 rounded-xl shadow-lg bg-cover bg-center relative overflow-hidden cursor-pointer group transition-all duration-300"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5 text-white">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-sm mt-2 opacity-90">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
