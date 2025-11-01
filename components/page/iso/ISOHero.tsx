import React from 'react';
import Link from 'next/link';

interface ISOHeroProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function ISOHero({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Contact Sales",
  secondaryButtonLink = "/contact-sale"
}: ISOHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-green-100">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href={primaryButtonLink}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonLink}
            className="px-8 py-3 bg-white hover:bg-gray-100 text-green-900 font-semibold rounded-lg transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
