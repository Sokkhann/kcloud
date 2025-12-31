import ScrollReveal from '@/components/animations/ScrolReveal'
import AboutUsCard from '@/components/card/AboutUsCard'
import React from 'react'

const team = [
    { name: 'Alex Rivera', role: 'CEO & Founder', image: '/api/placeholder/150/150' },
    { name: 'Sarah Chen', role: 'CTO', image: '/api/placeholder/150/150' },
    { name: 'James Wilson', role: 'Head of Security', image: '/api/placeholder/150/150' },
];

export default function AboutGCXSection() {
    return (

        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Centered Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-700 mb-4">
                        Who's <span className="text-gcxPrimary">GCX?</span>
                    </h2>
                </div>

                {/* Content Split Section */}
                {/* Content Split Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 text-start">
                    {/* Text Side: Full width on mobile, 1/2 on tablet and desktop */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-700 tracking-wide">
                            National Fiber Backbone
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            GCX harnesses local resources in Cambodia with over <strong>50 points of presence</strong> nationwide, covering 90% of major cities.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our network operates through an extensive domestic metro network with over <strong>95% burial fiber</strong>, supported by multiple high-capacity DWDM rings for maximum reliability.
                        </p>
                        <ul className="space-y-3">
                            {['Wholesale Markets', 'Enterprise Solutions', 'Consumer ICT'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-gcxprimary" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Side: Full width on mobile, 1/2 on tablet and desktop */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gcxprimary/20 rounded-3xl" />
                        <div className="relative w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex items-center justify-center">
                            {/* Replace the span with your <img> tag when ready */}
                            <span className="text-gray-400 font-mono italic">[ Network Map Image ]</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
