"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContentSection } from '@/type/partnerOverview';
interface PartnerDetailLayoutProps {
    logo: string;
    partnerName: string;
    contents?: ContentSection[];
}

export default function PartnerContentSection({
    logo,
    partnerName,
    contents,
}: PartnerDetailLayoutProps) {
    const [activeId, setActiveId] = useState(contents?.[0]?.id || "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0% -35% 0%", threshold: 0.5 } // Trigger when section is in top-middle
        );

        contents?.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [contents]);
    return (
        <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-x-6 gap-x-4 items-start relative lg:pb-12 md:pb-12 pb-6">

            {/* LEFT SECTION - Table of Contents */}
            <aside className="lg:col-span-3 sticky top-40 self-start h-fit hidden lg:block z-10">
                <nav className="flex flex-col gap-6">
                    <Link href="/partner" className="group text-gray-700 hover:text-gcxPrimary flex items-center gap-2 transition-colors">
                        <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Partners
                    </Link>
                    <div className="space-y-4">
                        <p className="text-lg font-semibold text-gray-700">Table of Contents</p>
                        <ul className="relative space-y-0 border-l border-gray-100">
                            {contents?.map((item) => {
                                const isActive = activeId === item.id;
                                return (
                                    <li
                                        key={item.id}
                                        className={`pl-4 py-2 cursor-pointer border-l-2 -ml-[1.5px] transition-all duration-300
                                ${isActive
                                                ? 'border-gcxPrimary text-gcxPrimary'
                                                : 'border-transparent text-gcxPrimary hover:text-gray-600 hover:border-gcxPrimary/40'
                                            }`}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            className={`transition-all block ${isActive ? 'text-gcxPrimary' : 'text-gray-600 hover:text-gcxPrimary'}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                                setActiveId(item.id);
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </aside>

            {/* MIDDLE SECTION - Content Rendering */}
            <main className="lg:col-span-6 ">
                <div className="prose prose-gray max-w-none">
                    <div className="text-gray-600 leading-relaxed space-y-16">
                        {contents?.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-40">
                                <h2 className="text-2xl font-bold text-gray-700 mb-4">{section.title}</h2>
                                <p className=" text-gray-600">
                                    {section.desc}
                                </p>
                            </section>
                        ))}
                        
                    </div>
                </div>
            </main>

            {/* RIGHT SECTION - Sticky Action Card */}
            <aside className="lg:col-span-3 sticky top-40 self-start h-fit hidden lg:flex flex-col items-center z-10">
                <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md hover:shadow-gcxPrimary w-full duration-300">
                    <div className="relative w-24 h-24 mb-6 mx-auto">
                        <img src={logo} alt={partnerName} className="object-contain w-full h-full" />
                    </div>
                    <h2 className="text-xl font-bold text-center mb-2">{partnerName}</h2>
                    <p className="text-sm text-gray-500 text-center mb-6">Verified Cloud Partner</p>
                    <button className="w-full bg-gcxPrimary text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-100">
                        Contact Partner
                    </button>
                </div>
            </aside>
        </div>
    );
}