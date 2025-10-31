"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  link?: string; // optional custom route
}

export default function ProductCard({ logo, title, description, link }: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="relative bg-white rounded-2xl lg:shadow-md md:shadow-md shadow-sm transition-all duration-300 text-center flex flex-col items-center w-72 p-6 pt-14">
      {/* Floating Logo */}
      <div className="absolute -top-10 flex items-center justify-center bg-white rounded-full shadow-md w-20 h-20">
        <div className="flex items-center justify-center bg-green-900 rounded-full w-16 h-16 text-white">
          {logo}
        </div>
      </div>

      {/* Title */}
      <p className="text-lg font-semibold text-gray-800 mt-4">{title}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 mb-6 px-2">{description}</p>

      {/* Button */}
      <button
        onClick={() => router.push(link || `/products/${title.toLowerCase().replace(/\s+/g, "-")}`)}
        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all"
      >
        Learn More
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
