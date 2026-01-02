import { ProductCardProps } from "@/type/dataTypes";
import { ArrowRight, Cloud, CloudAlert, CloudCheck, CloudDrizzle, CloudLightning, CloudMoon, CloudRain, CloudSun } from "lucide-react";
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

            {/* Background Decoration - Now a large Cloud Icon */}
            <div className="absolute -bottom-8 -right-4 text-gray-100 group-hover:text-gcxPrimary/10 transition-colors duration-500 pointer-events-none select-none">
                <CloudCheck size={320} strokeWidth={1.5} />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    {/* Cloud Icon in the small box */}
                    <div className="text-gcxPrimary p-2 bg-gcxPrimary/5 rounded-lg group-hover:bg-gcxPrimary group-hover:text-white transition-all duration-300">
                        <Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg lg:text-2xl md:text-2xl font-bold text-gray-600 tracking-tight">{title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 pl-4 min-h-[60px]">
                    {description}
                </p>

                {/* Button Section */}
                {showButton && (
                    <a href={href} className="flex mt-8 items-center font-semibold text-gray-700 hover:text-gcxPrimary transition-colors">
                        View Detail
                        <ArrowRight className="ml-4 w-5 h-5 text-gray-800 group-hover:text-gcxPrimary group-hover:translate-x-1 transition-transform shrink-0" />
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