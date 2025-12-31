"use client"

import { ArrowRight, ChevronLeft, ChevronRight, Cloud, Cpu, Film, Globe, Server, Shield, ShieldCheck, Star, Ticket } from 'lucide-react';
import React, { useRef, useState } from 'react'

const packages = [
    {
        name: "Starter Cloud",
        price: "29",
        path: "#",
        description: "Ideal for small applications and staging environments with high-speed SSD storage.",
        icon: "/images/cloud-node.jpg", // The image for the card
        lucideIcon: <Cloud className="text-gcxprimary" size={24} /> // The service icon
    },
    {
        name: "Enterprise Node",
        price: "199",
        path: "#",
        description: "High-performance dedicated resources with priority bandwidth and 99.99% uptime.",
        icon: "/images/server-rack.jpg",
        lucideIcon: <Server className="text-gcxprimary" size={24} />
    },
    {
        name: "Global Network",
        price: "89",
        path: "#",
        description: "Dedicated fiber connectivity with low-latency routing across international backbones.",
        icon: "/images/fiber-optics.jpg",
        lucideIcon: <Globe className="text-gcxprimary" size={24} />
    },
    {
        name: "Security Shield",
        price: "59",
        path: "#",
        description: "Advanced DDoS mitigation and firewall management to keep your infrastructure safe.",
        icon: "/images/security-center.jpg",
        lucideIcon: <Shield className="text-gcxprimary" size={24} />
    }
];

export default function ListingOverviewPackage() {
    return (
        <div className="flex gap-8 overflow-x-auto py-12 px-6 no-scrollbar snap-x">
            {packages.map((pkg, i) => (
                <div key={i} className="min-w-[290px] snap-center group relative">
                    <div className="bg-white h-[400px] rounded-2xl border border-gray-100 flex flex-col p-8 relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gcxprimary/60 hover:-translate-y-4">

                        {/* Massive Background Dollar Sign */}
                        <div className="absolute -top-6 -right-4 text-[180px] font-black text-gray-100 transition-all duration-700 group-hover:text-gcxprimary/20 group-hover:scale-110 pointer-events-none select-none">
                            $
                        </div>

                        <div className="flex-grow relative z-10">
                            <h4 className="text-2xl font-bold text-gray-700 mb-4 uppercase tracking-tighter">
                                {pkg.name}
                            </h4>
                            {/* <div className="h-1 w-10 bg-gcxprimary mb-6 rounded-full group-hover:w-20 transition-all duration-500" /> */}
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {pkg.description}
                            </p>
                        </div>
                        <div className="pt-6 border-t border-gray-50 relative z-10">
                            <p className="text-sm font-bold text-gcxPrimary mb-1">Starting From</p>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-6xl font-bold text-gray-700 group-hover:text-gcxprimary transition-colors">${pkg.price}</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                        </div>

                        <a href={pkg.path} className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gcxPrimary rounded-full flex items-center justify-center group-hover:w-32 group-hover:bg-gcxprimary group-hover:text-white transition-all duration-300 overflow-hidden">
                                <span className="hidden text-sm font-semibold group-hover:block font-bold whitespace-nowrap ml-2 text-white">View More</span>
                                <ArrowRight className="w-5 h-5 shrink-0 text-white" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
