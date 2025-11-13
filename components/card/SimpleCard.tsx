import { SimpleCardProps } from "@/type/dataTypes";
import React from "react";

export default function SimpleCard({ title, desc }: SimpleCardProps) {
  return (
    <div className="bg-white w-full rounded-xl shadow-sm border hover:shadow-md transition p-8 flex flex-col justify-between h-full">
        <h3 className="lg:text-2xl md:text-2xl text-lg font-bold text-gray-700 mb-3 ">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base flex-grow">
          {desc}
        </p>
      </div>
  );
} 
