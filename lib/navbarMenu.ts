import { NavbarProducts, PackageProps, ProductListProps } from "@/type/dataTypes";
import { icons } from "lucide-react";

// additional data for menu navbar, footer, and data menu of overview page
const additionalMenuItems = [
  {
    title: "Block Storage Snapshot",
    path: "/products/snapshot",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Backups",
    path: "/products/backup",
    image: "/feature-carousel-backup.png",
    description: "Automated data protection and recovery solutions to keep your business running smoothly."
  },
  {
    title: "Block Storage",
    path: "/products/block-storage",
    image: "/feature-carousel-block-storage.png",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Global Load Balancing",
    path: "/products/load-balancer",
    image: "/feature-carousel-lb.png",
    description: "Distribute traffic across multiple servers globally to ensure high availability and low latency."
  },
  {
    title: "Kubernetes",
    path: "/products/kubernetes",
    image: "/feature-carousel-k8.png",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  {
    title: "ISO",
    path: "/products/iso",
    image: "/feature-carousel-iso.png",
    description: "Upload and boot from your own custom operating system images and tools."
  },
  {
    title: "My Template",
    path: "/products/template",
    image: "/feature-carousel-template.png",
    description: "Save and deploy customized server configurations instantly with reusable templates."
  },
  {
    title: "IP Address",
    path: "/products/ip-address",
    image: "/feature-carousel-ip.png",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Network",
    path: "/products/network",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Configure high-speed private networking and sophisticated routing for your services."
  },
  {
    title: "Pool Card Subscription",
    path: "/products/pool-card",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Manage and optimize your resource allocation with flexible pool-based billing."
  },
  {
    title: "Virtual Machine",
    path: "/products/virtual-machine",
    image: "/feature-carousel-vm.png",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "VM Autoscale",
    path: "/products/vm-autoscale",
    image: "/feature-carousel-vm.png",
    description: "Automatically adjust your compute capacity based on real-time traffic demands."
  },
  {
    title: "Virtual Router",
    path: "/products/virtual-router",
    image: "/feature-carousel-vm.png",
    description: "Advanced virtualized routing and firewall services for secure network management."
  },
  {
    title: "VPC",
    path: "/products/vpc",
    image: "/feature-carousel-vm.png",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  {
    title: "Virtual Machine Backup",
    path: "/products/vm-backup",
    image: "/feature-carousel-vm.png",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
  {
    title: "VM Snapshot",
    path: "/products/vm-snapshot",
    image: "/feature-carousel-vm.png",
    description: "Quickly restore your virtual machine to a previous state with instant snapshots."
  },
  {
    title: "Secure Object Storage",
    path: "/products/secure-object-storage",
    image: "/feature-carousel-object-storage.png",
    description: "S3-compatible, encrypted storage for unstructured data and static assets."
  },
  {
    title: "Block Storage Backup",
    path: "/products/block-storage-backup",
    image: "/feature-carousel-block-storage-backup.png",
    description: "Dedicated backup solutions for block volumes with flexible retention policies."
  },
  {
    title: "Accurate Data Snapshot",
    path: "/products/accurate-data-snapshot",
    image: "/feature-carousel-vm-snapshot.png",
    description: "Precision data state capture ensuring consistency for complex database workloads."
  }
];

// additional data for product list
const additionalProductLists = [
  {
    title: "Block Storage Snapshot",
    path: "/products/snapshot",
    icon: "Camera",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Backups",
    path: "/products/backup",
    icon: "History",
    description: "Automated data protection and recovery solutions to keep your business running smoothly."
  },
  {
    title: "Block Storage",
    path: "/products/block-storage",
    icon: "Database",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Global Load Balancing",
    path: "/products/load-balancer",
    icon: "Globe",
    description: "Distribute traffic across multiple servers globally to ensure high availability."
  },
  {
    title: "Kubernetes",
    path: "/products/kubernetes",
    icon: "Layers",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  {
    title: "ISO",
    path: "/products/iso",
    icon: "Disc",
    description: "Upload and boot from your own custom operating system images and tools."
  },
  {
    title: "My Template",
    path: "/products/template",
    icon: "FileCode",
    description: "Save and deploy customized server configurations instantly with reusable templates."
  },
  {
    title: "IP Address",
    path: "/products/ip-address",
    icon: "Fingerprint",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Network",
    path: "/products/network",
    icon: "Network",
    description: "Configure high-speed private networking and sophisticated routing for your services."
  },
  {
    title: "Pool Card Subscription",
    path: "/products/pool-card",
    icon: "CreditCard",
    description: "Manage and optimize your resource allocation with flexible pool-based billing."
  },
  {
    title: "Virtual Machine",
    path: "/products/virtual-machine",
    icon: "Cpu",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "VM Autoscale",
    path: "/products/vm-autoscale",
    icon: "Zap",
    description: "Automatically adjust your compute capacity based on real-time traffic demands."
  },
  {
    title: "Virtual Router",
    path: "/products/virtual-router",
    icon: "Router",
    description: "Advanced virtualized routing and firewall services for secure network management."
  },
  {
    title: "VPC",
    path: "/products/vpc",
    icon: "ShieldCheck",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  {
    title: "Virtual Machine Backup",
    path: "/products/vm-backup",
    icon: "HardDriveDownload",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
  {
    title: "VM Snapshot",
    path: "/products/vm-snapshot",
    icon: "Timer",
    description: "Quickly restore your virtual machine to a previous state with instant snapshots."
  },
  {
    title: "Secure Object Storage",
    path: "/products/secure-object-storage",
    icon: "Box",
    description: "S3-compatible, encrypted storage for unstructured data and static assets."
  },
  {
    title: "Block Storage Backup",
    path: "/products/block-storage-backup",
    icon: "ShieldAlert",
    description: "Dedicated backup solutions for block volumes with flexible retention policies."
  },
  {
    title: "Accurate Data Snapshot",
    path: "/products/accurate-data-snapshot",
    icon: "ShieldEllipsis",
    description: "Precision data state capture ensuring consistency for complex database workloads."
  }
];

// additional data for pricing
const additionalPackages = [
  {
    title: "Block Storage Snapshot",
    path: "/pricing/block-storage-snapshot",
    description: "Point-in-time data protection package to ensure rapid recovery of your block storage volumes."
  },
  {
    title: "Backups",
    path: "/pricing/backup",
    description: "Comprehensive automated backup schedule to safeguard your critical business data and continuity."
  },
  {
    title: "Block Storage",
    path: "/pricing/block-storage",
    description: "High-performance SSD storage tier designed for low-latency and IOPS-intensive applications."
  },
  {
    title: "Global Load Balancing",
    path: "/pricing/load-balancer",
    description: "Enterprise-grade traffic distribution package to maximize uptime and global performance."
  },
  {
    title: "Kubernetes",
    path: "/pricing/kubernetes",
    description: "Managed orchestration service for streamlined deployment and scaling of containerized workloads."
  },
  {
    title: "ISO",
    path: "/pricing/iso",
    description: "Custom environment package allowing the use of proprietary operating systems and specialized boot tools."
  },
  {
    title: "My Template",
    path: "/pricing/template",
    description: "Deployment optimization tool to save, replicate, and launch custom server configurations instantly."
  },
  {
    title: "IP Address",
    path: "/pricing/ip-address",
    description: "Networking package for provisioning and managing dedicated public and private IP resources."
  },
  {
    title: "Network",
    path: "/pricing/network",
    description: "Advanced connectivity suite featuring high-speed private links and custom routing capabilities."
  },
  {
    title: "Pool Card Subscription",
    path: "/pricing/pool-card-subscription",
    description: "Flexible resource management package using a unified billing pool for optimized cost efficiency."
  },
  {
    title: "Virtual Machine",
    path: "/pricing/virtual-machine",
    description: "Scalable compute package providing high-performance virtual instances tailored to your workload."
  },
  {
    title: "VM Autoscale",
    path: "/pricing/virtual-machine-autoscale",
    description: "Dynamic scaling solution that automatically adjusts compute power based on real-time traffic surges."
  },
  {
    title: "Virtual Router",
    path: "/pricing/virtual-router",
    description: "Virtualized networking core providing advanced firewall, VPN, and routing security features."
  },
  {
    title: "VPC",
    path: "/pricing/vpc",
    description: "Isolated cloud environment package for building secure, private virtual networks."
  },
  {
    title: "Virtual Machine Backup",
    path: "/pricing/virtual-machine-backup",
    description: "Full-system image protection package designed to recover entire VM instances from data loss."
  },
  {
    title: "VM Snapshot",
    path: "/pricing/virtual-machine-snapshot",
    description: "Instant state-capture tool for virtual machines, perfect for testing and quick rollbacks."
  },
  {
    title: "Secure Object Storage",
    path: "/pricing/secure-object-storage",
    description: "Encrypted, S3-compatible storage tier for secure handling of large-scale unstructured data."
  },
  {
    title: "Block Storage Backup",
    path: "/pricing/block-storage-backup",
    description: "Dedicated volume protection package with customizable retention policies for storage compliance."
  },
  {
    title: "Accurate Data Snapshot",
    path: "/pricing/accurate-data-snapshot",
    description: "High-precision consistency package optimized for capturing the state of complex database systems."
  }
];

export async function getMenu(): Promise<NavbarProducts[]> {
  // If you want to test without fetching, you can comment this out and use mock data
  const baseUrl = process.env.STACK_API_BASE_URL;
  const token = process.env.STACK_API_TOKEN;

  let menu: NavbarProducts[] = [];

  if (!baseUrl || !token) {
    console.warn("Missing env variables. Using mock menu.");
    menu = [
      { id: "1", name: "Virtual Machine", image: "", path: "" },
      { id: "2", name: "Kubernetes", image: "", path: "" },
      { id: "3", name: "Block Storage", image: "", path: "" },
    ];
  } else {
    const res = await fetch(`${baseUrl}/admin/cloud-provider/nimbo/services`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    menu = data.data ?? [];
  }

  // Enrich the menu with title, path, and image
  const fullMenu = menu.map((item) => {
    const feature = additionalMenuItems.find(
      (f) => f.title.toLowerCase() === item.name.toLowerCase()
    );

    return {
      ...item,
      title: feature?.title ?? item.name,
      path: feature?.path ?? `/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
      image: feature?.image ?? "/default.png",
      description: feature?.description ?? "desc"
    };
  });

  return fullMenu.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getProductList(): Promise<ProductListProps[]> {
  const baseUrl = process.env.STACK_API_BASE_URL;
  const token = process.env.STACK_API_TOKEN;

  // Use a valid Lucide icon name as a default fallback
  const DEFAULT_ICON: keyof typeof icons = 'Package';

  let menu: ProductListProps[] = [];

  if (!baseUrl || !token) {
    console.warn("Missing env variables. Using mock menu.");
    menu = [
      { name: "Virtual Machine", path: "", description: "", icon: "Cpu" },
      { name: "Kubernetes", path: "", description: "", icon: "Boxes" },
      { name: "Block Storage", path: "", description: "", icon: "HardDrive" },
    ];
  } else {
    const res = await fetch(`${baseUrl}/admin/cloud-provider/nimbo/services`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    // Ensure the incoming data matches the shape or provide defaults
    menu = data.data ?? [];
  }

  // Enrich the menu
  const fullMenu = menu.map((item) => {
    const feature = additionalProductLists.find(
      (f) => f.title.toLowerCase() === item.name.toLowerCase()
    );

    return {
      ...item,
      name: item.name,
      path: feature?.path ?? `/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
      // Use the feature icon, or the item's icon, or the fallback constant
      icon: (feature?.icon as keyof typeof icons) || (item.icon as keyof typeof icons) || DEFAULT_ICON,
      description: feature?.description ?? item.description ?? "Cloud service description"
    };
  });

  return fullMenu.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPackageMenu(): Promise<PackageProps[]> {
  // If you want to test without fetching, you can comment this out and use mock data
  const baseUrl = process.env.STACK_API_BASE_URL;
  const token = process.env.STACK_API_TOKEN;

  let menu: PackageProps[] = [];

  if (!baseUrl || !token) {
    console.warn("Missing env variables. Using mock menu.");
    menu = [
      { name: "Virtual Machine", description: "", path: "" },
      { name: "Kubernetes", description: "", path: "" },
      { name: "Block Storage", description: "", path: "" },
    ];
  } else {
    const res = await fetch(`${baseUrl}/admin/cloud-provider/nimbo/services`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    menu = data.data ?? [];
  }

  // Enrich the menu with title, path, and image
  const fullMenu = menu.map((item) => {
    const feature = additionalPackages.find(
      (f) => f.title.toLowerCase() === item.name.toLowerCase()
    );

    return {
      ...item,
      title: feature?.title ?? item.name,
      path: feature?.path ?? `/pricing/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
      description: feature?.description ?? "desc"
    };
  });

  return fullMenu.sort((a, b) => a.name.localeCompare(b.name));
}


