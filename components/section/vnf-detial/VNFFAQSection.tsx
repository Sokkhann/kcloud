"use client"

import React from 'react'
import data from '@/data/faqData.json'
import FAQDropdown from '@/components/card/FAQDropdown'

export default function VNFFAQSection() {

    const faqLists = data.vnfFAQ ?? []

  return (
    <div className="bg-white">
          <div className="max-w-7xl mx-auto lg:py-32 md:py-32 py-16">
            <div className="text-center pb-8 lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                Frequently Asked Questions
              </p>
            </div>
    
            {/* feature card section */}
            <div className="w-full lg:max-w-3xl md:max-w-2xl px-8 lg:mx-auto md:mx-auto space-y-4">
              {faqLists.map((faq, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-b-gray-300 last:border-b-0"
                >
                  <FAQDropdown
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
