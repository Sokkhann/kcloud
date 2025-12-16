import { getMenu } from "@/app/api/products/route";
import { NavbarProducts } from "@/type/dataTypes";

const additionDataFeatureItems = [
  { title: "Block Storage Snapshot", path: "/products/snapshot", image: "/feature-carousel-block-storage-snapshot.png" },
  { title: "Backups", path: "/products/backup", image: "/feature-carousel-backup.png" },
  { title: "Block Storage", path: "/products/block-storage", image: "/feature-carousel-block-storage.png" },
  { title: "Global Load Balancing", path: "/products/load-balancer", image: "/feature-carousel-lb.png" },
  { title: "Kubernetes", path: "/products/kubernetes", image: "/feature-carousel-k8.png" },
  { title: "ISO", path: "/products/iso", image: "/feature-carousel-iso.png" },
  { title: "My Template", path: "/products/template", image: "/feature-carousel-template.png" },
  { title: "IP Address", path: "/products/ip-address", image: "/feature-carousel-ip.png" },
  { title: "Network", path: "/products/network", image: "/feature-carousel-block-storage-snapshot.png" },
  { title: "Pool Card Subscription", path: "/products/pool-card", image: "/feature-carousel-block-storage-snapshot.png" },
  { title: "Virtual Machine", path: "/products/virtual-machine", image: "/feature-carousel-vm.png" },
  { title: "VM Autoscale", path: "/products/vm-autoscale", image: "/feature-carousel-vm.png" },
  { title: "Virtual Router", path: "/products/virtual-router", image: "/feature-carousel-vm.png" },
  { title: "VPC", path: "/products/vpc", image: "/feature-carousel-vm.png" },
  { title: "Virtual Machine Backup", path: "/products/vm-backup", image: "/feature-carousel-vm.png" },
  { title: "VM Snapshot", path: "/products/vm-snapshot", image: "/feature-carousel-vm.png" },
  { title: "Secure Object Storage", path: "/products/secure-object-storage", image: "/feature-carousel-object-storage.png" },
  { title: "Block Storage Backup", path: "/products/block-storage-backup", image: "/feature-carousel-block-storage-backup.png" },
  { title: "Block Storage Snapshot", path: "/products/block-storage-snapshot", image: "/feature-carousel-block-storage-snapshot.png" },
  { title: "Accurate Data Snapshot", path: "/products/accurate-data-snapshot", image: "/feature-carousel-vm-snapshot.png" },
];

export async function getFullNavbarMenu() {
  const menu: NavbarProducts[] = await getMenu();

  const fullMenu = menu.map((item) => {
    const feature = additionDataFeatureItems.find(
      (f) => f.title.toLowerCase() === item.name.toLowerCase()
    );

    return {
      ...item,
      path: feature?.path ?? `/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
      image: feature?.image ?? "/default.png",
    };
  });

  return fullMenu.sort((a, b) => a.name.localeCompare(b.name));
}
