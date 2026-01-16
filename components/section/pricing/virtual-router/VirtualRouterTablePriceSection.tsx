import ChildPricingCard from '@/components/card/ChildPricingCard'
import { Globe, Network } from 'lucide-react'
import React from 'react'

const url = process.env.NEXT_PUBLIC_STACKCONSOLE_URL?.replace(/\/$/, "");

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
        href: `${url}/virtual-router`,
        tag: "Networking",
        hasButton: false
    },
    {
        id: "ip-address",
        title: "Public IP Address",
        price: "Fixed Rate",
        description: "Establish a permanent presence for your services. Our Reserved IPs provide static, high-availability IPv4 addresses that ensure your users can always find your servers, load balancers, and VPNs.",
        details: [
            "Static Reserved IPv4",
            "Instant assignment & remapping",
            "DDOS-ready infrastructure",
            "Reverse DNS (rDNS) support"
        ],
        icon: <Globe size={32} strokeWidth={1.5} />, // Or use <MapPin />
        image: "/images/ip-preview.jpg",
        href: `${url}/networks/provider-2`,
        tag: "Connectivity",
        hasButton: true
    }
]

export default function VirtualRouterTablePriceSection() {
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
                        showButton={product.hasButton}
                    />
                ))}
            </div>
        </section>
    )
}
