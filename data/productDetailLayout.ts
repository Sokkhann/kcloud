import AppDetailLayout from "@/components/layouts/AppDetailLayout";
import KubernetesDetailLayout from "@/components/layouts/KubernetesDetailLayout";
import VirtualMachineDetailLayout from "@/components/layouts/VirtualMachineDetailLayout";
import VNFDetailLayout from "@/components/layouts/VNFDetailLayout";

export interface productDetailLayout {
    slug: string;
    title: string;
    desc: string;
    layout: React.FC<{ product: productDetailLayout }>;
}

export const productDetailLayout: productDetailLayout[] = [
  {
    slug: "virtual-machine",
    title: "Virtual Machine",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "kubernetes",
    title: "Kubernetes",
    desc: "Kubernetes (K8s) is your orchestration engine — it automates the deployment, scaling, and management of containerized applications.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "vnf-appliance",
    title: "VNF Appliance",
    desc: "A Virtual Network Function (VNF) Appliance allows you to deploy network services such as firewalls, load balancers, and VPNs in virtualized environments — without dedicated hardware.",
    layout: VNFDetailLayout,
  },
  {
    slug: "app",
    title: "Apps",
    desc: "The Apps section provides pre-built or customizable applications you can deploy instantly — from monitoring tools to productivity or analytics software.",
    layout: AppDetailLayout,
  },
  {
    slug: "snapshot",
    title: "Snapshots",
    desc: "Choose your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
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