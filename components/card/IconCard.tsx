import React from "react";
import { IconCardProps } from "@/data/productDetail";

export default function IconCard ({icon: Icon, title, desc, align} : IconCardProps) {
  return (
    <div className={`${align} flex flex-col bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 h-full gap-4`}>
      <Icon className="text-green-800" size={64}/>
      <h3 className="text-2xl font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-gray-600 text-lg">{desc}</p>
    </div>
  );
};

