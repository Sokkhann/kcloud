import { customerOverview } from '@/type/customerOverview';
import React from 'react'

export default function PartnerCard() {
    const customers = customerOverview
    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className={`group relative h-100 rounded-2xl w-full p-6 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden bg-white`}
                    >
                        {/* --- INITIAL STATE: LOGO MIDDLE --- */}
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-150 group-hover:blur-sm">
                            <div className="flex items-center justify-center p-2">
                                <img
                                    src={customer.logo}
                                    alt={customer.title}
                                    className="w-32 h-32 object-contain transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* --- INITIAL STATE: NAME BOTTOM RIGHT --- */}
                        <div className="absolute bottom-0 right-0 p-4 bg-gcxPrimary/20 transition-all duration-500 group-hover:opacity-0 rounded-tl-2xl">
                            <span className="font-semibold text-gcxPrimary">
                                {customer.title}
                            </span>
                        </div>

                        {/* --- HOVER STATE: CONTENT REVEAL --- */}
                        <div className="opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 h-full flex flex-col">
                            {/* Logo & Name Next to each other */}
                            <img
                                src={customer.logo}
                                alt={customer.title}
                                className="w-32 h-32 object-contain opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <p className=" font-semibold text-gray-700">{customer.title}</p>


                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                {customer.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="mt-auto">
                                <button className="flex items-center gap-2 text-sm font-semibold text-gcxPrimary hover:text-gcxPrimary transition-colors">
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
