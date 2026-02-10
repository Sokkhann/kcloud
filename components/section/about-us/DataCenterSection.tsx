import ScrollReveal from '@/components/animations/ScrolReveal';
import ListDropDownCard from '@/components/card/ListDropDownCard';

const cards = [
  {
    image: "/data-center-img.jpg",
    items: [
      { title: "Cooling System", content: "Climate control maintains temperature at 21°C ± 2°C and humidity at 55% ± 5%. The system uses N+1 air-cooled CRAC units with cold containment for efficient cooling." },
      { title: "Existing Carrier Partners", content: "We partner with 20+ international, local, and OTT carriers in a carrier-neutral facility. Dual fiber connections, ODF/MDF areas, and Cat 6, burial." },
      { title: "Data Center Standards & Security", content: "STier 3 ANSI-TIA 942 compliant with 99.982% SLA and concurrent maintenance capability. 24/7/365 security and NOC, including biometric entry and all-round CCTV monitoring." },
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
                  <span className="text-gcxprimary">GCX</span> Data Centers
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
