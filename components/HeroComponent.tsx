"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  height?: string;
  image: string | null;
  topImage?: string | null;
  title?: string;
  description: string;
  showGetStarted?: boolean;
  showContactSales?: boolean;
}

export default function HeroComponent({
  height = "h-[500px]",
  image = "/hero-bg.png",
  topImage = "/partner-icon.png",
  title,
  description,
  showGetStarted = false,
  showContactSales = false,
}: HeroProps) {
  const isDarkBg = !!image;
  const titleColor = isDarkBg ? "text-white" : "text-gcxPrimary";
  const descColor = isDarkBg ? "text-white opacity-90" : "text-gray-600";
  const bottomQuoteTranslate = topImage ? "translate-y-60" : "translate-y-40";

  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center text-center overflow-hidden ${!isDarkBg ? "bg-gradient-to-b from-gcxPrimary/20 to-white" : ""
        }`}
    >
      {/* 1. IMAGE BACKGROUND & OVERLAY */}
      {isDarkBg && (
        <>
          <Image
            src={image}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
        </>
      )}

      {/* 2. TEXT QUOTE BACKGROUND (Only shows if NO image) */}
      {!isDarkBg && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex justify-between items-center px-10">
          {/* Opening Quote */}
          <span className="text-[300px] font-serif font-black text-gcxPrimary/40 leading-none translate-x-40 -translate-y-10">
            {/* “ */}
          </span>

          {/* Closing Quote with Dynamic Translation */}
          <span className={`text-[300px] font-serif font-black text-gcxPrimary/40 leading-none -translate-x-40 ${bottomQuoteTranslate}`}>
            {/* ” */}
          </span>
        </div>
      )}

      {/* 3. CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {!isDarkBg && topImage && (
          <div className="mb-8 animate-fade-in-down flex justify-center">
            <Image
              src={topImage}
              alt="Section Icon"
              width={120}
              height={120}
              className="object-contain drop-shadow-md"
            />
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          <h1 className={`lg:text-5xl md:text-5xl text-3xl font-bold mb-4 ${titleColor}`}>
            {title}
          </h1>
          <p className={`lg:text-lg text-base mb-8 px-6 ${descColor}`}>
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center md:gap-4 gap-2 mt-4">
          {showGetStarted && (
            <Link
              href="https://stack-console.cloudlab.cam"
              className="text-white w-40 bg-gcxprimary font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg text-center"
            >
              Get Started
            </Link>
          )}
          {showContactSales && (
            <Link
              href="/contact-us"
              className={`w-40 font-semibold py-3 rounded-full transition-all duration-300 text-center border ${isDarkBg
                ? "bg-white text-gcxprimary border-transparent"
                : "bg-transparent text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
