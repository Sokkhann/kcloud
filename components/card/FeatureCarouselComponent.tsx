"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavbarProducts } from "@/type/dataTypes";

interface FeatureCarouselProps {
  items: NavbarProducts[];
}

const FeatureCarouselComponent: React.FC<FeatureCarouselProps> = ({
  items,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-84 overflow-hidden rounded-2xl group">
      {/* Image */}
      <div className="relative h-68 w-full overflow-hidden rounded-2xl">
        <Image
          src={items[current].image}
          alt={items[current].name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
        />
      </div>

      {/* Title overlay */}
      <div
        className={
          "absolute bottom-3 left-0 flex justify-center w-full text-center font-semibold transition-colors duration-300 " +
          "text-gray-700 group-hover:text-gcxPrimary"
        }
      >
        <div className="w-4/5">{items[current].name}</div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 bottom-2 p-2 bg-gcxPrimary rounded-full"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 bottom-2 p-2 bg-gcxPrimary rounded-full"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 w-full flex justify-center mt-6 gap-1.5">
        {items.map((_, i) => {
          const isActive = i === current;

          // Auto shrink dots if many items
          const size = items.length > 6 ? 6 : 10;
          const activeSize = items.length > 6 ? 12 : 20;

          return (
            <motion.div
              key={i}
              className={`rounded-full ${
                isActive ? "bg-white" : "bg-gray-400"
              }`}
              initial={false}
              animate={{
                width: isActive ? activeSize : size,
                height: size,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCarouselComponent;
