import React from "react";
import HeroComponent from "../HeroComponent";
import {
  CloudCog,
  BrickWallFire,
  ShipWheel,
  LayoutGrid,
  Blocks,
  SwitchCamera,
  RotateCcw,
  Archive,
  Earth,
  Cpu,
  Cloud,
  Shield,
  Group,
} from "lucide-react";
import ProductCard from "../card/ProductCard";
import GetStartedCard from "../card/GetStartedCard";

// --- Compute tab products ---
const computeProducts = [
  {
    logo: <CloudCog className="h-12 w-12 text-white" />,
    title: "Virtual Machine",
    desc: "Run scalable virtual machines optimized for performance and flexibility.",
  },
  {
    logo: <BrickWallFire className="h-12 w-12 text-white" />,
    title: "VNF Appliances",
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
    title: "Virtual Machine",
    desc: "Run scalable virtual machines optimized for performance and flexibility.",
  },
  {
    logo: <Cpu className="h-12 w-12 text-white" />,
    title: "Container Service",
    desc: "Deploy and manage Docker containers easily across your infrastructure.",
  },
  {
    logo: <Cloud className="h-12 w-12 text-white" />,
    title: "App Engine",
    desc: "Build and host modern web applications with automatic scaling and updates.",
  },
  {
    logo: <Shield className="h-12 w-12 text-white" />,
    title: "GPU Compute",
    desc: "Boost your AI and ML workloads using GPU-accelerated compute power.",
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

export default function ProductPage() {
  return (
    <div className="bg-gray-200 w-screen">
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[500px]"
        image="/hero-bg.png"
        title="Simple Predictable Pricing"
        description="Always know what you’ll pay with monthly caps and flat pricing"
      />

      <div className="m-36 max-w-7xl mx-auto">
        {/* title and description */}
        <div className="my-12 text-center">
          <p className="text-5xl font-bold text-gray-700 ">Compute</p>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Bringing your business to the next level with our innovative
            solutions designed to enhance performance, efficiency, and long-term
            growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
          {computeProducts.map((product, index) => (
            <ProductCard
              key={index}
              logo={product.logo}
              title={product.title}
              description={product.desc}
            />
          ))}
        </div>
      </div>

      <div className="m-36 max-w-7xl mx-auto">
        {/* title and description */}
        <div className="my-12 text-center">
          <p className="text-5xl font-bold text-gray-700 ">
            Storage & Data Protection
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Bringing your business to the next level with our innovative
            solutions designed to enhance performance, efficiency, and long-term
            growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
          {storageProduct.map((product, index) => (
            <ProductCard
              key={index}
              logo={product.logo}
              title={product.title}
              description={product.desc}
            />
          ))}
        </div>
      </div>

      <div className="m-36 max-w-7xl mx-auto">
        {/* title and description */}
        <div className="my-12 text-center">
          <p className="text-5xl font-bold text-gray-700 ">Networking</p>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Bringing your business to the next level with our innovative
            solutions designed to enhance performance, efficiency, and long-term
            growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
          {networkingProduct.map((product, index) => (
            <ProductCard
              key={index}
              logo={product.logo}
              title={product.title}
              description={product.desc}
            />
          ))}
        </div>
      </div>

      <div className="mt-36 mb-36">
        {/* title and description */}
        <div className="my-12 text-center">
          <p className="text-5xl font-bold text-gray-700 ">
            Policy & Placement
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Bringing your business to the next level with our innovative
            solutions designed to enhance performance, efficiency, and long-term
            growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
          {policyProduct.map((product, index) => (
            <ProductCard
              key={index}
              logo={product.logo}
              title={product.title}
              description={product.desc}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-36">
        <GetStartedCard />
      </div>
    </div>
  );
}
