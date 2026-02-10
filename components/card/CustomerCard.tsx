"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardProps } from "@/type/customerOverview";

export default function CustomerCard({ title, description, logo }: CardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  return (
    <div className="lg:w-[410px] md:w-[310px] bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-300 flex flex-col justify-between items-center">
      {/* Top Section */}
      <div>
        <div className="flex flex-col gap-3 mb-3">
          <Image
            src={logo}
            alt={title}
            width={100}
            height={100}
            className="rounded-lg"
          />
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        </div>
        {/* Description with toggle */}
        <div className="w-full">
          <p
            className={`text-gray-600 text-wrap transition-all duration-300 text-base ${
              expanded ? "line-clamp-none" : "line-clamp-4"
            }`}
          >
            {description}
          </p>

          {/* {description.length > 150 && ( // only show button if text is long
            <button
              onClick={toggleExpand}
              className="mt-2 text-gray-600 text-base font-semibold hover:underline focus:outline-none"
            >
              {expanded ? "See less" : "See more"}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}
