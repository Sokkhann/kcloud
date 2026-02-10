"use client"

import { CardProps } from '@/type/customerOverview';
import { motion } from 'framer-motion';
import React from 'react'

interface LogoCarouselProps {
    logo: {
        logo: string;
        title: string;
    }[]
}

export default function PartnerCarousel({ logo }: LogoCarouselProps) {
    const duplicatedLogos = [...logo, ...logo];

    return (
        <div className="relative w-full overflow-hidden lg:py-24 py-12">
            {/* Soft gradient fade on the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

            <motion.div
                className="flex w-max items-center"
                animate={{
                    x: ["0%", "-50%"], // Move half the total width
                }}
                transition={{
                    ease: "linear",
                    duration: 50, // Adjust speed here (higher = slower)
                    repeat: Infinity,
                }}
                // The magic "Pause on Hover" logic
                whileHover={{ animationPlayState: "paused" }}
            >
                {duplicatedLogos.map((partner, index) => (
                    <div
                        key={index}
                        className="mx-8 flex flex-col items-center justify-center transition-transform hover:scale-115 duration-300"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.title}
                            className="lg:h-12 md:h-12 h-8 w-auto min-w-[120px] object-contain transition-all"
                        />
                        {/* Optional: Tiny caption for the logo */}
                        <span className="mt-2 text-xs font-medium text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                            {partner.title}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
