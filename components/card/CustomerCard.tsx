"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CustomerCard() {
  const cards = [
    {
      logo: "/ntc-logo.png",
      title: "GCX Cloud",
      description:
        "Yinxiang Biji China is a cross platform note taking application in Mainland China that allows users to take notes on the desktop (Win/Mac), mobile (iOS/Android), as well as on the web. With over 30 million users, Yinxiang Biji China ranks first in China in terms of paid users and retention rate.",
      href: "/products/cloud",
    },
    {
      logo: "/ntc-logo.png",
      title: "Kubernetes Service",
      description:
        "Yinxiang Biji China is a cross platform note taking application in Mainland China that allows users to take notes on the desktop (Win/Mac), mobile (iOS/Android), as well as on the web. With over 30 million users, Yinxiang Biji China ranks first in China in terms of paid users and retention rate.",
      href: "/products/kubernetes",
    },
    {
      logo: "/ntc-logo.png",
      title: "Application Hosting",
      description:
        "Yinxiang Biji China is a cross platform note taking application in Mainland China that allows users to take notes on the desktop (Win/Mac), mobile (iOS/Android), as well as on the web. With over 30 million users, Yinxiang Biji China ranks first in China in terms of paid users and retention rate.",
      href: "/products/application",
    },
    {
      logo: "/ntc-logo.png",
      title: "Application Hosting",
      description:
        "Yinxiang Biji China is a cross platform note taking application in Mainland China that allows users to take notes on the desktop (Win/Mac), mobile (iOS/Android), as well as on the web. With over 30 million users, Yinxiang Biji China ranks first in China in terms of paid users and retention rate.",
      href: "/products/application",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between h-[360px]"
        >
          {/* Top Section */}
          <div>
            <div className="flex flex-col gap-3 mb-3">
              <Image
                src={card.logo}
                alt={card.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {card.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 flex gap-2 items-center hover:underline">
            <Link
              href={card.href}
              className="text-gray-700 font-medium flex items-center gap-1"
            >
              Learn more
            </Link>
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
}
