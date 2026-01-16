import ChildPricingCard from '@/components/card/ChildPricingCard'
import { Camera, Layers, ShieldCheck, History } from 'lucide-react';
import { env } from 'process';

const url = process.env.NEXT_PUBLIC_STACKCONSOLE_URL?.replace(/\/$/, "");

const products = [
    {
        title: "Block Storage Snapshot",
        price: "0.02",
        unit: "GB",
        description: "Point-in-time copies of your data volumes. Create incremental snapshots of your block storage to ensure data consistency without downtime.",
        icon: <Layers size={32} strokeWidth={1.5} />,
        href: `${url}/snapshots`,
        tag: "Data Recovery",
        showButton: true
    }
];

export default function BlockStoragePricingSection() {
    return (
        <section>
            <div className="pb-6 md:pb-12 lg:pb-12 max-w-7xl mx-auto text-center">
                <p className="lg:text-4xl md:text-4xl text-2xl font-semibold mb-2 text-center text-gray-700">
                    High-Performance Deployment Tools
                </p>
                <p className="text-center max-w-5xl mx-auto text-gray-600">
                    Enhance your compute environment with specialized boot media, standardized gold images, and intelligent scaling. These tools are designed to streamline your workflow and ensure your infrastructure grows with your traffic.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 pb-6 lg:pb-12 md:pb-12">
                {products.map((product) => (
                    <ChildPricingCard
                        price={product.price}
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        icon={product.icon}
                        href={product.href}
                        unit={product.unit}
                        showButton={product.showButton}
                    />
                ))}
            </div>
        </section>
    )
}
