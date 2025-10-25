import { ShieldQuestionMark, Headset, HandCoins } from "lucide-react"; // import your icons

const cards = [
  {
    id: 1,
    icon: ShieldQuestionMark,
    title: "Security",
    description:
      "Deploy and scale your applications effortlessly with our cloud platform.",
  },
  {
    id: 2,
    icon: Headset,
    title: "Efficienct Fault Reporting",
    description:
      "Your data is protected with enterprise-grade security and compliance.",
  },
  {
    id: 3,
    icon: HandCoins,
    title: "Always Reliable",
    description:
      "Connect seamlessly with a fast and reliable network across the globe.",
  },
];

export default function VisionCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <Icon className="w-14 h-14 text-green-700 mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-base">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
