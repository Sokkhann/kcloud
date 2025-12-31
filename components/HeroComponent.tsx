"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./animations/ScrolReveal";

interface HeroProps {
  height?: string;
  image: string;
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
      className={`relative w-full ${height} flex items-center justify-center text-center overflow-hidden`}
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
        <div className="relative z-10 max-w-7xl mx-auto  text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold mb-4">
              {title}
            </h1>
            <p className="lg:text-lg text-base mb-8 px-6 ">{description}</p>
          </div>

          <div className="flex items-center justify-center md:gap-4  gap-2 mt-4 px-6">
            {showGetStarted && (
              <Link
                href="https://stack-console.cloudlab.cam"
                className="text-white w-2/3 sm:w-auto bg-gcxprimary font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] text-center"
              >
                Get Started
              </Link>
            )}
            {showContactSales && (
              <Link
                href="/contact-us"
                className="text-gcxprimary w-2/3 sm:w-auto bg-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)] text-center"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
