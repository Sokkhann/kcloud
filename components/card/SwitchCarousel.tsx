"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { carouselCard } from "@/type/overviewProps";

export default function SwitchCarousel() {
  const [index, setIndex] = useState(0);
  const cards = carouselCard;

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const nextIndex = (index + 1) % cards.length;

  return (
    <div className="flex flex-col items-center justify-center w-full lg:mx-0 md:px-8 px-4">
      {/* 🔹 Large Screens: Animated Card */}
      <div className="hidden lg:flex flex-col items-center justify-center w-full px-4">
        <div className="flex flex-col lg:flex-row items-end gap-4 w-full max-w-[1000px]">
          {/* Main Card */}
          <div className="flex-1 flex justify-end w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={cards[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:h-[400px] md:h-[400px] flex flex-col md:flex-row overflow-hidden rounded-2xl bg-white"
              >
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="lg:text-2xl  font-bold mb-4 text-gray-700">
                    {cards[index].title}
                  </h2>
                  <p className="text-gray-600 lg:text-base text-sm">
                    {cards[index].desc}
                  </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
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
              width={80}
              height={80}
              className="rounded-xl object-cover border-2 shadow-lg w-[80px] h-[80px]"
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

      {/* 🔹 Medium & Small Screens: Show All Cards */}
      <div  className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 w-full mt-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-56">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
