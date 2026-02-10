import FeatureCardV2 from '@/components/card/FeatureCardV2';
import {
    TrendingUp,
    Zap,
    Layers,
    ShieldCheck,
    Coins,
    BarChart3
} from 'lucide-react';

const features = [
    {
        title: "Dynamic Scaling Policies",
        desc: "Automatically add or remove instances based on CPU, memory, or custom metrics to match workload demand.",
        icon: TrendingUp
    },
    {
        title: "Predictive Scaling",
        desc: "Leverage machine learning to anticipate traffic spikes and scale out resources before performance is affected.",
        icon: Zap
    },
    {
        title: "Multi-Zone Distribution",
        desc: "Ensure high availability by automatically spreading scaled instances across multiple availability zones.",
        icon: Layers
    },
    {
        title: "Health Check Integration",
        desc: "Automatically replace unhealthy instances with fresh ones to maintain application uptime and reliability.",
        icon: ShieldCheck
    },
    {
        title: "Cost Optimization",
        desc: "Reduce expenses by scaling down infrastructure during low-traffic periods without manual intervention.",
        icon: Coins
    },
    {
        title: "Real-time Metrics",
        desc: "Monitor scaling events and performance triggers through integrated telemetry and detailed activity logs.",
        icon: BarChart3
    }
];

export default function VMAutoscaleFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-16 lg:py-32 md:py-32'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Core Virtual Router Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Dynamically adjust your compute capacity based on real-time traffic demands and resource utilization. 
                    Automate the lifecycle of virtual instances to maintain consistent performance while minimizing operational costs.
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
