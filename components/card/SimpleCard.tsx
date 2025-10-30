import { SimpleCardProps } from "@/data/productDetail";
import React from "react";

export default function SimpleCard({ title, desc }: SimpleCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
        <h3 className="text-2xl font-bold text-gray-700 mb-3 ">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg flex-grow">
          {desc}
        </p>
      </div>
  );
} 
