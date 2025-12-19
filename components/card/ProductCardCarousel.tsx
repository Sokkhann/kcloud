"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { ProductListProps } from "@/type/dataTypes";

interface MenuPorps {
  productMenu: ProductListProps[];
}

export default function ProductCardCarousel({ productMenu }: MenuPorps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log("Data Resposne => ", productMenu)

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll THREE cards per click
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLDivElement>("[data-card]");
    if (!card) return;

    const gap = 24; // gap-6 = 24px
    // Calculate the width of 3 cards + the gaps between them
    const singleCardSpace = card.offsetWidth + gap;
    const scrollAmount = singleCardSpace * 3; 

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Enable / Disable buttons
  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  return (
    <div className="w-full">
      {/* Card Row */}
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-10 lg:overflow-x-hidden md:overflow-x-hidden lg:px-8 md:px-8 px-4"
      >
        {productMenu.map((card, index) => (
          <ProductCard key={index} description={card.description} icon={card.icon} path={card.path} name={card.name}/>
        ))}
      </div>

      {/* Navigation Buttons (Kept Original Logic) */}
      <div className="hidden md:flex justify-center gap-3 mt-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full border transition-all duration-300 active:scale-95 bg-gcxPrimary ${canScrollLeft ? "hover:bg-gcxPrimary/80" : "opacity-40 cursor-not-allowed"
            }`}
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded-full border transition-all duration-300 active:scale-95 bg-gcxPrimary ${canScrollRight ? "hover:bg-gcxPrimary/80" : "opacity-40 cursor-not-allowed"
            }`}
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}