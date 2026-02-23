import { GroupedMenu, NavbarProducts } from '@/type/dataTypes';
import NavbarClient from './NavbarClient';

const additionalMenuItems: NavbarProducts[] = [
  // compute
  {
    title: "Virtual Machine",
    category: "Compute",
    path: "/products/virtual-machine",
    image: "/high-light/virtual-machine.png",
    description: "Deploy scalable, high-performance virtual computing instances in seconds."
  },
  {
    title: "Kubernetes",
    category: "Compute",
    path: "/products/kubernetes",
    image: "/high-light/k8.png",
    description: "Fully managed container orchestration to simplify deploying and scaling applications."
  },
  // networking
  {
    title: "IP Address",
    category: "Networking",
    path: "/products/ip-address",
    image: "/high-light/ip.png",
    description: "Manage reserved public and private IP addresses for your cloud infrastructure."
  },
  {
    title: "Load Balancer",
    category: "Networking",
    path: "/products/load-balancer",
    image: "/high-light/load-balancer.png",
    description: "Optimize application availability and performance by intelligently distributing incoming traffic."
  },
  {
    title: "VPC",
    category: "Networking",
    path: "/products/vpc",
    image: "/high-light/vpc.png",
    description: "Isolate your cloud resources within a secure, private network environment."
  },
  // Storage
  {
    title: "Block Storage",
    category: "Storage",
    path: "/products/block-storage",
    image: "/high-light/block-storage.png",
    description: "High-performance, scalable SSD storage for your high-demand applications."
  },
  {
    title: "Block Storage Snapshot",
    category: "Storage",
    path: "/products/snapshot",
    image: "/high-light/snapshot.png",
    description: "Capture point-in-time copies of your block storage volumes for easy data recovery."
  },
  {
    title: "Virtual Machine Backup",
    category: "Storage",
    path: "/products/vm-backup",
    image: "/high-light/back-up.png",
    description: "Full-system backups for your virtual machines to prevent data loss."
  },
];

export default async function Navbar() {
  const groupedMenu: GroupedMenu = {
    Compute: additionalMenuItems.filter(item => item.category === "Compute"),
    Networking: additionalMenuItems.filter(item => item.category === "Networking"),
    Storage: additionalMenuItems.filter(item => item.category === "Storage"),
  };

  return <NavbarClient menu={groupedMenu} />;
}