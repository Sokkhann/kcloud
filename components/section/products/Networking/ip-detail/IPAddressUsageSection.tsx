import UsageCard from '@/components/card/UsageCard'
import React from 'react'

const cards = [{
    title: "Network Bandwidth Usage",
    desc: "Tracks the volume of data flowing through this IP address. It monitors incoming (Inbound) traffic from the internet and outgoing (Outbound) traffic from your resources.",
},
{
    title: "DDoS Mitigation Status",
    desc: "Indicates the real-time security posture of the IP address. This monitors whether the 'Traffic Scrubbing' system is active and filters out malicious attacks.",
},
{
    title: "IP Event Logs",
    desc: "A chronological audit trail of every action taken on this IP address, including allocations, VM assignments, and DNS modifications.",
}]

export default function IPAddressUsageSection() {
    return (
        <section className='max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Usage & Performance Data
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Real-time telemetry and historical analysis of network throughput and connectivity health. This section provides a deep dive into data transfer patterns, identifying peak traffic periods and monitoring latency consistency.</p>
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
