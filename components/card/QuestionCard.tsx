import React, { useState } from 'react'

interface FAQItem {
    question: string;
    answer: string;
}

interface QuestionCardProps {
    faqData: FAQItem[];
}

export default function QuestionCard({faqData} : QuestionCardProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className='pb-6 md:pb-12 lg:pb-12 px-4 lg:px-6 md:px-6'>
            <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12 text-center">
                <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                    Frequently asked questions
                </p>
            </div>
            <div className="w-full max-w-5xl mx-auto px-4">
                {/* Grid Container: md:grid-cols-2 for two columns */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-2">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            /* last:border-b-0 removes the line for the final item */
                            className="border-b border-gray-200 h-fit last:border-b-0"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-5 text-left transition-colors hover:text-gcxPrimary focus:outline-none"
                            >
                                <span className="text-xl font-semibold text-gray-800 pr-4">
                                    {item.question}
                                </span>
                                <span className="text-2xl font-semibold text-gcxPrimary flex-shrink-0">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
