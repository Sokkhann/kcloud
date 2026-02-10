import SimpleCard from '@/components/card/SimpleCard'
import React from 'react'

import { LifeBuoy, Terminal, Box, Share } from "lucide-react";

const useCases = [
  {
    title: "Disaster Recovery (DR)",
    desc: "Replicate snapshots to remote zones to reinstall instances or restore data swiftly following system failures or data corruption.",
    icon: <LifeBuoy size={24} strokeWidth={1.5} />,
  },
  {
    title: "Application Testing & Development",
    desc: "Snapshot a 'clean' volume before high-risk changes, like database upgrades, to roll back instantly if the update fails.",
    icon: <Terminal size={24} strokeWidth={1.5} />,
  },
  {
    title: "Custom Template Creation",
    desc: "Convert a configured root disk snapshot into a Template to deploy multiple pre-configured VM instances rapidly.",
    icon: <Box size={24} strokeWidth={1.5} />,
  },
  {
    title: "Data Portability",
    desc: "Move data between different storage pools or across geographical locations by securely copying snapshots.",
    icon: <Share size={24} strokeWidth={1.5} />,
  },
];

export default function BlockStorageSnapshotUseCaseSection() {
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
