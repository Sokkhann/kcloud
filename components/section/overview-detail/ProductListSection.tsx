import ScrollReveal from '@/components/animations/ScrolReveal'
import ProductCardCarousel from '@/components/card/ProductCardCarousel'
import { ProductListProps } from '@/type/dataTypes';

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

export default async function ProductListSection() {

  return (
    <section
      id="products"
      className="text-center lg:pb-24"
    >
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          {/* title and description */}
          <div className="text-center mx-4 mb-4">
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
              See Our Products & Services
            </p>
            <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>

          {/* Product Tabs section */}
          {/* <ProductTab /> */}
          <ProductCardCarousel productMenu={additionalProductLists} />
        </div>
      </ScrollReveal>
    </section>
  )
}
