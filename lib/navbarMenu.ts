import { NavbarProducts, PackageProps, ProductListProps } from "@/type/dataTypes";
import { icons } from "lucide-react";

// additional data for menu navbar, footer, and data menu of overview page
const additionalMenuItems = [
  // compute
  {
    title: "Virtual Machine",
    path: "/products/virtual-machine",
    image: "/feature-carousel-vm.png",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "Kubernetes",
    path: "/products/kubernetes",
    image: "/feature-carousel-k8.png",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },

  // networking
  {
    title: "IP Address",
    path: "/products/ip-address",
    image: "/feature-carousel-ip.png",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Load Balancer",
    path: "/products/load-balancer",
    image: "/feature-carousel-load-balancer.png", // Ensure this asset exists in your public folder
    description: "Optimize application availability and performance by intelligently distributing incoming traffic."
  },
  {
    title: "VPC",
    path: "/products/vpc",
    image: "/feature-carousel-vm.png",
    description: "Isolate your cloud resources within a secure, private network environment."
  },

  // Storage
  {
    title: "Block Storage",
    path: "/products/block-storage",
    image: "/feature-carousel-block-storage.png",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Block Storage Snapshot",
    path: "/products/snapshot",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Virtual Machine Backup",
    path: "/products/vm-backup",
    image: "/feature-carousel-vm.png",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
];

// additional data for product list
const additionalProductLists = [
  // compute
  {
    title: "Virtual Machine",
    category: "Compute",
    path: "/products/virtual-machine",
    icon: "Cpu",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "Kubernetes",
    category: "Compute",
    path: "/products/kubernetes",
    icon: "Layers",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },

  // networking
  {
    title: "IP Address",
    category: "Networking",
    path: "/products/ip-address",
    icon: "Fingerprint",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Load Balancer",
    category: "Networking",
    path: "/products/load-balancer",
    icon: "GitFork",
    description: "Distribute incoming traffic across multiple targets to ensure high availability and reliability."
  },
  {
    title: "VPC",
    category: "Networking",
    path: "/products/vpc",
    icon: "ShieldCheck",
    description: "Isolate your cloud resources within a secure, private network environment."
  },

  // storage
  {
    title: "Block Storage Snapshot",
    category: "Storage",
    path: "/products/snapshot",
    icon: "Camera",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Block Storage",
    category: "Storage",
    path: "/products/block-storage",
    icon: "Database",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "VM Snapshot",
    category: "Storage",
    path: "/products/vm-snapshot",
    icon: "Timer",
    description: "Quickly restore your virtual machine to a previous state with instant snapshots."
  },
];

// additional data for pricing
const additionalPackages = [
  // compute
  {
    title: "Virtual Machine",
    category: "Compute",
    path: "/pricing/virtual-machine",
    description: "Scalable compute package providing high-performance virtual instances tailored to your workload."
  },
  {
    title: "Kubernetes",
    category: "Compute",
    path: "/pricing/kubernetes",
    description: "Managed orchestration service for streamlined deployment and scaling of containerized workloads."
  },

  // networking
  {
    title: "IP Address",
    category: "Networking",
    path: "/pricing/ip-address",
    description: "Networking package for provisioning and managing dedicated public and private IP resources."
  },
  {
    title: "Load Balancer",
    category: "Networking",
    path: "/pricing/load-balancer",
    description: "High-availability traffic management to balance workloads and scale your applications seamlessly."
  },
  {
    title: "VPC",
    category: "Networking",
    path: "/pricing/vpc",
    description: "Isolated cloud environment package for building secure, private virtual networks."
  },

  // storage
  {
    title: "Block Storage Snapshot",
    category: "Storage",
    path: "/pricing/block-storage-snapshot",
    description: "Point-in-time data protection package to ensure rapid recovery of your block storage volumes."
  },
  {
    title: "Block Storage",
    category: "Storage",
    path: "/pricing/block-storage",
    description: "High-performance SSD storage tier designed for low-latency and IOPS-intensive applications."
  },
  {
    title: "Virtual Machine Backup",
    category: "Storage",
    path: "/pricing/virtual-machine-backup",
    description: "Full-system image protection package designed to recover entire VM instances from data loss."
  },
];

export interface GroupedMenu {
  Compute: NavbarProducts[];
  Networking: NavbarProducts[];
  Storage: NavbarProducts[];
}

// servcie categories
const serviceCategories: Record<string, "Compute" | "Networking" | "Storage"> = {
  "Virtual Machine": "Compute",
  "Kubernetes": "Compute",
  "VPC": "Networking",
  "Load Balancer": "Networking",
  "IP Address": "Networking",
  "Block Storage": "Storage",
  "Block Storage Snapshot": "Storage",
  "Backup": "Storage",
  "Virtual Machine Backup": "Storage",
};

// Define a shared interface to fix the TypeScript 'image' error
interface EnrichedProduct extends NavbarProducts {
  icon?: keyof typeof icons;
  description: string;
}

const MOCK_SERVICES = [
  { id: "1", title: "Virtual Machine", image: "/feature-carousel-vm.png", },
  { id: "2", title: "Kubernetes", image: "/feature-carousel-vm.png", },
  { id: "3", title: "Block Storage", image: "/feature-carousel-vm.png", },
  { id: "4", title: "VPC", image: "/feature-carousel-vm.png", },
  { id: "5", title: "Load Balancer", image: "/feature-carousel-vm.png", },
  { id: "6", title: "IP Address", image: "/feature-carousel-vm.png", },
  { id: "7", title: "Virtual Machine Backup", image: "/feature-carousel-vm.png", },
  { id: "8", title: "Block Storage Snapshot", image: "/feature-carousel-vm.png", },
];

// Get raw data from the api
// 1. Add this to the top of your file to force dynamic fetching if needed
export const dynamic = 'force-dynamic';

async function getRawServices(): Promise<any[]> {
  if (typeof window !== "undefined") return [];

  const baseUrl = process.env.STACK_API_BASE_URL;
  const token = process.env.STACK_API_TOKEN;

  // IF ENV VARS ARE MISSING ON PRODUCTION
  if (!baseUrl || !token) {
    console.error("❌ PRODUCTION ERROR: Missing API Env Variables.");
    return MOCK_SERVICES;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/admin/cloud-provider/nimbo/services`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      // CHANGE: Ensure we don't cache an error forever
      next: { revalidate: 60 }, // Re-check every minute instead of 3600
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error(`❌ API error: ${res.status}`);
      return MOCK_SERVICES;
    }

    const data = await res.json();

    // VALIDATE: If data is empty array, return mock immediately
    if (!data.data || data.data.length === 0) {
      console.warn("⚠️ API returned empty data. Switching to MOCK.");
      return MOCK_SERVICES;
    }

    return data.data;

  } catch (error: any) {
    console.error("❌ Fetch failed, using MOCK data.");
    return MOCK_SERVICES;
  }
}

// main method: Fetch -> Filter -> Categorize
async function getCategorizedData(): Promise<GroupedMenu> {
  const rawServices = await getRawServices();

  // Use MOCK if raw is empty or API failed
  const dataToProcess = (rawServices && rawServices.length > 0)
    ? rawServices
    : MOCK_SERVICES;

  const grouped: GroupedMenu = { Compute: [], Networking: [], Storage: [] };

  dataToProcess.forEach((item) => {
    // 1. Normalize the title for matching
    const itemTitle = (item.title || item.name || "").trim();

    // 2. Find the local configuration
    const localConfig =
      additionalMenuItems.find(f => f.title.toLowerCase() === itemTitle.toLowerCase()) ||
      additionalPackages.find(f => f.title.toLowerCase() === itemTitle.toLowerCase()) ||
      additionalProductLists.find(f => f.title.toLowerCase() === itemTitle.toLowerCase());

    // 3. Create an Enriched Object (Even if localConfig is missing)
    const enriched: NavbarProducts = {
      ...item,
      id: item.id || Math.random().toString(),
      title: localConfig?.title || itemTitle,
      path: localConfig?.path || `/products/${itemTitle.toLowerCase().replace(/\s+/g, '-')}`,
      // GUARANTEE an image exists to prevent the "undefined (reading 'image')" error
      image: (localConfig as any)?.image || item.image || "/feature-carousel-vm.png",
      description: localConfig?.description || item.description || "Cloud service offering.",
    };

    // 4. Assign to Category with a Fallback
    const category = serviceCategories[enriched.title] || serviceCategories[itemTitle];

    if (category && grouped[category]) {
      grouped[category].push(enriched);
    } else {
      // If no category matches, default to Compute so the data isn't lost
      grouped.Compute.push(enriched);
    }
  });

  return grouped;
}

// get all product service with (category, product name, and link)
export async function getMenuCategory(): Promise<GroupedMenu> {
  return await getCategorizedData();
}

// get all product service without category only (name and link)
export async function getFooterMenu(): Promise<NavbarProducts[]> {
  const categories = await getCategorizedData();
  return Object.values(categories)
    .flat().sort((a, b) => a.title
      .localeCompare(b.title));
}

// get all product list package pricing route to pricing detail page
export async function getProductList(): Promise<ProductListProps[]> {
  const categories = await getCategorizedData();
  const DEFAULT_ICON: keyof typeof icons = 'Package';

  return Object.values(categories).flat().map((item) => {
    const local = additionalProductLists.find(f => f.title.toLowerCase() === item.title.toLowerCase());
    return {
      ...item,
      name: item.title,
      icon: (local?.icon as keyof typeof icons) || DEFAULT_ICON,
    };
  });
}

// get all product list on the over view page route to the product detail pages
export async function getPackageMenu(): Promise<PackageProps[]> {
  // 1. Get the categorized data (filtered and grouped)
  const categories = await getCategorizedData();

  // 2. Flatten the categories into a single list of active products
  const activeProducts = Object.values(categories).flat();

  // 3. Map through your local 'additionalPackages' to keep the EXACT order and descriptions
  return additionalPackages
    .filter((localItem) =>
      // Only show items that actually exist in the API (already categorized)
      activeProducts.some(apiItem => apiItem.title.toLowerCase() === localItem.title.toLowerCase())
    )
    .map((localItem) => {
      // Find the corresponding API item to keep any extra data (like ID)
      const apiItem = activeProducts.find(
        (api) => api.title.toLowerCase() === localItem.title.toLowerCase()
      );

      return {
        ...apiItem,
        name: localItem.title,
        path: localItem.path,
        description: localItem.description,
      };
    });
}


