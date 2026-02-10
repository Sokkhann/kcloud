import ChildPricingCard from "@/components/card/ChildPricingCard";
import { Network, Globe, Share2, Router, ArrowLeftRight } from 'lucide-react';

const networkingProducts = [
    {
        title: "Virtual Private Cloud (VPC)",
        price: "Free",
        unit: "",
        description: "Your own isolated private network partition. Create custom subnets, routing tables, and network gateways in a secure, multi-tenant environment.",
        icon: <Network size={32} strokeWidth={1.5} />,
        href: "/products/vpc",
        showButton: true,
        tag: "Foundation"
    },
    {
        title: "Managed Load Balancer",
        price: "0.025",
        unit: "hour",
        description: "Distribute incoming traffic across multiple instances. Built-in health checks and automatic scaling to ensure high availability for your applications.",
        icon: <Share2 size={32} strokeWidth={1.5} />,
        href: "/products/load-balancer",
        showButton: true,
        tag: "High Availability"
    },
    {
        title: "Reserved IP Address",
        price: "3.00",
        unit: "month",
        description: "Static IPv4 addresses that can be remapped between instances. Perfect for hosting websites, mail servers, or applications requiring a fixed entry point.",
        icon: <Globe size={32} strokeWidth={1.5} />,
        href: "/products/ips",
        showButton: false,
        tag: "Connectivity"
    },
    {
        title: "Virtual Router",
        price: "15.00",
        unit: "month",
        description: "Advanced routing capabilities for hybrid cloud setups. Connect your VPC to on-premise networks via VPN or manage complex inter-VPC traffic.",
        icon: <Router size={32} strokeWidth={1.5} />,
        href: "/products/routers",
        showButton: false,
        tag: "Advanced Networking"
    }
];

export default function NetworkingPricingSection() {
    return (
        <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
                {networkingProducts.map((product) => (
                    <ChildPricingCard
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        icon={product.icon}
                        href={product.href}
                        price={product.price}
                        unit={product.unit}
                        showButton={product.showButton}
                    />
                ))}
            </div>
        </section>
    );
}