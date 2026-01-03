import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavbarProducts } from "@/type/dataTypes";

interface FeatureCarouselProps {
  items: NavbarProducts[];
}

const FeatureCarouselComponent: React.FC<FeatureCarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, show a gray box. This PREVENTS the hydration crash.
  if (!mounted) {
    return <div className="h-84 w-full bg-gray-100 rounded-2xl animate-pulse" />;
  }

  // Now we safely check for data
  if (!items || items.length === 0) {
    return (
      <div className="h-84 flex items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <p className="text-gray-400 text-sm">No features available</p>
      </div>
    );
  }

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
    // Added items.length dependency for safety
  }, [items.length]);

  // --- SAFETY GUARD 2: Access properties safely ---
  // Using title || name because your mock uses title but your UI uses name
  const activeItem = items[current];
  const displayName = activeItem?.title || activeItem?.name || "Cloud Service";

  return (
    <div className="relative h-84 overflow-hidden rounded-2xl group">
      {/* Image */}
      <div className="relative h-68 w-full overflow-hidden rounded-2xl bg-gray-100">
        {activeItem?.image ? (
          <Image
            src={activeItem.image}
            alt={displayName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200" />
        )}
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-3 left-0 flex justify-center w-full text-center font-semibold transition-colors duration-300 text-gray-700 group-hover:text-gcxPrimary">
        <div className="w-4/5 line-clamp-1">{displayName}</div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 bottom-2 p-2 bg-gcxPrimary rounded-full hover:bg-opacity-90 transition-all"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 bottom-2 p-2 bg-gcxPrimary rounded-full hover:bg-opacity-90 transition-all"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 w-full flex justify-center mt-6 gap-1.5">
        {items.map((_, i) => {
          const isActive = i === current;
          const size = items.length > 6 ? 6 : 10;
          const activeSize = items.length > 6 ? 12 : 20;

          return (
            <motion.div
              key={i}
              className={`rounded-full ${isActive ? "bg-white" : "bg-gray-400"}`}
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