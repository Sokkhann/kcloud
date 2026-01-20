import { CardProps } from '@/type/customerOverview';
import { ArrowRight } from 'lucide-react';

export default function PartnerCard({ logo, description, link }: CardProps) {

    return (
        <a href={link} className=" group relative block overflow-hidden rounded-2xl hover:shadow-lg hover:shadow-gcxPrimary/40 transition-all duration-500">
            <div className="rounded-2xl transition-all duration-300 bg-white overflow-hidden">
                <div className="p-6 flex flex-col justify-between h-95 relative z-10">
                    {/* Top Section */}
                    <div className='grid gap-4'>
                        <img
                            src={logo}
                            alt="Customer Logo"
                            className="h-24 w-24 object-contain transition-all"
                        />

                        <div className="space-y-2">
                            <p className="text-gray-600 line-clamp-5">{description}</p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-6 overflow-hidden">
                        <div className="flex items-center gap-2 transition-all duration-500 ease-out -translate-x-[85px] group-hover:translate-x-0">
                            <span className="font-semibold text-gcxPrimary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View Detail
                            </span>
                            <ArrowRight className="w-5 h-5 font-bold text-gray-600 group-hover:text-gcxPrimary shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
