import { LucideIcon } from 'lucide-react';
import React from 'react'

interface FeatureProps {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export default function FeatureCardV2({ icon: Icon, title, desc }: FeatureProps) {
    return (
        <div className="group flex flex-col h-full p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-gcxprimary transition-all duration-200 hover:shadow-md">
            <div className="mb-4">
                {/* Secondary color (Dark Blue) for Icon, changing to Primary on hover */}
                <Icon size={32} className='text-gray-600 group-hover:text-gcxPrimary transition-colors' />
            </div>

            {/* Using Dark Blue for the title makes it look more premium */}
            <h3 className="font-bold text-lg text-gray-600 mb-2 group-hover:text-gcxPrimary transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed flex-grow">
                {desc}
            </p>
        </div>
    )
}
