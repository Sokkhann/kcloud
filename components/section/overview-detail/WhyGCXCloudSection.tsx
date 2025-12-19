"use client";

import WhyGCXCloudCard from "@/components/card/WhyGCXCloudCard";

export default function WhyGCXCloudSection() {

  // Sample data
  const cards = [
    {
      image: "/why-cloud-location.png",
      title: "Convenient Location",
      description:
        "Strategically situated near major transport hubs and business districts for easy accessibility. This prime positioning ensures rapid on-site support and seamless logistics for your hardware deployments.",
    },
    {
      image: "/why-cloud-power.png",
      title: "Stable Power Zone",
      description:
        "Located within a premium utility grid that guarantees consistent voltage and minimal fluctuations. Our facility benefits from prioritized power routing to ensure your mission-critical operations never face interruption.",
    },
    {
      image: "/why-cloud-flood.png",
      title: "Flood Free Area",
      description:
        "Situated on high-elevation terrain specifically surveyed to remain safe from historical and projected water levels. This geographical advantage provides an extra layer of physical security and environmental resilience for your infrastructure.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 lg:px-8 md:px-8 px-4">
        {cards.map((card, index) => (
          <WhyGCXCloudCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
