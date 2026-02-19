import ListingOverviewPackage from '@/components/card/ListingOverviewPackage'

export default function ListingPackageSection() {
    return (
        <div className="max-w-7xl mx-auto lg:pt-12 md:pt-12 pt-6 lg:px-6 px-4">
            {/* title and description */}
            <div className="text-center mx-4 mb-4">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
                    GCX <span className="text-gcxprimary">KCloud</span> Starting with
                </p>
                <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
                    High-performance cloud solutions designed to grow with your business. Starting at our most accessible price points.
                </p>
            </div>
 
            {/* Product Tabs section */}
            <ListingOverviewPackage />
        </div>
    )
}
