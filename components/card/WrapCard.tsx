import React from "react";
import Image from "next/image";
import { ImgTitleDescCardProps } from "@/type/dataTypes";

interface Props {
  card: ImgTitleDescCardProps
}

export default function WrapCard({card}: Props) {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden p-4 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Title Section */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
        {card.title}
      </h2>

      {/* Description Section */}
      <p className="mt-2 text-sm text-gray-600 text-center">{card.desc}</p>
    </div>
  );
}
