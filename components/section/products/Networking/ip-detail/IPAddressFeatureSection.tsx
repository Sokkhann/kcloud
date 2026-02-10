import FeatureCardV2 from '@/components/card/FeatureCardV2';
import { Hash, Layers, Activity, Network } from "lucide-react";

const features = [
  {
    title: "IP Range Reservation",
    desc: "Claim a contiguous block of Public IPs. This is essential for whitelisting, building trusted communication tunnels, and managing large-scale server clusters.",
    icon: Hash,
  },
  {
    title: "VLAN Dedication",
    desc: "Assign specific VLAN IDs to your account. This provides 'hardware-level' isolation on our switches, ensuring your data never mixes with other cloud users at the data-link layer.",
    icon: Layers,
  },
  {
    title: "Elastic Resource Limits",
    desc: "While your resources are dedicated, you maintain the flexibility to acquire additional 'system-wide' IPs if your reserved pool is exhausted (subject to your account limits).",
    icon: Activity,
  },
  {
    title: "Domain & Project Scoping",
    desc: "Dedicate resources at the high-level Domain (department) or specific Project level, giving you complete control over how networking assets are distributed across your organization.",
    icon: Network,
  },
];

export default function IPAddressFeatureSection() {
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
