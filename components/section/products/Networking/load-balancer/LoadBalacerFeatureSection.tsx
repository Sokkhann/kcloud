import React from 'react'
import { Cpu, GitMerge, ShieldAlert, BarChartHorizontal } from "lucide-react";
import FeatureCardV2 from '@/components/card/FeatureCardV2';

const features = [
    {
        title: "Dedicated Hardware Performance",
        desc: "Offload networking tasks to physical appliances for higher throughput, lower latency, and deep packet inspection (DPI) capabilities.",
        icon: Cpu,
    },
    {
        title: "Advanced Load Balancing",
        desc: "Sophisticated traffic management with health checks, stickiness policies, and auto-scaling based on real-time performance counters.",
        icon: GitMerge,
    },
    {
        title: "Enhanced Security",
        desc: "Direct management of hardware firewalls for Static NAT, port forwarding, and granular egress/ingress filtering on isolated networks.",
        icon: ShieldAlert,
    },
    {
        title: "Usage Metering",
        desc: "Automatic collection of granular network usage data (bytes in/out) for precise billing, capacity planning, and auditing purposes.",
        icon: BarChartHorizontal,
    },
];

export default function LoadBalacerFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-6 lg:py-12 md:py-12'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Enterprise-Grade IP Management
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
