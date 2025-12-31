"use client"

import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface DropdownItem {
    title: string;
    content: string;
}

interface DropdownImageCardProps {
    image: string;
    items: DropdownItem[];
}

export default function ListDropDownCard({ image, items }: DropdownImageCardProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>(() =>
        items.map((_, index) => index)
    );

    const toggle = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // close only this one
                : [...prev, index] // open this one
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl gap-12">
            {/* Left section */}
            <div className="flex items-center justify-center rounded-2xl bg-violet-500">
                <Image
                    width={1200}
                    height={1200}
                    src={image}
                    alt="card"
                    className="rounded-2xl object-cover w-full lg:h-[530px] h-fit"
                />
            </div>

            {/* Right section */}
            <div className="lg:h-[530px] h-fit flex flex-col justify-between">
                <div className="lg:mb-0 mb-8">
                    <h3 className="lg:text-2xl text-lg font-bold text-gray-700"><span className="text-gcxprimary">GCX</span> Asia Phnom Penh</h3>
                    <p className="text-gray-600">Comprehensive Specifications </p>
                </div>
                <div className="flex-1 overflow-auto min-h-0 grid lg:items-center items-start">
                    <div>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden border-t border-gray-200 ${index === items.length - 1 ? "border-b" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center pr-4 py-3 text-left font-bold text-gray-700"
                                >
                                    <span><span className="pr-4 text-gcxPrimary">0{index + 1}</span>{item.title}</span>
                                    <span>
                                        {openIndexes.includes(index) ? (
                                            <ChevronUp size={24} />
                                        ) : (
                                            <ChevronDown size={24} />
                                        )}
                                    </span>
                                </button>

                                {openIndexes.includes(index) && (
                                    <div>
                                        <div className="px-10 pb-3 text-gray-600">
                                            {item.content}
                                        </div>
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}