"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

const cards: CardItem[] = [
  {
    title: "Virtual Machine",
    description: "Deploy scalable virtual machines in seconds.",
    image: "/images/vm.jpg",
    href: "/products/virtual-machine",
  },
  {
    title: "Load Balancer",
    description: "Distribute traffic globally with high availability.",
    image: "/images/lb.jpg",
    href: "/products/load-balancer",
  },
  {
    title: "Kubernetes",
    description: "Manage containerized workloads efficiently.",
    image: "/images/k8s.jpg",
    href: "/products/kubernetes",
  },
  {
    title: "Virtual Machine",
    description: "Deploy scalable virtual machines in seconds.",
    image: "/images/vm.jpg",
    href: "/products/virtual-machine",
  },
  {
    title: "Load Balancer",
    description: "Distribute traffic globally with high availability.",
    image: "/images/lb.jpg",
    href: "/products/load-balancer",
  },
  {
    title: "Kubernetes",
    description: "Manage containerized workloads efficiently.",
    image: "/images/k8s.jpg",
    href: "/products/kubernetes",
  },
];

export default function ProductCardCarousel() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll ONE card per click
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLDivElement>("[data-card]");
    if (!card) return;

    const gap = 24; // gap-6 = 24px
    const scrollAmount = card.offsetWidth + gap;

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
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 lg:overflow-x-hidden md:overflow-x-hidden lg:px-8 md:px-8 px-4"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            data-card
            onClick={() => router.push(card.href)}
            className="relative min-w-[320px] h-[400px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm opacity-90">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex justify-center gap-3 mt-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`
      ripple
      p-2 rounded-full border
      transition-all duration-300
      active:scale-95
      bg-gcxPrimary
      ${canScrollLeft
              ? "hover:bg-gcxPrimary/80"
              : "opacity-40 cursor-not-allowed"
            }
    `}
        >
          <ChevronLeft className="text-white"/>
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`
      ripple
      p-2 rounded-full border
      transition-all duration-300
      active:scale-95
      bg-gcxPrimary
      ${canScrollRight
              ? "hover:bg-gcxPrimary/80"
              : "opacity-40 cursor-not-allowed"
            }
    `}
        >
          <ChevronRight className="text-white"/>
        </button>
      </div>
    </div>
  );
}