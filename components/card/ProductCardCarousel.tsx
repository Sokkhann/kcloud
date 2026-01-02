"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, icons } from "lucide-react";
import { ProductListProps } from "@/type/dataTypes";
import Link from "next/link";

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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {productMenu.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

// product cards sign icon as background 
const ProductCard = ({ product }: { product: ProductListProps }) => {
  const Icon = icons[product.icon];
  return (
    <Link href={product.path} className="group relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-gcxPrimary/60 aspect-[4/3] sm:aspect-square p-5 md:p-8">
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="lg:text-2xl md:text-2xl text-lg font-bold text-gray-700 group-hover:text-gcxPrimary mb-4">{product.name}</h3>
        <p className="text-gray-500 leading-relaxed mb-auto">
          {product.description}
        </p>
        <Icon className="w-12 h-12 self-end text-gray-200 group-hover:text-gcxprimary transition-all" />
      </div>
    </Link>
  );
};