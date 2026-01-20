"use client"

import PartnerCard from '@/components/card/PartnerCard'
import { PartnerData } from '@/type/partnerOverview'
import { ArrowBigLeft, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

export default function PartnerSection() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Logic to calculate which cards to show
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = PartnerData.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(PartnerData.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Scroll to top of section when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="container mx-auto p-8">
            {/* The Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((customer, index) => (
                    <PartnerCard
                        key={index} // Better to use title than index for keys
                        description={customer.description}
                        logo={customer.logo}
                        title={customer.title}
                        link={customer.link}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white hover:text-gcxPrimary"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`h-10 w-10 rounded-full text-sm font-semibold transition-all ${currentPage === i + 1
                                    ? 'bg-gcxPrimary text-white shadow-md shadow-gcxPrimary/30'
                                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white hover:text-gcxPrimary"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </section>
    )
}
