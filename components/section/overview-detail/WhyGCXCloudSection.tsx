"use client";

import WhyGCXCloudCard from "@/components/card/WhyGCXCloudCard";

export default function WhyGCXCloudSection() {
  
  // Sample data
  const cards = [
    {
      image: "/why-cloud-location.png",
      title: "Convenient Location",
      description:
        "Our cloud infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7.",
    },
    {
      image: "/why-cloud-power.png",
      title: "Stable Power Zone",
      description:
        "Connect your business globally with our high-speed, low-latency network solutions.Our cloud infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7.",
    },
    {
      image: "/why-cloud-flood.png",
      title: "Flood Free Area",
      description:
        "Easily scale your services up or down according to your business needs without disruption. Our cloud infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7. infrastructure ensures your data is safe, protected, and available 24/7.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 lg:px-8 md:px-8 px-4">
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
