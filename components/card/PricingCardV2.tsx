"use client"

import { ArrowRight, DollarSign } from 'lucide-react';
import React from 'react'

interface PackageCardProps {
    title: string;
    description: string;
    path: string;
}

export default function HoverArrowCard({ title, description, path }: PackageCardProps) {
    return (
        <a href={path} className="group relative block overflow-hidden rounded-2xl hover:shadow-lg hover:shadow-gcxPrimary/40 transition-all duration-500">
            <div className="relative rounded-2xl transition-all duration-300 bg-gray-100 overflow-hidden">

                {/* Background Dollar Text ($) */}
                <div className="absolute right-0 -bottom-12 select-none pointer-events-none">
                    <span className="text-[200px] font-black text-gray-200/50 block transform transition-all duration-[1000ms] ease-in-out group-hover:text-gcxPrimary/20">
                        $
                    </span>
                </div>

                <div className="p-6 flex flex-col justify-between h-[300px] relative z-10">
                    {/* Top Section */}
                    <div className="space-y-2">
                        <h3 className="lg:text-xl md:text-xl text-lg font-semibold group-hover:text-gcxPrimary text-gray-700 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-600 line-clamp-4">{description}</p>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-6 overflow-hidden">
                        <div className="flex items-center gap-2 transition-all duration-500 ease-out 
                            -translate-x-[85px] group-hover:translate-x-0">
                            <span className="font-semibold text-gcxPrimary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View Price
                            </span>
                            <ArrowRight className="w-5 h-5 font-bold text-gray-800 group-hover:text-gcxPrimary shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
