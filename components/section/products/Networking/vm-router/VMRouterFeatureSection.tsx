import FeatureCardV2 from '@/components/card/FeatureCardV2'
import { ArrowLeftRight, Network, Route, Server, ShieldCheck, Waypoints } from 'lucide-react';

const features = [
    {
        title: "Static & Dynamic Routing",
        desc: "Manage the routing table to define how data packets are directed between subnets or out to the public internet.",
        icon: Route
    },
    {
        title: "Network Address Translation (NAT)",
        desc: "Configure Source NAT for outbound internet access and Destination NAT (Port Forwarding) to expose internal services.",
        icon: ArrowLeftRight
    },
    {
        title: "Site-to-Site VPN Tunnels",
        desc: "Establish secure, encrypted bridges between your virtual network and remote offices or cloud providers using IPsec.",
        icon: Waypoints
    },
    {
        title: "Firewall & Security Groups",
        desc: "Apply stateful packet inspection and access control lists (ACLs) to filter traffic based on IP, port, or protocol.",
        icon: ShieldCheck
    },
    {
        title: "DHCP & DNS Services",
        desc: "Automatically assign IP addresses to connected Virtual Machines and manage internal hostname resolution.",
        icon: Network
    },
    {
        title: "Load Balancing",
        desc: "Distribute incoming traffic across multiple backend servers to ensure high availability and prevent bottlenecks.",
        icon: Server
    }
];

export default function VMRouterFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-16 lg:py-32 md:py-32'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Core Virtual Router Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Everything you need to manage your public and private connectivity. Our networking stack
                    is built for high availability, security, and global performance.
                </p>
            </div>

            <div className='pb-8 mx-4 lg:mx-8 md:mx-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className='h-full'>
                            <FeatureCardV2 icon={f.icon} title={f.title} desc={f.desc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
