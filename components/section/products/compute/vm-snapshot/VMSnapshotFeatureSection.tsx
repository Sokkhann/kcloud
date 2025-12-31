import FeatureCardV2 from '@/components/card/FeatureCardV2';
import { RotateCcw, Database, Copy, FileCheck, Clock, History, ShieldCheck, CalendarClock, Cpu, RefreshCw, Zap } from 'lucide-react';
import React from 'react'

const features = [
    {
        title: "Point-in-Time Recovery",
        desc: "Revert your virtual machine to the exact state captured during the snapshot, including disk data and configuration.",
        icon: RotateCcw
    },
    {
        title: "Incremental Storage",
        desc: "Efficiently save storage space by capturing only the data blocks that have changed since the last backup.",
        icon: Database
    },
    {
        title: "Instance Cloning",
        desc: "Create new virtual machine instances using the snapshot as a template for rapid environment replication.",
        icon: Copy
    },
    {
        title: "Data Consistency",
        desc: "Ensure application-level consistency by capturing memory states and flushing pending disk I/O operations.",
        icon: FileCheck
    },
    {
        title: "Automated Scheduling",
        desc: "Set up recurring snapshot policies to maintain regular recovery points without manual intervention.",
        icon: Clock
    },
    {
        title: "Lifecycle History",
        desc: "Track the creation, expiration, and restoration history of all snapshots associated with your instance.",
        icon: History
    }
];

export default function VMSnapshotFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-16 lg:py-32 md:py-32'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    VM Snapshot Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Advanced point-in-time recovery tools that capture the complete state of your virtual disk and configurations. Seamlessly revert to stable versions, clone environments, and manage incremental data consistency across your infrastructure.
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
