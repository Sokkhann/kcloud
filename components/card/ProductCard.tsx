import React from 'react'

interface ProductCardProps {
    logo: React.ReactNode;
    title: string;
    description: string;
}

// CardComponent.jsx
export default function ProductCard({logo, title, description}: ProductCardProps) {
  return (
    <div className="w-75 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center">
      {/* Logo section */}
      <div className="w-18 h-18 flex items-center justify-center bg-green-900 rounded-lg mb-4">
        {/* You can replace this with your logo image */}
        {logo}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
}
