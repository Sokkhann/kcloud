import { GroupedMenu, NavbarProducts } from '@/type/dataTypes';
import NavbarClient from './NavbarClient';

// additional data for menu navbar, footer, and data menu of overview page
const additionalMenuItems: NavbarProducts[] = [
  // compute
  {
    title: "Virtual Machine",
    category: "Compute",
    path: "/products/virtual-machine",
    image: "/feature-carousel-vm.png",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "Kubernetes",
    category: "Compute",
    path: "/products/kubernetes",
    image: "/feature-carousel-k8.png",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  // networking
  {
    title: "IP Address",
    category: "Networking",
    path: "/products/ip-address",
    image: "/feature-carousel-ip.png",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Load Balancer",
    category: "Networking",
    path: "/products/load-balancer",
    image: "/feature-carousel-load-balancer.png",
    description: "Optimize application availability and performance by intelligently distributing incoming traffic."
  },
  {
    title: "VPC",
    category: "Networking",
    path: "/products/vpc",
    image: "/feature-carousel-vm.png",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  // Storage
  {
    title: "Block Storage",
    category: "Storage",
    path: "/products/block-storage",
    image: "/feature-carousel-block-storage.png",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Block Storage Snapshot",
    category: "Storage",
    path: "/products/snapshot",
    image: "/feature-carousel-block-storage-snapshot.png",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Virtual Machine Backup",
    category: "Storage",
    path: "/products/vm-backup",
    image: "/feature-carousel-vm.png",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
];

export default async function Navbar() {
  // const groupMenu = await getMenuCategory();

  // const safeMenu = groupMenu || { Compute: [], Networking: [], Storage: [] };

  const groupedMenu: GroupedMenu = {
    Compute: additionalMenuItems.filter(item => item.category === "Compute"),
    Networking: additionalMenuItems.filter(item => item.category === "Networking"),
    Storage: additionalMenuItems.filter(item => item.category === "Storage"),
  };

  return <NavbarClient menu={groupedMenu} />;
}