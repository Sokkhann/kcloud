import { Check } from 'lucide-react';
import React, { ReactNode } from 'react'

interface NestProductProps {
    icon: ReactNode;
    title: string;
    desc: string;
    details: string[];
}

export default function NestedProductCard({ icon, title, desc, details }: NestProductProps) {
    return (
        <div className="relative pl-16 group bg-white p-8 rounded-2xl hover:shadow-lg hover:shadow-gcxPrimary/60 duration-300">
            {/* Vertical Line */}
            <div className="absolute left-[1.75rem] top-0 bottom-0 w-[2px] bg-slate-100 group-hover:bg-gcxPrimary transition-colors duration-300" />

            {/* Icon Bubble */}
            <div className="absolute left-2 top-6 w-11 h-11 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-gray-400 group-hover:border-gcxPrimary group-hover:text-gcxPrimary transition-all duration-300 z-10 shadow-sm">
                {icon}
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-700 group-hover:text-gcxPrimary mb-2">{title}</h3>
                <p className="text-slate-500 text-sm mb-6 max-w-xl">{desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {details.map((d, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-xl bg-white border border-slate-100 group-hover:border-gcxPrimary/20 transition-colors">
                            <span className='text-gcxPrimary text-sm'>#</span>
                            <span className="text-xs font-medium text-gray-600">{d}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
