"use client";
import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface NestProductProps {
    id: string;
    icon: ReactNode;
    title: string;
    desc: string;
    image: string;
    details: string[];
}

interface TabbedProductsProps {
    products: NestProductProps[];
}

export default function TabbedProductSection({ products }: TabbedProductsProps) {
    const [activeTab, setActiveTab] = useState(products[0].id);

    const activeProduct = products.find((p) => p.id === activeTab) || products[0];

    return (
        <div className="flex flex-col gap-10 max-w-7xl mx-auto lg:px-8 md:px-4">
            {/* 1. Added overflow-x-auto, whitespace-nowrap, and hidden scrollbar logic */}
            <div className="relative flex items-center justify-start md:justify-center flex-nowrap overflow-x-auto border-b border-gray-200 scrollbar-hide no-scrollbar touch-pan-x">
                {products.map((product) => (
                    <button
                        key={product.id}
                        onClick={() => setActiveTab(product.id)}
                        /* 2. Added whitespace-nowrap to prevent text wrapping on small screens */
                        className={`relative px-6 py-5 flex-shrink-0 transition-all duration-300 whitespace-nowrap text-sm md:text-base ${activeTab === product.id
                            ? "text-gcxPrimary font-bold"
                            : "text-gray-700 hover:text-gcxPrimary font-bold"
                            }`}
                    >
                        {product.title}

                        {activeTab === product.id && (
                            <motion.div
                                layoutId="navUnderline"
                                className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-gcxPrimary z-10"
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="relative min-h-fit lg:min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {/* 1. Grid: Stacked (1 col) on mobile, 12 cols on desktop */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center rounded-2xl">
                            <div className="lg:col-span-5 relative h-[250px] sm:h-[350px] lg:h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                                <img
                                    src={activeProduct.image}
                                    alt={activeProduct.title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h4 className="font-bold text-gcxPrimary text-base md:text-lg">
                                        Core Features & Capabilities
                                    </h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:pl-4">
                                    {activeProduct.details.map((detail, i) => (
                                        <div
                                            key={i}
                                            className="group flex items-start gap-3 md:gap-4"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className='text-gcxPrimary flex-shrink-0 mt-0.5'
                                            />
                                            <span className="text-gray-700 text-sm md:text-base leading-snug">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}