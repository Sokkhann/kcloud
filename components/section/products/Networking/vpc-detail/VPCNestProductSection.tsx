import NestedProductCard from '@/components/card/NestedProductCard'
import { Router } from 'lucide-react'
import React from 'react'

const nestProducts = [
    {
        title: "Enterprise Virtual Router",
        icon: <Router size={32} strokeWidth={1.5} />, // "Router" icon from Lucide
        desc: "The intelligent core of your VPC networking. Our Virtual Router (VR) acts as a dedicated, high-performance gateway that manages all traffic, security, and connectivity for your isolated cloud environment.",
        details: [
            "L3 Networking Hub: Handles advanced routing, DHCP for IP assignment, and DNS services for your entire VPC.",
            "Integrated Firewall: Manage Egress and Ingress rules directly at the network edge to protect your instances.",
            "Remote Access VPN: Securely connect mobile users to your private network using L2TP, IPsec, or PPTP protocols.",
            "Internal Load Balancing: Distribute traffic across multiple tiers within your VPC for high-availability applications.",
            "Redundant High Availability: Optional VR redundancy ensures that if one router fails, a backup takes over instantly with zero downtime."
        ]
    }
]

export default function VPCNestProductSection() {
    return (
        <section className="py-6 md:py-12 lg:py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Optional Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Advanced Management Features
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Powerful tools to automate, protect, and scale your infrastructure.
                    </p>
                </div>

                {/* 3 Cards in a Row Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 lg:mx-8 md:mx-8">
                    {nestProducts.map((p, i) => (
                        <NestedProductCard
                            key={i}
                            desc={p.desc}
                            title={p.title}
                            icon={p.icon}
                            details={p.details}
                        />
                    ))}
                </div>

                {/*  */}
            </div>
        </section>
    )
}
