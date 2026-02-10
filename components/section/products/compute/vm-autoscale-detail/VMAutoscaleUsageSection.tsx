import UsageCard from '@/components/card/UsageCard';
import {
    Timer,
    Activity,
    ArrowUpCircle,
    LineChart
} from 'lucide-react';

const cards = [
    {
        title: "Scaling Event Frequency",
        desc: "Monitor how often scale-out and scale-in events occur to identify volatile workload patterns.",
        icon: Activity
    },
    {
        title: "Average Provisioning Time",
        desc: "Track the time taken for new instances to become 'Ready' and join the active resource pool.",
        icon: Timer
    },
    {
        title: "Peak Instance Count",
        desc: "Analyze the maximum number of concurrent instances utilized during high-traffic spikes.",
        icon: ArrowUpCircle
    },
    {
        title: "Resource Efficiency",
        desc: "Compare your total provisioned capacity against actual utilization to identify over-provisioning.",
        icon: LineChart
    }
];

export default function VMAutoscaleUsageSection() {
    return (
        <section className='max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32'>
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
