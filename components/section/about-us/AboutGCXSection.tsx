import Image from 'next/image';

const team = [
    { name: 'Alex Rivera', role: 'CEO & Founder', image: '/api/placeholder/150/150' },
    { name: 'Sarah Chen', role: 'CTO', image: '/api/placeholder/150/150' },
    { name: 'James Wilson', role: 'Head of Security', image: '/api/placeholder/150/150' },
];

export default function AboutGCXSection() {
    return (

        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Centered Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-700 mb-4">
                        Who's GCX <span className="text-gcxPrimary">KCloud</span>?
                    </h2>
                </div>

                {/* Content Split Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 text-start">
                    {/* Text Side: Full width on mobile, 1/2 on tablet and desktop */}
                    <div className="w-full md:w-1/2 space-y-6">

                        <h3 className="text-lg md:text-2xl font-bold text-gray-700 tracking-wide">
                            Empowering Cambodia’s Digital Future
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            GCX KCloud is a Cambodian cloud service provider focused on delivering reliable and flexible digital infrastructure.
                            We help businesses modernize their operations through virtual servers, storage, and cloud-based platforms.
                            Our team combines local market understanding with international standards to ensure dependable service.
                            By simplifying cloud adoption, we support organizations in improving efficiency and reducing IT complexity.
                            KCloud exists to accelerate digital transformation across Cambodia and the Mekong region.
                        </p>
                    </div>

                    {/* Image Side: Full width on mobile, 1/2 on tablet and desktop */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gcxprimary/20 rounded-3xl" />
                        <div className="relative w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex items-center justify-center">
                            {/* Replace the span with your <img> tag when ready */}
                            <Image src="/about-us/about-us-bg.png" alt='about us' width={1200} height={800} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
