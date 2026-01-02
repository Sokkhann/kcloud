import ChildPricingCard from '@/components/card/ChildPricingCard'
import { Network } from 'lucide-react'
import React from 'react'

const products = [
    {
        id: "router",
        title: "Virtual Router",
        price: "Free",
        description: "Seamlessly manage network traffic and connect your private subnets. Bridge your cloud infrastructure with advanced routing rules and high-speed throughput.",
        details: [
            "Advanced L3 traffic routing",
            "Inter-VPC connectivity",
            "DHCP & NAT configuration",
            "Built-in firewall isolation"
        ],
        icon: <Network size={32} strokeWidth={1.5} />,
        image: "/images/router-preview.jpg",
        href: "https://stack-console.cloudlab.cam/app/router",
        tag: "Networking"
    }
]

export default function VPCTablePriceSection() {
    return (
        <section>
            <div className="py-12 max-w-7xl mx-auto text-center">
                <p className="lg:text-4xl md:text-4xl text-2xl font-semibold mb-2 text-center text-gray-700">
                    High-Performance Virtual Router
                </p>
                <p className="text-center max-w-5xl mx-auto text-gray-600">
                    Enhance your compute environment with specialized boot media, standardized gold images, and intelligent scaling. These tools are designed to streamline your workflow and ensure your infrastructure grows with your traffic.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
                {products.map((product) => (
                    <ChildPricingCard
                        price={product.price}
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        icon={product.icon}
                        href={product.href}
                        showButton={true}
                    />
                ))}
            </div>
        </section>
    )
}
