import ChildPricingCard from '@/components/card/ChildPricingCard'
import { Disc, Copy, Zap, Camera } from 'lucide-react';

const url = process.env.NEXT_PUBLIC_STACKCONSOLE_URL?.replace(/\/$/, "");

const products = [
  {
    title: "ISOs Library",
    price: "Free",
    description: "Upload and manage custom operating system images. Deploy your own specialized environments using our high-speed global ISO library.",
    icon: <Disc size={32} strokeWidth={1.5} />,
    href: `${url}/iso`,
    tag: "Deployment",
    hasButton: true,
  },
  {
    title: "My Templates",
    price: "0.02", // Price per GB of storage
    description: "Create snapshots of configured instances to use as gold images. Standardize your deployments and launch pre-configured clusters instantly.",
    icon: <Copy size={32} strokeWidth={1.5} />,
    href: `${url}/templates`,
    tag: "Automation",
    hasButton: true,
  },
  {
    title: "VM Autoscale",
    price: "Free",
    description: "Automatically adjust your instance count based on real-time traffic. Maintain performance during peaks and save costs during quiet hours.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    href: `${url}/autoscale`,
    tag: "Scalability",
    hasButton: false,

  },
  {
    id: "snapshot",
    title: "VM Snapshot",
    price: "Free",
    description: "Capture the exact state of your virtual machine at any moment. Create instant backups before major updates or configuration changes.",
    details: [
      "Point-in-time state recovery",
      "Instant manual snapshots",
      "Zero-downtime capture",
      "Easy restoration process"
    ],
    icon: <Camera size={32} strokeWidth={1.5} />, // Camera or HardDrive icon works best
    image: "/images/snapshot-preview.jpg",
    href: `${url}/snapshots`,
    tag: "Data Protection",
    hasButton: true,

  }
];

export default function VirtualMachineTablePriceSection() {
  return (
    <section className='px-4 lg:px-8 md:px-8'>
      <div className="py-12 max-w-7xl mx-auto text-center">
        <p className="lg:text-4xl md:text-4xl text-2xl font-semibold mb-2 text-center text-gray-700">
          High-Performance Deployment Tools
        </p>
        <p className="text-center max-w-5xl mx-auto text-gray-600">
          Enhance your compute environment with specialized boot media, standardized gold images, and intelligent scaling. These tools are designed to streamline your workflow and ensure your infrastructure grows with your traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ChildPricingCard
            price={product.price}
            key={product.title}
            title={product.title}
            description={product.description}
            icon={product.icon}
            href={product.href}
            showButton={product.hasButton}
          />
        ))}
      </div>
    </section>
  )
}
