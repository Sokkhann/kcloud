"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { IconCardProps } from "@/type/dataTypes";
import { useMediaQuery } from "react-responsive";

export default function ProductCard({
  icon: Icon,
  title,
  desc,
  link,
}: IconCardProps) {
  const [mounted, setMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default size for server (to avoid mismatch)
  let iconSize = 48;
  if (mounted) {
    if (isMd) iconSize = 56;
    if (isLg) iconSize = 64;
  }
  return (
    <div className="relative bg-white rounded-2xl transition-all duration-300 text-center flex flex-col items-center w-full p-6 flex-wrap h-full">
      <Icon className="text-gcxprimary" size={iconSize} />

      {/* Title */}
      <p className="text-lg font-semibold text-gray-800 mt-4">{title}</p>

      {/* Description */}
      <p className="text-gray-600 mt-2 mb-6 px-2 sm:px-4">{desc}</p>

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
