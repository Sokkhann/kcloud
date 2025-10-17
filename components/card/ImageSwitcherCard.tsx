"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSwitcherCard() {
  const cards = [
  {
    id: 1,
    image: "/security.png",
    title: "Prioritize Your Security and Privacy",
    desc:
      "Data Protection & Encryption, Networking Security, Identity Access Managament, Mornitoring & Detectoin, Firewall protection, and Web Application Firewall (WAFF)",
  },
  {
    id: 2,
    image: "/cloud.png",
    title: "Cloud Infrastructure",
    desc:
      "A reliable cloud platform ensures up-time with redundancy, performance, and scalability to handle any workload. With strong security and continuous monitoring, it protects data and maintains system integrity.",
  },
  {
    id: 3,
    image: "/support.png",
    title: "24/7 Support Cloud Support in Khmer &English",
    desc:
      "24/7 availibility, Group chat, support step by step, and Guidance step by step guidance.",
  },
];

  const [selected, setSelected] = useState(1);

  return (
    <section className="flex flex-col md:flex-row w-full items-center pt-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start pr-20 space-y-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelected(card.id)}
            className={`p-5 border rounded-2xl cursor-pointer transition-all duration-300 w-full 
              ${selected === card.id ? "bg-green-800/10 rounded-2xl " : " bg-white rounded-2xl shadow-md hover:shadow-lg"}
            `}
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">{card.title}</h2>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-black h-135 rounded-lg">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              selected === card.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
