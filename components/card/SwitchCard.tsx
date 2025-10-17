"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Prioritize Your Security and Privacy",
    desc: "Data Protection & Encryption, Networking Security, Identity Access Managament, Mornitoring & Detectoin, Firewall protection, and Web Application Firewall (WAFF)",
    image: "/security.png",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    desc: "A reliable cloud platform ensures up-time with redundancy, performance, and scalability to handle any workload. With strong security and continuous monitoring, it protects data and maintains system integrity.",
    image: "/cloud.png",
  },
  {
    id: 3,
    title: "24/7 Support Cloud Support in Khmer &English",
    desc: "24/7 availibility, Group chat, support step by step, and Guidance step by step guidance.",
    image: "/support.png",
  },
];

export default function RotatingCard() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const nextIndex = (index + 1) % cards.length;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Wrapper to keep main card and small image close */}
      <div className="flex items-end gap-3 w-full">
        {/* Main Card */}
        <div className="flex-1 flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={cards[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[420px] flex overflow-hidden"
            >
              {/* Text Section */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-700">
                  {cards[index].title}
                </h2>
                <p className="text-gray-600">{cards[index].desc}</p>
              </div>

              {/* Image Section */}
              <div className="w-1/2 relative">
                <Image
                  src={cards[index].image}
                  alt={cards[index].title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Preview (Right beside the main card) */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextCard}
          className="cursor-pointer flex-shrink-0"
        >
          <Image
            src={cards[nextIndex].image}
            alt={cards[nextIndex].title}
            width={90}
            height={90}
            className="rounded-xl object-cover border-2 shadow-lg w-[90px] h-[90px]"
          />
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, i) => (
          <motion.div
            key={i}
            className={`rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            initial={false}
            animate={{
              width: i === index ? 20 : 10,
              height: 10,
              opacity: i === index ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
