import KubernetesDetailLayout from "@/components/layouts/KubernetesDetailLayout";
import SnapshotLayout from "@/components/layouts/SnapshotLayout";
import VirtualMachineDetailLayout from "@/components/layouts/VirtualMachineDetailLayout";

export interface Products {
    slug: string;
    title: string;
    desc: string;
    layout: React.FC<{ product: Products }>;
}

export const products: Products[] = [
  {
    slug: "virtual-machine",
    title: "Virtual Machine",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "kubernetes",
    title: "Kubernetes",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "vnf-appliance",
    title: "VNF Appliance",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "app",
    title: "Apps",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "snapshot",
    title: "Snapshots",
    desc: "Snapshots provide a reliable way to back up your virtual machines, ensuring data consistency and enabling quick recovery in case of failures or accidental changes",
    layout: SnapshotLayout,
  },
  {
    slug: "backup",
    title: "Backups",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "template",
    title: "Templates",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "iso",
    title: "ISOs",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "network",
    title: "Network",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "dns",
    title: "DNS",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  }
];