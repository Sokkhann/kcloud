"use client";
import { ProblemSolutionSwitchCardProps } from "@/data/productDetail";
import React from "react";

export default function StackCard({
  proTitle,
  proDesc,
  solTitle,
  solDesc,
}: ProblemSolutionSwitchCardProps) {
  return (
    <div className="relative w-full max-w-md h-[340px] cursor-pointer group overflow-hidden rounded-2xl">
      {/* --- Card 1: Problem (top layer by default) --- */}
      <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-br  from-green-950 via-green-800 to-green-600 z-20 rounded-2xl shadow-lg transition-all duration-500 group-hover:translate-y-[80px] group-hover:z-10 p-6">
        {/* Content (only visible when top) */}
        <div className="transition-opacity duration-500 opacity-100 group-hover:opacity-0">
          <h3 className="text-3xl font-bold text-white mb-2">
            {proTitle}
          </h3>
          <p className="text-white text-lg leading-relaxed">{proDesc}</p>
        </div>

        {/* Label only shows when card is bottom */}
        <div className="absolute bottom-6 left-8 text-white font-semibold text-lg transition-opacity duration-300">
          Problem
        </div>
      </div>

      {/* --- Card 2: Solution (bottom layer by default) --- */}
      <div className="absolute bottom-0 left-0 w-full h-[260px] bg-white z-10 rounded-2xl shadow-md transition-all duration-500 group-hover:-translate-y-[80px] group-hover:z-20 p-6">
        {/* Content (only visible when top) */}
        <div className="transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <h3 className="text-3xl font-bold text-gray-700 mb-2">
            {solTitle}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            {solDesc}
          </p>
        </div>

        {/* Label only shows when card is bottom */}
        <div className="absolute bottom-6 left-8 text-gray-700 font-semibold text-lg transition-opacity duration-300">
          Solution
        </div>
      </div>
    </div>
  );
}
