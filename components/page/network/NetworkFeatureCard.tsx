import React from "react";

import Image from "next/image";

interface NetworkFeatureCardProps {
  image: string;
  title: string;
  description: string;
  bgColor: string;
  imageAlt?: string;
}

export default function NetworkFeatureCard({
  image,
  title,
  description,
  imageAlt = "",
}: NetworkFeatureCardProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-lg mb-4 w-full overflow-hidden relative min-h-[200px]">
        <Image
          src={image}
          alt={imageAlt || title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
