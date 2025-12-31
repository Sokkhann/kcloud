import { CardProps } from "@/type/customerOverview";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function FeaturedTestimonial({ description, logo, title }: CardProps) {
    return (
        <div className="group relative flex flex-col justify-between rounded-2xl p-8 bg-white border border-gray-100 lg:w-[400px] w-[350px] lg:h-[340px] h-[300px] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-gcxPrimary/60">
            {/* Accent Bar */}
            <div className="absolute left-0 top-12 bottom-12 w-1 bg-gcxPrimary/40 group-hover:bg-gcxPrimary rounded-r-full" />

            <div className="relative">
                <Quote className="w-8 h-8 text-gcxPrimary/40 group-hover:text-gcxPrimary mb-4 duration-300" />
                <p className="italic text-gray-600 leading-relaxed line-clamp-5">
                    {description}
                </p>
            </div>

            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="p-2 bg-gray-50 rounded-xl">
                    <Image width={100} height={100} src={logo} alt={title} className="w-10 h-10 object-contain transition-all" />
                </div>
                <p className="font-bold text-gray-800 text-sm tracking-tight uppercase">{title}</p>
            </div>
        </div>
    );
}