import ChildPricingCard from '@/components/card/ChildPricingCard';
import { ShieldCheck, CloudUpload } from 'lucide-react';

const products = [
    {
        title: "Virtual Machine Backup",
        price: "20%", // Usually a percentage of instance cost
        description: "Full-stack protection for your instances. Automatically backs up the operating system, configurations, and all attached volumes for total disaster recovery.",
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        href: "https://stack-console.cloudlab.cam/app/backups",
        tag: "Full Protection"
    },
    {
        title: "Block Storage Backup",
        price: "0.05", // Price per GB
        description: "Secure your critical data volumes independently. High-durability backups for your block storage, allowing for easy data restoration without affecting your VM.",
        icon: <CloudUpload size={32} strokeWidth={1.5} />,
        href: "https://stack-console.cloudlab.cam/app/storage-backup",
        tag: "Data Security"
    }
];

export default function BackupPricingSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
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
    )
}
