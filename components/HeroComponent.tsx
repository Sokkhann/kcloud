"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  height?: string;
  image: string; // path inside public folder
  title: string;
  description: string;
  showGetStarted?: boolean;
  showContactSales?: boolean;
}

export default function HeroComponent({
  height = "h-[500px]",
  image = "/hero-bg.png",
  title,
  description,
  showGetStarted = false,
  showContactSales = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-screen max-w-[100vw] ${height} flex items-center justify-center text-center`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl  text-white">
        <h1 className="text-7xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-base md:text-lg mb-8">{description}</p>

        <div className="flex items-center justify-center gap-4">
          {showGetStarted && (
            <Link
              href="/get-started"
              className="bg-white text-green-800 font-semibold px-6 py-3 rounded-lg hover:shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
          )}
          {showContactSales && (
            <Link
              href="/contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300"
            >
              Contact Sales
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
