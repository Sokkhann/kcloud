import ListingOverviewPackage from '@/components/card/ListingOverviewPackage'
import React from 'react'

export default function ListingPackageSection() {
    return (
        <div className="max-w-7xl mx-auto py-24">
            {/* title and description */}
            <div className="text-center mx-4 mb-4">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
                    <span className="text-gcxprimary">GCX Cloud</span> Starting with
                </p>
                <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
                    High-performance cloud solutions designed to grow with your business. Explore our entry-level tiers featuring dedicated support and 99.9% uptime, starting at our most accessible price points.
                </p>
            </div>

            {/* Product Tabs section */}
            <ListingOverviewPackage />
        </div>
    )
}
