import { CardProps } from "@/type/customerOverview";
import Image from "next/image";

export default function CustomerCardV2({ description, logo, title }: CardProps) {
    return (
        <div className="flex flex-col justify-between rounded-2xl p-6 bg-white w-[400px] h-[340px] hover:shadow-lg hover:shadow-gcxPrimary/60 transition-all duration-500">
            {/* Top Section - Quote */}
            <div className="mb-6 relative">
                <p className="leading-relaxed text-gray-600 p-4"><span className="text-gcxPrimary font-bold">“</span>{description}<span className="text-gcxPrimary font-bold">”</span></p>
            </div>

            {/* Bottom Section - Logos */}
            <div className="p-6">
                <Image width={100} height={100} src={logo} alt={title} className="w-12 h-12 object-contain" />
                <p className="text-sm text-gray-700">{title}</p>
            </div>
        </div>
    );
}