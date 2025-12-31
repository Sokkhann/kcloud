import ChildPricingCard from '@/components/card/ChildPricingCard'
import { Disc, Copy, Zap } from 'lucide-react';

const products = [
  {
    title: "ISOs Library",
    price: "Free",
    description: "Upload and manage custom operating system images. Deploy your own specialized environments using our high-speed global ISO library.",
    icon: <Disc size={32} strokeWidth={1.5} />,
    href: "https://stack-console.cloudlab.cam/app/iso",
    tag: "Deployment"
  },
  {
    title: "My Templates",
    price: "0.02", // Price per GB of storage
    description: "Create snapshots of configured instances to use as gold images. Standardize your deployments and launch pre-configured clusters instantly.",
    icon: <Copy size={32} strokeWidth={1.5} />,
    href: "https://stack-console.cloudlab.cam/app/templates",
    tag: "Automation"
  },
  {
    title: "VM Autoscale",
    price: "Free",
    description: "Automatically adjust your instance count based on real-time traffic. Maintain performance during peaks and save costs during quiet hours.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    href: "https://stack-console.cloudlab.cam/app/autoscale",
    tag: "Scalability"
  }
];

export default function VirtualMachineTablePriceSection() {
  return (
    <section>
      <div className="py-12 max-w-7xl mx-auto text-center">
        <p className="lg:text-4xl md:text-4xl text-2xl font-semibold mb-2 text-center text-gray-700">
          High-Performance Deployment Tools
        </p>
        <p className="text-center max-w-5xl mx-auto text-gray-600">
          Enhance your compute environment with specialized boot media, standardized gold images, and intelligent scaling. These tools are designed to streamline your workflow and ensure your infrastructure grows with your traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ChildPricingCard
            price={product.price}
            key={product.title}
            title={product.title}
            description={product.description}
            icon={product.icon}
            href={product.href}
            showButton={true}
          />
        ))}
      </div>
    </section>
  )
}
