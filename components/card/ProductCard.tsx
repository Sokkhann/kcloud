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

export default function ProductCard({
  logo,
  title,
  description,
  link,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="relative bg-white rounded-2xl transition-all duration-300 text-center flex flex-col items-center w-full p-6 pt-14 flex-wrap h-full">
      {/* Floating Logo */}
      <div className="absolute -top-10 flex items-center justify-center bg-white rounded-full shadow-md w-20 h-20">
        <div className="flex items-center justify-center bg-gcxprimary rounded-full w-16 h-16 text-white">
          {logo}
        </div>
      </div>

      {/* Title */}
      <p className="text-lg font-semibold text-gray-800 mt-4">
        {title}
      </p>

      {/* Description */}
      <p className="text-gray-600 mt-2 mb-6 px-2 sm:px-4">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={() =>
          router.push(
            link || `/products/${title.toLowerCase().replace(/\s+/g, "-")}`
          )
        }
        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 border border-gcxprimary text-gcxprimary rounded-full hover:bg-gcxprimary hover:text-white transition-all text-sm sm:text-base w-full sm:w-auto"
      >
        View Detail
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
