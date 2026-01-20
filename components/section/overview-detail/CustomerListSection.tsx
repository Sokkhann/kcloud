"use client"

import ScrollReveal from '@/components/animations/ScrolReveal';
import CustomerCardV2 from '@/components/card/CusomterCardV2';
import { customerOverview } from '@/type/customerOverview';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'

export default function CustomerListSection() {
    const customers = customerOverview

    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (e: any) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;
        // Calculate percentage (0 to 100)
        const scrolled = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollPercent(scrolled);
    };
    return (
        <section id="why-choose-gcx" className="lg:py-16 md:py-16 py-16">
            <ScrollReveal>
                <div className="max-w-7xl mx-auto lg:mb-12">
                    {/* title and description */}
                    <div className="text-center justify-center lg:mx-0 mx-4 lg:mb-6 md:mb-6">
                        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                            Customer Testimonials
                        </p>
                        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto pb-4">
                            We grow when you grow. Hear from the developers and IT managers who have simplified their workflow and eliminated hidden costs by switching to our managed cloud ecosystem.
                        </p>
                        {/* <a href="/partner" className="relative text-gray-600 hover:text-gcxPrimary font-semibold group inline-flex items-center gap-2">
                            <span className="relative">
                                Explore Success Stories
                            </span>

                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </a> */}
                    </div>

                    <div className="flex flex-col gap-10">
                        {/* 2. Add onScroll and snap classes to this container */}
                        <div
                            onScroll={handleScroll}
                            className='flex items-center overflow-x-auto gap-6 scrollbar-hide lg:h-[450px] h-[400px] lg:px-8 md:px-8 px-4 snap-x snap-mandatory'
                        >
                            {customers.map((item, index) => (
                                <div key={index} className="flex-shrink-0 snap-center">
                                    <CustomerCardV2
                                        description={item.description}
                                        title={item.title}
                                        logo={item.logo}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* 3. The Dynamic Scroll Track */}
                        {/* <div className="flex items-center justify-center w-full max-w-xs mx-auto">
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden relative">
                                <div
                                    className="absolute h-full bg-gcxPrimary rounded-full transition-all duration-150 ease-out"
                                    style={{
                                        width: '30%', // This represents the "thumb" size
                                        left: `${scrollPercent * 0.7}%` // Moves the thumb based on scroll
                                    }}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </ScrollReveal>
        </section>

    );
}
