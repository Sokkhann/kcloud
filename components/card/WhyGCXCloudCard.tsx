"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function ResponsiveCard({ image, title, description }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-2xl w-full">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      {/* Title */}
      <h3 className="lg:text-2xl text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
