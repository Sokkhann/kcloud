"use client";

import React from "react";

export default function WhyGCXCloudSection() {
  const features = [
    {
      title: '99.982% Uptime SLA',
      description: 'Beyond standard reliability, our Tier III architecture limits total annual downtime to just 1.6 hours.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.258 5.854 3.243 7.917A11.95 11.95 0 0012 21c4.419 0 8.41-1.858 11.28-4.876A12.001 12.001 0 0021.08 12.02h-4.22" />
        </svg>
      )
    },
    {
      title: 'Fault Tolerant Design',
      description: 'Multiple independent distribution paths for power and cooling ensure your workloads never skip a beat.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Concurrent Maintenance',
      description: 'Our facility allows for any planned maintenance on critical systems without impacting your active cloud services.',
      icon: (
        <svg className="w-8 h-8 text-[#0d793e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="lg:py-12 md:py-12 py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Minimalist Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose GCX <span className="text-gcxPrimary">KCloud?</span>
          </h2>
          <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
            Experience the standard of world-class infrastructure. We provide the
            certified reliability your enterprise requires to scale with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LARGE CERTIFICATION CARD (Spans 2 columns) */}
          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:border-[#0d793e] hover:shadow-lg">
            <div className="flex-2 z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tier III Design Certification</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our infrastructure is engineered to the <strong className="text-gcxPrimary">Uptime Institute Tier III</strong> standard.
                This ensures "Concurrent Maintainability"—the ability to perform maintenance
                on any capacity component without impacting your server uptime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-[#0d793e]">N+1</div>
                  <div className="text-xs text-gray-500 font-medium">Fault Tolerance</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-center">
                  <div className="text-xl font-bold text-[#0d793e]">72h</div>
                  <div className="text-xs text-gray-500 font-medium">Outage Protection</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center z-10 gap-4">
              <img
                src="/uptime.png"
                alt="Tier 3"
                className="w-full max-w-[200px]"
              />
              {/* <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Official Certification</span> */}
            </div>
          </div>

          {/* SUPPORTING FEATURES (Stacked on the right) */}
          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex-1 p-6 group bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:border-[#0d793e] hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#0d793e]/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-800">{feature.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}