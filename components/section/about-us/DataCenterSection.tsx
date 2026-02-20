import ScrollReveal from '@/components/animations/ScrolReveal';
import ListDropDownCard from '@/components/card/ListDropDownCard';

const cards = [
  {
    image: "/data-center-img.jpg",
    items: [
      { title: "Enterprise-Grade Infrastructure", content: "KCloud is powered by GCX, Cambodia’s first Carrier Neutral Tier 3 Data Center, certified under ANSI TIA-942-A standards. Built for high availability and redundancy, it ensures secure and reliable cloud operations for mission-critical workloads." },
      { title: "Built by Industry Experts", content: "Founded by experienced telecom and IT professionals, GCX understands the demands of modern enterprises. It delivers trusted data center services to local and international businesses, content providers, and telecom carriers." },
      { title: "A Growing Digital Ecosystem", content: "GCX is committed to continuous expansion to support Cambodia’s digital growth. With future infrastructure development plans, it provides a strong and scalable foundation for KCloud’s cloud solutions. " },
    ],
  }
];

export default function DataCenterSection() {
  return (
    <section className="">
      {/* Data Centers Section */}
      <div id="why-choose-gcx" className="lg:pb-24 md:pb-24 pb-16 bg-white">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            {/* title and description */}
            <div className="max-w-7xl mx-auto">
              {/* title and description */}
              <div className="text-center justify-center lg:mx-0 mx-4 mb-12">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                  GCX <span className="text-gcxprimary">Kcloud</span> Data Centers
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                  Located in the heart of Phnom Penh, our data center pushes the pinnacle of connectivity to the next level and unlock your potential with us
                </p>
              </div>
            </div>

            <div className="lg:px-8 md:px-8 px-4">
              {cards.map((card, index) => (
                <ListDropDownCard
                  key={index}
                  image={card.image}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
