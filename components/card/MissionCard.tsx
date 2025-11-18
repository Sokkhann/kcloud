"use client";

import { IconCardProps } from "@/type/dataTypes";
import React from "react";

export default function MissionCard({
  icon: Icon,
  title,
  desc,
}: IconCardProps) {
  return (
    <div className="">
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8 text-gcxprimary" />
          <h3 className="text-lg font-bold text-gray-700">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-start">{desc}</p>
      </div>
    </div>
  );
}
