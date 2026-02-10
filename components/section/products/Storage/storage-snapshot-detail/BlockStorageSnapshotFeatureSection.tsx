import FeatureCardV2 from '@/components/card/FeatureCardV2'
import React from 'react'
import { Target, CalendarDays, Database, Zap, Map, FileStack } from "lucide-react";

const features = [
    {
        title: "Targeted Snapshots",
        desc: "Capture the state of individual disk volumes (Root or Data) without needing to snapshot the entire virtual machine.",
        icon: Target,
    },
    {
        title: "Flexible Scheduling",
        desc: "Supports both ad hoc (manual) snapshots and automated policies that trigger backups on an hourly, daily, weekly, or monthly basis.",
        icon: CalendarDays,
    },
    {
        title: "Tiered Storage Lifecycle",
        desc: "Snapshots move from high-performance Primary Storage to Secondary Storage (NFS/S3) for cost-effective, long-term retention.",
        icon: Database,
    },
    {
        title: "Incremental Backups",
        desc: "Efficiently captures only the changes since the last snapshot to reduce storage consumption and processing time.",
        icon: Zap,
    },
    {
        title: "Cross-Zone Replication",
        desc: "Snapshots can be copied across different physical datacenters to provide a robust defense against regional failures.",
        icon: Map,
    },
    {
        title: "Granular Restoration",
        desc: "Create new block volumes directly from historical snapshots, allowing for specific file recovery or testing of previous data states.",
        icon: FileStack,
    },
];

export default function BlockStorageSnapshotFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-6 lg:py-12 md:py-12'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Key Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Ensure business continuity with automated, off-site data protection for your mission-critical workloads.
                    Implement robust retention policies and secure encryption to protect your enterprise data from accidental loss or corruption.
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
