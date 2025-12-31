import SimpleCard from '@/components/card/SimpleCard'
import { Database, Building2, FolderKanban, ArrowLeftRight } from 'lucide-react';
import React from 'react'

const storageUseCases = [
    {
        title: "Database Hosting",
        icon: <Database size={24} strokeWidth={1.5} />,
        desc: "Ideal for high-transaction databases (MySQL, PostgreSQL, MongoDB) that require low-latency disk I/O and strict data persistence."
    },
    {
        title: "Enterprise Applications",
        icon: <Building2 size={24} strokeWidth={1.5} />,
        desc: "Run complex ERP, CRM, or legacy software that requires a traditional 'D:' or '/opt' drive structure."
    },
    {
        title: "Content Management",
        icon: <FolderKanban size={24} strokeWidth={1.5} />,
        desc: "Store large media libraries, assets, or web content that needs to be accessed quickly by your web server instances."
    },
    {
        title: "Transactional Workloads",
        icon: <ArrowLeftRight size={24} strokeWidth={1.5} />,
        desc: "Handle thousands of simultaneous read/write operations for e-commerce and financial platforms."
    }
];

export default function BlockStorageUseCaseSection() {
    return (
        <div className=" w-screen">
            <div className=" max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
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
                    {storageUseCases.map((card, index) => (
                        <div key={index} className="relative">
                            <SimpleCard title={card.title} desc={card.desc} icon={card.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
