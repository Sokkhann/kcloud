import FeatureCardV2 from "@/components/card/FeatureCardV2";
import { Database, Maximize, Gauge, Camera, Activity } from 'lucide-react';

const storageFeatures = [
    {
        title: "Persistent Lifecycle",
        icon: Database,
        desc: "Decouple your data from your compute. Attach, detach, and move data volumes between different VM instances within the same zone."
    },
    {
        title: "Dynamic Resizing (Live)",
        icon: Maximize,
        desc: "Grow your storage as your data grows. Expand your volume size on-the-fly without requiring a system reboot or application downtime."
    },
    {
        title: "Performance Tiers",
        icon: Gauge,
        desc: "Choose the right speed for your needs. We offer tiered storage pools, ranging from standard capacity drives to ultra-fast, NVMe-backed SSD pools."
    },
    {
        title: "Storage QoS",
        icon: Activity,
        desc: "Ensure 'Noisy Neighbors' don't slow you down. We provide guaranteed IOPS to maintain consistent performance for mission-critical apps."
    },
    {
        title: "Snapshot-to-Volume",
        icon: Camera,
        desc: "Instantly create a new disk from a point-in-time snapshot. Perfect for recovering specific files or testing updates on a clone of production data."
    }
];

export default function BlockStorageFeatureSection() {
    return (
        <div className="max-w-7xl mx-auto lg:py-12 md:py-12 py-6">
            <div className="text-center pb-8 lg:mx-8 md:mx-8 mx-4">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Key Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    GCX block storage delivers high-performance, low-latency persistent
                    block storage designed to be the foundational engine for your most
                    demanding workloads. This capability is essential for:
                </p>
            </div>

            {/* feature card section */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 justify-items-center items-stretch lg:mx-8 md:mx-8 mx-4"
            >
                {storageFeatures.map((card, index) => (
                    <FeatureCardV2
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        desc={card.desc}
                    />
                ))}
            </div>
        </div>
    )
}
