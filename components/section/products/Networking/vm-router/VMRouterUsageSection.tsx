import UsageCard from '@/components/card/UsageCard';
import { Zap, Cpu, Activity, History } from 'lucide-react';

const cards = [
    {
        title: "Throughput Analysis",
        desc: "Monitor real-time inbound and outbound bitrates to identify peak traffic loads and bandwidth bottlenecks.",
        icon: Activity
    },
    {
        title: "Packet Processing (PPS)",
        desc: "Track the number of packets processed per second to ensure the routing engine is handling traffic efficiently.",
        icon: Zap
    },
    {
        title: "Concurrent Sessions",
        desc: "View the total number of active TCP/UDP connections currently being managed by the NAT and Firewall engine.",
        icon: History
    },
    {
        title: "System Resource Load",
        desc: "Monitor CPU and Memory overhead to ensure the virtual appliance has enough overhead for heavy routing tasks.",
        icon: Cpu
    }
];

export default function VMRouterUsageSection() {
    return (
        <section className='max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Usage & Performance Data
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Monitor real-time packet processing speeds, active session counts, and gateway throughput. Track hardware resource utilization to ensure optimal routing performance and network stability.
                </p>
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
