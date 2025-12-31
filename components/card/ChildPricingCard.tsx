import { ProductCardProps } from "@/type/dataTypes";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function ChildPricingCard({
    title,
    description,
    icon,
    href,
    price,
    unit,
    showButton = false
}: ProductCardProps) {
    // Robust checks: handle whitespace and case sensitivity
    const cleanPrice = price?.toString().trim().toLowerCase();
    const cleanUnit = unit?.toString().trim();

    const isFree = cleanPrice === "free";
    const isPercentage = cleanUnit === "%";

    return (
        <div className="group relative bg-white rounded-2xl p-10 transition-all text-left hover:shadow-lg hover:shadow-gcxPrimary/60 overflow-hidden border border-gray-100 h-full flex flex-col justify-between">

            {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-2 text-gray-200 group-hover:text-gcxPrimary/20 transition-colors duration-500 pointer-events-none select-none">
                {isFree ? (
                    <span className="text-[240px] font-black leading-none uppercase">0</span>
                ) : (
                    <span className="text-[240px] font-black leading-none">
                        {isPercentage ? "%" : "$"}
                    </span>
                )}
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-gcxPrimary p-2 bg-gcxPrimary/5 rounded-lg group-hover:bg-gcxPrimary group-hover:text-white transition-all duration-300">
                        {icon}
                    </div>
                    <h3 className="text-lg lg:text-2xl md:text-2xl font-bold text-gray-600 tracking-tight">{title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 pl-4 min-h-[60px]">
                    {description}
                </p>

                {/* Price Section */}
                {/* <div className="mb-2">
                    <p className="text-xs font-bold text-gcxPrimary uppercase tracking-widest mb-1">
                        {isFree ? "Availability" : "Starting At"}
                    </p>

                    <div className="flex items-baseline flex-wrap">
                        {isFree && (
                            <span className="text-6xl font-bold text-gray-600 group-hover:text-gcxPrimary transition-colors duration-300 uppercase">
                                Free
                            </span>
                        )}

                        {isPercentage && !isFree && (
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold text-gray-600 group-hover:text-gcxPrimary transition-colors duration-300">
                                    {price}
                                </span>
                                <span className="text-4xl font-bold text-gray-600 group-hover:text-gcxPrimary ml-1">%</span>
                                <span className="text-gray-400 font-bold ml-2 text-sm uppercase tracking-wider">of Instance</span>
                            </div>
                        )}

                        {!isFree && !isPercentage && (
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold text-gray-600 group-hover:text-gcxPrimary transition-colors duration-300">
                                    ${price}
                                </span>
                                {unit && (
                                    <span className="text-gray-400 font-bold ml-2 text-sm md:text-base tracking-wide">/ {unit}</span>
                                )}
                            </div>
                        )}
                    </div>
                </div> */}

                {/* Button Section */}
                {showButton && (
                    <a href={href} className="flex mt-8 items-center">
                        View Detail <ArrowRight className="ml-4 w-5 h-5 text-gray-800 group-hover:text-gcxPrimary shrink-0" />
                    </a>
                )}
            </div>
        </div>
    );
}

// <a href={href} className="block w-fit mt-8">
//     <div className="overflow-hidden w-fit">
//         <div className="flex items-center gap-2 transition-all duration-500 ease-out
//                                             -translate-x-[90px] group-hover:translate-x-0 w-fit">
//             <span className="font-semibold text-gcxPrimary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 View Detail
//             </span>
//             <div className="p-1">
//                 <ArrowRight className="w-5 h-5 text-gray-800 group-hover:text-gcxPrimary shrink-0" />
//             </div>
//         </div>
//     </div>
// </a>