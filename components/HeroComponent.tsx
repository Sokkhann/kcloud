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
      className={`relative w-screen ${height} flex items-center justify-center text-center overflow-hidden`}
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
      <div className="relative z-10 max-w-7xl  text-white">
        <h1 className="xl:text-7xl md:text-5xl text-4xl font-bold mb-4">{title}</h1>
        <p className="text-base md:text-lg mb-8 md:px-0 px-6">{description}</p>

        <div className="flex items-center justify-center gap-4">
          {showGetStarted && (
            <Link
              href="/get-started"
              className="text-white bg-green-800 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)]"
            >
              Get Started
            </Link>

          )}
          {showContactSales && (
            <Link
              href="/contact-sale"
              className="text-green-950 bg-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)]"
            >
              Contact Sales
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
