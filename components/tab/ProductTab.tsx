"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductListProps } from '@/type/dataTypes';
import ProductCard from '../card/ProductCard';

export default function ProductTab({ products }: { products: ProductListProps[] }) {
    const categories = ["All", ...new Set(products.map((p) => p.category))];
    const [activeTab, setActiveTab] = useState("All");

    const filteredItems = activeTab === "All" 
        ? products 
        : products.filter((p) => p.category === activeTab);

    return (
        <div className="w-full space-y-12">
            {/* Tab Buttons with Animated Pill */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                            activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-700 bg-gray-50"
                        }`}
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-blue-600 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{tab}</span>
                    </button>
                ))}
            </div>

            {/* Grid for Cards */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductCard products={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}