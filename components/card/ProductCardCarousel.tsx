import { icons } from "lucide-react";
import { ProductListProps } from "@/type/dataTypes";
import Link from "next/link";

// additional data for product list
const additionalProductLists: ProductListProps[] = [
  {
    name: "Virtual Machine",
    category: "Compute",
    path: "/products/virtual-machine",
    icon: "Cpu",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    name: "Kubernetes",
    category: "Compute",
    path: "/products/kubernetes",
    icon: "Layers",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  {
    name: "IP Address",
    category: "Networking",
    path: "/products/ip-address",
    icon: "Fingerprint",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    name: "Load Balancer",
    category: "Networking",
    path: "/products/load-balancer",
    icon: "GitFork",
    description: "Distribute incoming traffic across multiple targets to ensure high availability and reliability."
  },
  {
    name: "VPC",
    category: "Networking",
    path: "/products/vpc",
    icon: "ShieldCheck",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  {
    name: "Block Storage Snapshot",
    category: "Storage",
    path: "/products/snapshot",
    icon: "Camera",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    name: "Block Storage",
    category: "Storage",
    path: "/products/block-storage",
    icon: "Database",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    name: "VM Snapshot",
    category: "Storage",
    path: "/products/vm-snapshot",
    icon: "Timer",
    description: "Quickly restore your virtual machine to a previous state with instant snapshots."
  },
];


export default function ProductCardCarousel() {

  console.log("Data Resposne Here is the product => ", additionalProductLists)
  return (
    <div className="w-full">
      {/* Card Row */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {additionalProductLists.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

// product cards sign icon as background 
const ProductCard = ({ product }: { product: ProductListProps }) => {
  const Icon = icons[product.icon];
  return (
    <Link href={product.path} className="group relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-gcxPrimary/60 aspect-[4/3] sm:aspect-square p-5 md:p-8">
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="lg:text-2xl md:text-2xl text-lg font-bold text-gray-700 group-hover:text-gcxPrimary mb-4">{product.name}</h3>
        <p className="text-gray-500 leading-relaxed mb-auto">
          {product.description}
        </p>
        <Icon className="w-12 h-12 self-end text-gray-200 group-hover:text-gcxprimary transition-all" />
      </div>
    </Link>
  );
};