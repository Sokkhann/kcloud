import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  isActive: boolean;
  onHover: () => void;
}

export default function WrapCard({
  image,
  title,
  desc,
  isActive,
  onHover,
}: CardProps) {
  return (
    <div
      onMouseEnter={onHover}
      className={`relative w-72 bg-white rounded-2xl shadow-md p-4 transition-all duration-700 ease-in-out ${
        isActive ? "shadow-2xl scale-[1.02]" : "shadow-md scale-100"
      }`}
      style={{ overflow: "visible" }} // Allow image to pop outside
    >
      {/* Image Section */}
      <div
        className={`relative h-40 w-full rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
          isActive
            ? "-translate-y-16 scale-80 z-20 shadow-2xl"
            : "translate-y-0 scale-100 z-10"
        }`}
        style={{ position: "relative" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Title & Desc Section */}
      <div
        className={`mt-4 text-center transition-all duration-700 ease-in-out ${
          isActive ? "-translate-y-20" : "translate-y-0"
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p
          className={`text-sm text-gray-500 mt-2  ${
            isActive ? "opacity-100 max-h-20 transition-all duration-700 ease-in" : "opacity-0 max-h-0 transition-all duration-100 ease-out"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
