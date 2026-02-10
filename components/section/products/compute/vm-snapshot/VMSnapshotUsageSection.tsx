import UsageCard from '@/components/card/UsageCard';
import { HardDrive, Timer, ShieldAlert, Activity } from 'lucide-react';

const cards = [
    {
        title: "Storage Utilization",
        desc: "Track the total disk space occupied by individual snapshots and your cumulative snapshot storage pool.",
        icon: HardDrive
    },
    {
        title: "Change Rate (Churn)",
        desc: "Monitor the volume of data changes between snapshot intervals to optimize your backup frequency.",
        icon: Activity
    },
    {
        title: "Restoration Speed",
        desc: "Estimated time required to re-image the virtual machine based on snapshot size and storage throughput.",
        icon: Timer
    },
    {
        title: "Retention Policy Compliance",
        desc: "Verify that snapshots are being purged according to your security and compliance data-retention rules.",
        icon: ShieldAlert
    }
];

export default function VMSnapshotUsageSection() {
    return (
        <div>
            <section className='max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32'>
                <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                    <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                        Snapshot Usage & Performance
                    </p>
                    <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                        Track disk storage consumption, incremental change rates, and data retention compliance for your recovery points. Monitor restoration speeds and snapshot health to ensure rapid system recovery and optimal storage efficiency                    </p>
                </div>

                <div className='pb-8 mx-4 lg:mx-8 md:mx-8'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                        {cards.map((f, i) => (
                            <div key={i} className="h-full">
                                <UsageCard title={f.title} desc={f.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
