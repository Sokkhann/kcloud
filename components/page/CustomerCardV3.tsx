"use client"

import { CardProps } from "@/type/customerOverview";

interface CustomerProps {
    customers: CardProps;
}

export const TestimonialCard = ({ customers }: CustomerProps) => (
    <div className="min-w-[320px] group cursor-pointer py-4">
        <div className="relative">
            {/* Main Quote Bubble */}
            <div className="bg-gray-50 rounded-[2rem] rounded-bl-none p-10 transition-all duration-500 group-hover:bg-gcxprimary group-hover:shadow-2xl group-hover:shadow-gcxprimary/30">
                {/* Quote Icon */}
                <div className="mb-6">
                    <svg
                        width="45" height="36" viewBox="0 0 45 36" fill="none"
                        className="fill-gray-300 group-hover:fill-white/30 transition-colors"
                    >
                        <path d="M13.2 36H0L8.4 0H20.4L13.2 36ZM37.2 36H24L32.4 0H44.4L37.2 36Z" />
                    </svg>
                </div>

                <p className="text-2xl font-semibold text-gray-800 leading-tight tracking-tight group-hover:text-white transition-colors">
                    {customers.description}
                </p>
            </div>

            {/* The Profile Notch Section */}
            <div className="flex">
                                {/* Profile Container */}
                <div className="bg-white pr-8 pt-4 rounded-tr-[2rem] flex items-center gap-4 relative">
                    {/* These divs create the "inner" rounded corner effect */}
                    <div className="absolute top-0 -right-8 w-8 h-8 bg-white">
                        <div className="w-full h-full bg-gray-50 group-hover:bg-gcxprimary rounded-tl-[2rem] transition-colors" />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <img
                                src={customers.logo || "/api/placeholder/100/100"}
                                alt={customers.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm leading-none mb-1">
                                {customers.title}
                            </h4>
                            <p className="text-gray-400 text-xs font-medium">
                                @{customers.title.toLowerCase().replace(/\s/g, '')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filler to complete the bottom curve */}
                <div className="flex-grow bg-gray-50 group-hover:bg-gcxprimary rounded-br-[2rem] transition-colors" />
            </div>
        </div>
    </div>
);