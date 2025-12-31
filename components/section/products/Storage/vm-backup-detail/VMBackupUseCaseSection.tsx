import SimpleCard from '@/components/card/SimpleCard'
import React from 'react'

import { ShieldAlert, FileCheck, RotateCcw, Truck } from "lucide-react";

const useCases = [
  {
    title: "Ransomware & Cyber Resilience",
    desc: "Maintain air-gapped, immutable backup copies on external repositories to recover quickly from security breaches and cyber attacks.",
    icon: <ShieldAlert size={24} strokeWidth={1.5} />,
  },
  {
    title: "Compliance & Audit Readiness",
    desc: "Meet regulatory requirements by enforcing mandatory backup schedules and long-term retention policies across all production workloads.",
    icon: <FileCheck size={24} strokeWidth={1.5} />,
  },
  {
    title: "Development & Testing Rollbacks",
    desc: "Take an ad-hoc backup before high-risk software upgrades to ensure a guaranteed 'clean state' for immediate, full-instance restoration.",
    icon: <RotateCcw size={24} strokeWidth={1.5} />,
  },
  {
    title: "Simplified Migration",
    desc: "Use backups to move workloads between different hardware clusters or zones without the complexity of manual data transfers.",
    icon: <Truck size={24} strokeWidth={1.5} />,
  },
];

export default function VMBackupUseCaseSection() {
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
