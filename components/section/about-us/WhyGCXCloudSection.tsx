"use client";

import React from "react";

export default function WhyGCXCloudSection() {

  const features = [
    {
      title: 'Guaranteed Reliability',
      description: 'Achieve peace of mind with our robust infrastructure and industry-leading 99.9% uptime SLA.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.258 5.854 3.243 7.917A11.95 11.95 0 0012 21c4.419 0 8.41-1.858 11.28-4.876A12.001 12.001 0 0021.08 12.02h-4.22" />
        </svg>
      )
    },
    {
      title: 'Dynamic Scalability',
      description: 'Seamlessly scale your resources up or down in real-time to match your exact business demands.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: '24/7 Expert Support',
      description: 'Access dedicated engineering support around the clock, with local expertise that understands your needs.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A3.996 3.996 0 0110.518 7.5l-4.242 4.243m0 0L3.536 14.864m0 0A3.996 3.996 0 017.5 10.518l4.243-4.242m0 0l3.536-3.536m-4.242 0L3.536 10.518m0 0L5.636 12.72c.443.444 1.05.694 1.676.694H12c.983 0 1.904.385 2.597 1.077l3.536 3.536m-5.656-5.656A4 4 0 0110.518 7.5L3.536 14.864m0 0L5.636 17.07c.443.444 1.05.694 1.676.694H12c.983 0 1.904.385 2.597 1.077l3.536 3.536" />
        </svg>
      )
    },
    {
      title: 'Transparent Pricing',
      description: 'Enjoy clear, predictable billing with no hidden fees or complex structures. Pay only for what you use.',
      icon: (
        <svg className="w-8 h-8 text-gcxPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0v3l-4 4h4a3 3 0 013 3v1m-6-10l-3 3m0 0l3 3m-3-3h6m-5 8h6m-5 0v3l-4 4h4a3 3 0 013 3v1m-6-10l-3 3m0 0l3 3m-3-3h6" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-gcxPrimary">GCX Cloud?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover the advantages that make GCX the preferred partner for businesses seeking powerful, reliable, and accessible cloud solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:border-[#0d793e] hover:shadow-lg">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-[#0d793e]/10 rounded-full group-hover:bg-[#0d793e] transition-colors duration-300">
                {React.cloneElement(feature.icon, {
                  className: `w-8 h-8 ${index === 0 ? 'text-[#0d793e]' : 'text-[#0d793e]'} group-hover:text-white transition-colors duration-300`
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
