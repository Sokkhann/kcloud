import React from "react";
import Image from "next/image";
import { ImageTitleDescCardPorps } from "@/type/productDetail";

interface SwitchCardProps extends ImageTitleDescCardPorps {
  isActive: boolean;
}

export default function SwitchCard({
  image,
  title,
  description,
  isActive,
}: SwitchCardProps) {
  return (
    <div
      className={`relative group w-full max-w-sm bg-white rounded-[60px] overflow-hidden cursor-pointer border-6 transition-all duration-500 border-white
        ${isActive ? "h-[440px]" : "h-[260px]"}
      `}
    >
      {/* Description layer */}
      <div
        className={`absolute top-[60%] bottom-0 px-10 pt-8 transition-opacity duration-500
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      >
        <h3 className="text-2xl font-semibold mb-1 text-gray-700">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Image + overlay */}
      <div className="absolute w-full h-64 transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg rounded-b-[64px]"
        />

        {/* Title overlay on image */}
        <div
          className={`absolute bottom-0 left-0 right-0 text-white text-center py-6 transition-opacity duration-500
            ${isActive ? "opacity-0" : "opacity-100"}
          `}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}
