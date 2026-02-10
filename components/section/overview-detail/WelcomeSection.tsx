import React from 'react'

interface WelcomProps {
    title: string;
    desc: string;
    image: string;
}

export default function WelcomeSection({title, desc, image} : WelcomProps) {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Text Side */}
                <div className="flex-1">
                    {/* <div className="inline-block py-1 px-3 bg-gcxprimary/10 rounded-lg mb-4">
                        <span className="text-gcxprimary font-bold uppercase text-[10px] tracking-widest">Welcome To GCX</span>
                    </div> */}
                    <h2 className="text-4xl lg:text-4xl font-bold text-gray-700 mb-8">
                        {title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-6">
                        {desc}
                    </p>
                </div>

                {/* Image Side with Floating Frame */}
                <div className="flex-1 relative group">
                    <div className="absolute -inset-4 border-2 border-dashed border-gcxprimary/20 rounded-[2.5rem] group-hover:border-gcxprimary transition-colors duration-500" />
                    <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src={image}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Connectivity Image"
                        />
                        <div className="absolute inset-0 bg-gcxprimary/10 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    )
}
