import ChildPricingCard from "@/components/card/ChildPricingCard";
import { Camera, HardDriveDownload } from "lucide-react";

const products = [
    // {
    //     title: "Virtual Machine Snapshot",
    //     price: "0.02", // Example price per GB
    //     description: "Capture a point-in-time state of your entire instance, including memory and disk. Perfect for quick rollbacks before performing system updates.",
    //     icon: <Camera size={32} strokeWidth={1.5} />,
    //     href: "https://stack-console.cloudlab.cam/app/vm-snapshots",
    //     tag: "Recovery"
    // },
    {
        title: "Block Storage Snapshot",
        price: "0.01",
        description: "Create instant copies of your data volumes. Protect your databases and file systems without affecting the performance of your running instance.",
        icon: <HardDriveDownload size={32} strokeWidth={1.5} />,
        href: "https://stack-console.cloudlab.cam/app/storage-snapshots",
        tag: "Storage"
    }
]

export default function SnapshotPricingSection() {
    return (
        <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 ">
                {products.map((product) => (
                    <ChildPricingCard
                        price={product.price}
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        icon={product.icon}
                        href={product.href}
                    />
                ))}
            </div>
        </section>

    )
}
