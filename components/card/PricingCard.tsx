"use client"

import { useRouter } from "next/navigation";
import React from "react";

interface PricingProps {
  title: string;
  price: string;
  subTitle: string;
  desc: string[];
  id: string;
  buttonLabel?: string;
}

export default function PricingCard({
  title,
  price,
  subTitle,
  desc,
  id,
  buttonLabel = "View pricing"
}: PricingProps) {
  const route = useRouter();

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden flex flex-col h-[600px] bg-gcxprimary/10">
      {/* Top Section */}
      <div className="p-8 text-left">
        <h3 className="text-lg font-bold text-gcxprimary">{title}</h3>
        <p className="text-base text-gray-600 mt-2 font-bold">Starting at</p>
        <div className="mt-4">
          <div className="text-4xl font-bold text-gcxprimary mb-4">
            ${price}
            <span className="text-base">/month</span>
          </div>
          <p className="text-gray-600 border-b border-dashed border-green-950 pb-2">
            {subTitle}
          </p>
        </div>
      </div>

      {/* Middle Space Section */}
      {/* description section */}
      <div className="flex-1 border-gray-200 px-8 text-left text-gray-600">
        <ul className="space-y-4">
          {desc.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 flex-shrink-0 mt-0.5 text-gcxprimary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="group">
        <div className="w-full text-left py-5 px-8 bg-gcxprimary">
          <span onClick={() => route.push(`/pricing/${id}`)} className="relative inline-block text-white text-base font-medium">
            <span className="inline-block cursor-pointer">{buttonLabel}</span>
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </div>
      </div>
    </div>
  );
}
