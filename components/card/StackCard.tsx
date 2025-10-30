"use client";
import { ProblemSolutionSwitchCardProps } from "@/data/productDetail";
import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function StackCard({
  proTitle,
  proDesc,
  solTitle,
  solDesc,
}: ProblemSolutionSwitchCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSolution, setShowSolution] = useState(false);

  const handleClick = () => {
    if (isMobile) setShowSolution(!showSolution);
  };

  return (
  <div
    className="relative left-1/2 -translate-x-1/2 w-full max-w-md h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] cursor-pointer group overflow-hidden rounded-2xl"
    onClick={handleClick}
  >
    {/* --- Card 1: Problem --- */}
    <div
      className={`absolute top-0 left-0 w-full h-[70%] sm:h-[72%] md:h-[75%] bg-gradient-to-br from-green-950 via-green-800 to-green-600 rounded-2xl lg:shadow-md md:shadow-sm shadow-transparent p-4 sm:p-5 md:p-6 transition-all duration-500
        ${isMobile
          ? showSolution
            ? "translate-y-[80px] z-10"
            : "translate-y-0 z-20"
          : "group-hover:translate-y-[80px] group-hover:z-10 z-20"
        }`}
    >
      <div
        className={`transition-opacity duration-500
          ${isMobile
            ? showSolution
              ? "opacity-0"
              : "opacity-100"
            : "opacity-100 group-hover:opacity-0"
          }`}
      >
        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2">
          {proTitle}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-white">
          {proDesc}
        </p>
      </div>

      <div className="absolute bottom-4 left-6 text-white font-semibold text-sm sm:text-base md:text-lg">
        Problem
      </div>
    </div>

    {/* --- Card 2: Solution --- */}
    <div
      className={`absolute bottom-0 left-0 w-full h-[70%] sm:h-[72%] md:h-[75%] bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 transition-all duration-500
        ${isMobile
          ? showSolution
            ? "translate-y-[-80px] z-20"
            : "translate-y-0 z-10"
          : "group-hover:-translate-y-[80px] group-hover:z-20 z-10"
        }`}
    >
      <div
        className={`transition-opacity duration-500
          ${isMobile
            ? showSolution
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
          }`}
      >
        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 mb-2">
          {solTitle}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 leading-relaxed">
          {solDesc}
        </p>
      </div>

      <div className="absolute bottom-4 left-6 text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
        Solution
      </div>
    </div>
  </div>
);

}
