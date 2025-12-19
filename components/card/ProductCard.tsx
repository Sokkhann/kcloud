import React from 'react'
import {icons} from "lucide-react";
import { ProductListProps } from '@/type/dataTypes'

export default function ProductCard({ name, description, icon, path }: ProductListProps) {

  const IconComponent = icons[icon];
  return (
    <div>
      <a
        data-card
        href={path}
        className="relative min-w-[320px] h-[320px] rounded-2xl bg-white cursor-pointer group transition-all duration-500 flex flex-col items-center p-8 border border-gray-100 hover:shadow-lg hover:shadow-gcxPrimary/60"
      >

        {/* --- 2. Middle Section: Layered Circle Setup --- */}
        <div className="relative z-10 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center transition-all duration-500">
            {/* The Icon (Scaled to fit nicely) */}
            <IconComponent
              size={44}
              strokeWidth={2}
              className="text-gray-700 group-hover:text-gcxPrimary transition-colors duration-300"
            />
          </div>
        </div>

        {/* --- 3. Bottom Section: Content --- */}
        <div className="relative z-10 text-center flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-700 group-hover:text-gcxPrimary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>

          {/* Optional: Visual Indicator for Clickability */}
          <div className="mt-auto pt-4 flex justify-center">
            <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:w-16 group-hover:bg-gcxPrimary transition-all duration-500" />
          </div>
        </div>
      </a>
    </div>
  )
}
