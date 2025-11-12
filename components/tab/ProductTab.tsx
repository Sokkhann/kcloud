import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "../card/ProductCard";
import {
  Cpu,
  Cloud,
  CloudCog,
  BrickWallFire,
  ShipWheel,
  LayoutGrid,
  Blocks,
  SwitchCamera,
  RotateCcw,
  Archive,
  Earth,
  Group,
} from "lucide-react";

// --- Compute tab products ---
const computeProducts = [
  {
    logo: <CloudCog className="h-12 w-12 text-white" />,
    title: "Virtual Machine",
    desc: "Run scalable virtual machines optimized for performance and flexibility.",
  },
  {
    logo: <BrickWallFire className="h-12 w-12 text-white" />,
    title: "VNF Appliance",
    desc: "Deploy and manage Docker containers easily across your infrastructure.",
  },
  {
    logo: <ShipWheel className="h-12 w-12 text-white" />,
    title: "Kubernetes",
    desc: "Build and host modern web applications with automatic scaling and updates.",
  },
  {
    logo: <LayoutGrid className="h-12 w-12 text-white" />,
    title: "App",
    desc: "Boost your AI and ML workloads using GPU-accelerated compute power.",
  },
];

// --- storage tab products ---
const storageProduct = [
  {
    logo: <Blocks className="h-12 w-12 text-white" />,
    title: "Block Storage",
    desc: "Run scalable virtual machines optimized for performance and flexibility.",
  },
  {
    logo: <SwitchCamera className="h-12 w-12 text-white" />,
    title: "Snapshot",
    desc: "Deploy and manage Docker containers easily across your infrastructure.",
  },
  {
    logo: <RotateCcw className="h-12 w-12 text-white" />,
    title: "Backup",
    desc: "Build and host modern web applications with automatic scaling and updates.",
  },
  {
    logo: <Archive className="h-12 w-12 text-white" />,
    title: "Template",
    desc: "Boost your AI and ML workloads using GPU-accelerated compute power.",
  },
  {
    logo: <Earth className="h-12 w-12 text-white" />,
    title: "ISOs",
    desc: "Boost your AI and ML workloads using GPU-accelerated compute power.",
  },
];

// --- networking tab products ---
const networkingProduct = [
  {
    logo: <Cpu className="h-12 w-12 text-white" />,
    title: "Network",
    desc: "Run scalable virtual machines optimized for performance and flexibility.",
  },
  {
    logo: <Cpu className="h-12 w-12 text-white" />,
    title: "Load Balancer",
    desc: "Deploy and manage Docker containers easily across your infrastructure.",
  },
  {
    logo: <Cloud className="h-12 w-12 text-white" />,
    title: "DNS",
    desc: "Build and host modern web applications with automatic scaling and updates.",
  },
];

// --- product tab products ---
const policyProduct = [
  {
    logo: <Group className="h-12 w-12 text-white" />,
    title: "Affinity Group",
    desc: "Deploy and manage Docker containers easily across your infrastructure.",
  },
];

export function ProductTab() {
  return (
    <div className="">
      <Tabs defaultValue="compute" className="bg-none">
        {/* Tabs List */}
        <TabsList
          className="
          w-screen
          lg:w-full
          md:w-full
          lg:px-0
          md:px-8
          px-4
          h-24
          py-auto
          border-b-2 
          rounded-none 
          flex
          justify-start
          lg:justify-center
          md:justify-center
          scroll-px-4
          overflow-x-auto 
          whitespace-nowrap
          lg:overflow-visible 
          scrollbar-hide 
          snap-x 
          snap-mandatory
          bg-gray-100
      "
        >
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="compute"
          >
            Compute
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="storage"
          >
            Storage & Data Protection
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="networking"
          >
            Networking
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="policy"
          >
            Policy & Placement
          </TabsTrigger>
        </TabsList>

        {/* Compute Tab */}
        <TabsContent value="compute">
          <TabsContent value="compute">
            <div className="grid justify-center justify-items-center 
               md:gap-x-8 gap-x-4 gap-y-16 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
              {computeProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  logo={product.logo}
                  title={product.title}
                  description={product.desc}
                />
              ))}
            </div>
          </TabsContent>
        </TabsContent>

        {/* Storage Tab */}
        <TabsContent value="storage">
          <div
            className="grid justify-center justify-items-center 
               md:gap-x-8 gap-x-4 gap-y-16 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
          >
            {storageProduct.map((product, index) => (
              <ProductCard
                key={index}
                logo={product.logo}
                title={product.title}
                description={product.desc}
              />
            ))}
          </div>
        </TabsContent>

        {/* Networking Tab */}
        <TabsContent value="networking">
          <div className="grid justify-center justify-items-center 
               md:gap-x-8 gap-x-4 gap-y-16 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {networkingProduct.map((product, index) => (
              <ProductCard
                key={index}
                logo={product.logo}
                title={product.title}
                description={product.desc}
              />
            ))}
          </div>
        </TabsContent>

        {/* Policy Tab */}
        <TabsContent value="policy">
          <div className="grid justify-center justify-items-center 
               md:gap-x-8 gap-x-4 gap-y-16 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {policyProduct.map((product, index) => (
              <ProductCard
                key={index}
                logo={product.logo}
                title={product.title}
                description={product.desc}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
