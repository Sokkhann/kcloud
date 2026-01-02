import NestedProductCard from '@/components/card/NestedProductCard'
import { Layers, Zap, Camera, Disc } from 'lucide-react'
import React from 'react'

// const nestProducts = [
//     {
//         title: "Custom Templates & Cloning",
//         icon: Layers,
//         desc: "Save hours of setup time by creating 'Gold Images' of your perfectly configured servers. Capture your OS, apps, and security patches into a private template for instant replication.",
//         details: [
//             "Snapshot-to-Template: Convert any VM into a reusable image with one click.",
//             "Optimized Deployment: Launch new nodes in seconds with pre-installed apps.",
//             "Version Control: Keep fleet-wide security patches consistent and up to date.",
//             "Template Sharing: Securely share images across different projects and teams."
//         ]
//     },
//     {
//         title: "Intelligent Auto-Scaling",
//         icon: Zap,
//         desc: "Future-proof your applications with real-time responsiveness. Automatically handle massive traffic spikes while slashing costs by powering down unused resources during quiet hours.",
//         details: [
//             "Metric-Based Triggers: Scale based on CPU, RAM, or network thresholds.",
//             "Load Balancer Sync: New instances register automatically to serve traffic.",
//             "Cool-Down Periods: Ensure system stability with configurable scaling delays.",
//             "Budget Guardrails: Set Min/Max instance counts to strictly control costs."
//         ]
//     },
//     {
//         title: "VM Snapshots",
//         icon: Camera,
//         desc: "Capture a complete point-in-time state of your instance's data. Our snapshot technology allows you to freeze your environment before updates, automate recurring backups with custom retention policies, and instantly revert to a healthy state if a failure occurs.",
//         details: [
//             "Supports Manual & Scheduled Policies",
//             "Point-in-time Data Consistency",
//             "Incremental Backup Support",
//             "Instant 'Create Volume' from Snapshot"
//         ]
//     }
// ]

const nestProducts = [
    {
        id: "cloud",
        image: "/featured2.png",
        title: "Custom ISO Management",
        icon: <Disc size={32} strokeWidth={1.5} />, // "Disc" icon represents the ISO/Optical media
        desc: "Experience ultimate OS flexibility by bringing your own software to the GCX Cloud. Whether it's a specialized Linux distro, a custom Windows build, or a proprietary appliance, our ISO management allows you to boot, install, and configure your environment from scratch.",
        details: [
            "Bring Your Own OS: Upload and register custom bootable ISO images directly to your account.",
            "Universal Compatibility: Support for all major OS types including Linux, Windows, FreeBSD, and more.",
            "Interactive Installation: Use the GCX Web Console to walk through your OS installation just like a physical server.",
            "ISO-to-Template Workflow: Install your perfect OS from an ISO, then convert it into a reusable Template for mass scaling.",
            "Secure Sharing: Keep your ISOs private or share them across projects for team-wide standardization."
        ]
    },
    {
        id: "security",
        image: "/featured2.png",
        title: "Custom Templates & Cloning",
        icon: <Layers size={32} strokeWidth={1.5} />,
        desc: "Save hours of setup time by creating 'Gold Images' of your perfectly configured servers. Capture your OS, apps, and security patches into a private template for instant replication.",
        details: [
            "Snapshot-to-Template: Convert any VM into a reusable image with one click.",
            "Optimized Deployment: Launch new nodes in seconds with pre-installed apps.",
            "Version Control: Keep fleet-wide security patches consistent and up to date.",
            "Template Sharing: Securely share images across different projects and teams."
        ]
    },
    {
        id: "scaling",
        image: "/featured2.png",
        title: "Intelligent Auto-Scaling",
        icon: <Zap size={32} strokeWidth={1.5} />,
        desc: "Future-proof your applications with real-time responsiveness. Automatically handle massive traffic spikes while slashing costs by powering down unused resources during quiet hours.",
        details: [
            "Metric-Based Triggers: Scale based on CPU, RAM, or network thresholds.",
            "Load Balancer Sync: New instances register automatically to serve traffic.",
            "Cool-Down Periods: Ensure system stability with configurable scaling delays.",
            "Budget Guardrails: Set Min/Max instance counts to strictly control costs."
        ]
    },
    {
        id: "snapshot",
        image: "/featured2.png",
        title: "VM Snapshots",
        icon: <Camera size={32} strokeWidth={1.5} />,
        desc: "Capture a complete point-in-time state of your instance's data. Our snapshot technology allows you to freeze your environment before updates, automate recurring backups with custom retention policies, and instantly revert to a healthy state if a failure occurs.",
        details: [
            "Supports Manual & Scheduled Policies",
            "Point-in-time Data Consistency",
            "Incremental Backup Support",
            "Instant 'Create Volume' from Snapshot"
        ]
    }
]

export default function VMNestedProductSection() {
    return (
        <section className="lg:py-12 md:py-12 py-6 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Optional Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Advanced Management Features
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Powerful tools to automate, protect, and scale your infrastructure.
                    </p>
                </div>

                {/* 3 Cards in a Row Grid */}
                <NestedProductCard products={nestProducts} />

                {/*  */}
            </div>
        </section>
    )
}
