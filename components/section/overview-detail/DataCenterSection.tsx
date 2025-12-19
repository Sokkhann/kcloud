import ListDropDownCard from '@/components/card/ListDropDownCard';
import React from 'react'

export default function DataCenterSection() {
  const cards = [
    {
      image: "/data-center-img.png",
      items: [
        { title: "Cooling System", content: "Climate control maintains temperature at 21°C ± 2°C and humidity at 55% ± 5%. The system uses N+1 air-cooled CRAC units with cold containment for efficient cooling." },
        { title: "Existing Carrier Partners", content: "We partner with 20+ international, local, and OTT carriers in a carrier-neutral facility. Dual fiber connections, ODF/MDF areas, and Cat 6, burial." },
        { title: "Data Center Standards & Security", content: "STier 3 ANSI-TIA 942 compliant with 99.982% SLA and concurrent maintenance capability. 24/7/365 security and NOC, including biometric entry and all-round CCTV monitoring." },
      ],
    }
  ];

  return (
    <div className="">
      {cards.map((card, index) => (
        <ListDropDownCard
          key={index}
          image={card.image}
          items={card.items}
        />
      ))}
    </div>
  );
}
