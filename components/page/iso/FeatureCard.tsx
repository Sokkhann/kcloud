import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description,
  bgColor = "bg-green-100"
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start">
      <div className={`${bgColor} rounded-lg p-8 mb-4 w-full flex items-center justify-center min-h-[200px]`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
