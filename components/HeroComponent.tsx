"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./animations/ScrolReveal";

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
      className={`relative w-full top-[45px] ${height} flex items-center justify-center text-center overflow-hidden`}
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
      <ScrollReveal>
        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl sm:max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            {showGetStarted && (
              <Link
                href="/get-started"
                className="text-white w-2/3 sm:w-auto bg-green-800 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] text-center"
              >
                Get Started
              </Link>
            )}
            {showContactSales && (
              <Link
                href="/contact-sale"
                className="text-green-950 w-2/3 sm:w-auto bg-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)] text-center"
              >
                Contact Sales
              </Link>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

