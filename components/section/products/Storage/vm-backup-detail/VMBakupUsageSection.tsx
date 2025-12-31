
import UsageCard from '@/components/card/UsageCard';
import {
    CheckCircle2,
    HardDrive,
    Zap,
    AlertTriangle
} from 'lucide-react';

const cards = [
    {
        title: "Job Success Rate",
        desc: "Track the percentage of successfully completed backup cycles over the last 30 days.",
        icon: CheckCircle2
    },
    {
        title: "Storage Pool Growth",
        desc: "Monitor the total space consumed by your backup archives to manage storage costs effectively.",
        icon: HardDrive
    },
    {
        title: "Transfer Throughput",
        desc: "Analyze the speed of data ingestion to optimize your network bandwidth during backup windows.",
        icon: Zap
    },
    {
        title: "Recovery Point Objective (RPO)",
        desc: "Verify that the time gap between your most recent backups aligns with your business safety targets.",
        icon: AlertTriangle
    }
];

export default function VMBakupUsageSection() {
    return (
        <section className='max-w-7xl mx-auto pb-6 lg:pb-12 md:pb-12'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Usage & Performance Data
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Analyze the efficiency of your scaling groups, including cooldown periods and instance lifecycle durations. Track historical scaling trends to fine-tune your threshold policies and optimize resource responsiveness.                </p>
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
    )
}
