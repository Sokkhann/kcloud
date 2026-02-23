import ScrollReveal from '@/components/animations/ScrolReveal'
import { carouselCard } from '@/type/overviewProps';
import React from 'react'

export default function WhatMakeGCXDifferentSection() {
    const cards = carouselCard;
    return (
        <section>
            {/* What makes us Different Section */}
            <div
                id="what-make-us-different"
                className=" bg-white lg:pb-24 md:pb-24 pb-16"
            >
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto">
                        {/* title and description */}
                        <div className="text-center mx-4 mb-12">
                            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
                                What makes GCX <span className="text-gcxprimary">KCloud</span> different?
                            </p>
                            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                                Enterprise-grade cloud infrastructure powered by Tier 3 reliability, carrier-neutral connectivity, and scalable solutions designed for business growth.
                            </p>
                        </div>

                        <section className="py-16 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className='mx-8 md:mx-8 mx-4'>
                                    <div className="space-y-20 md:space-y-24">
                                        {cards.map((item, i) => (
                                            <div
                                                key={i}
                                                /* flex-col: Mobile default (Stack Top/Bottom)
                                                   md:flex-row: Tablet & Desktop (Side-by-Side)
                                                   md:flex-row-reverse: Alternates every other card on Tablet & Desktop 
                                                */
                                                className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                                    }`}
                                            >
                                                {/* IMAGE SIDE: Full width on mobile, half on md/lg */}
                                                <div className="w-full md:w-1/2">
                                                    <div className="relative group">
                                                        <div className="absolute inset-0 bg-gcxPrimary rounded-3xl rotate-3 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-500" />
                                                        <img
                                                            src={item.image}
                                                            className="relative rounded-3xl shadow-2xl w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                </div>

                                                {/* TEXT SIDE: Centered on mobile, Left/Right on md/lg */}
                                                <div className="w-full md:w-1/2 text-center md:text-left">
                                                    {/* <span className="text-gcxPrimary font-black text-5xl opacity-20 block mb-4">
                                                        0{i + 1}
                                                    </span> */}
                                                    <h3 className="text-lg lg:text-2xl md:text-2xl font-bold text-gray-700 mb-6">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div></div>
                            </div>
                        </section>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
