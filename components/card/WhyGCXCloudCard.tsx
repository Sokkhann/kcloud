"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function WhyGCXCloudCard({ title, description, image }: CardProps) {
  return (
    <div className="flex flex-col p-8 rounded-2xl w-full h-full min-h-[350px] relative overflow-hidden group">

      {/* Section 1: Image at the Top (Left Aligned) */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          />
          {/* Decorative background behind image */}
          <div className="absolute -inset-2 bg-gcxPrimary/10 rounded-2xl -z-10 scale-95 group-hover:scale-105 transition-all" />
        </div>
      </div>

      {/* Section 2: Text Content (Stacked below image) */}
      <div className="relative z-10 space-y-3 text-center"> {/* Changed text-center to text-left */}
        <h3 className=" font-bold text-gray-800 group-hover:text-gcxPrimary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
