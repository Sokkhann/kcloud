"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function WhyGCXCloudCard({ title, description, image }: CardProps) {
  return (
    <div className="flex justify-between p-8 rounded-2xl w-full h-full relative overflow-hidden group bg-white hover:shadow-md hover:shadow-gcxPrimary/60 duration-300">

      {/* Section 1: Image at the Top (Left Aligned) */}
      <div className="relative z-10 space-y-3 w-2/3">
        <h3 className=" font-bold text-gray-800 group-hover:text-gcxPrimary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Section 2: Text Content (Stacked below image) */}
      <div className="w-1/3 mb-6 flex justify-end items-center">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>
      </div>

    </div>
  );
}
