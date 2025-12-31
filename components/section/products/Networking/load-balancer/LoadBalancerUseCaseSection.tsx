import SimpleCard from '@/components/card/SimpleCard'
import React from 'react'

import { Building2, ShieldCheck, TrendingUp, RefreshCw } from "lucide-react";

const useCases = [
  {
    title: "High-Traffic Enterprise Applications",
    desc: "Ideal for large-scale web applications or databases that require more processing power than a standard virtual router can provide.",
    icon: <Building2 size={24} strokeWidth={1.5} />,
  },
  {
    title: "Strict Compliance Requirements",
    desc: "Perfect for finance or healthcare industries that mandate the use of dedicated, physical security appliances for data isolation.",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
  },
  {
    title: "Auto-Scaling E-commerce Sites",
    desc: "Handle seasonal spikes in traffic without manual intervention using the AutoScale feature to ensure site responsiveness under load.",
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
  },
  {
    title: "Application Continuity",
    desc: "Leverage advanced health checks and sticky sessions for mission-critical apps that need persistent connections and zero downtime.",
    icon: <RefreshCw size={24} strokeWidth={1.5} />,
  },
];
export default function LoadBalancerUseCaseSection() {
    return (
        <div className=" w-screen">
            <div className=" max-w-7xl mx-auto pb-6 lg:pb-12 md:pb-12">
                <div className="text-center pb-8 max-w-3xl mx-auto">
                    <p className="text-4xl font-bold text-gray-700">Use Cases</p>
                    <p className="text-base text-gray-600 lg:mx-8 md:mx-8 mx-4">
                        Kubernetes (K8s) is an open-source system for automating the
                        deployment, scaling, and management of containerized applications.
                        Its primary use cases revolve around managing complex, distributed,
                        and high-scale workloads.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
                    {useCases.map((card, index) => (
                        <div key={index} className="relative">
                            <SimpleCard title={card.title} desc={card.desc} icon={card.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
