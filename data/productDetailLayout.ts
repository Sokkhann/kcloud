import AppDetailLayout from "@/components/layouts/AppDetailLayout";
import BackupLayout from "@/components/layouts/BackupLayout";
import BlockStorageLayout from "@/components/layouts/BlockStorageLayout";
import KubernetesDetailLayout from "@/components/layouts/KubernetesDetailLayout";
import SnapshotLayout from "@/components/layouts/SnapshotLayout";
import TemplateLayout from "@/components/layouts/TemplateLayout";
import VirtualMachineDetailLayout from "@/components/layouts/VirtualMachineDetailLayout";
import VNFDetailLayout from "@/components/layouts/VNFDetailLayout";

export interface Products {
  slug: string;
  title: string;
  desc: string;
  layout: React.FC<{ product: Products }>;
}
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
    slug: "block-storage",
    title: "Block Storage",
    desc: "Attach volumes to your VMs or containers instantly. Enjoy fast IOPS, low latency, and persistent data. Easily scale storage up or down as your needs grow. Reliable, flexible, and secure — built for cloud workloads.",
    layout: BlockStorageLayout,
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
    layout: BackupLayout,
  },
  {
    slug: "template",
    title: "Templates",
    desc: "Choose from optimized OS, app, and infrastructure templates. Save time with consistent, repeatable deployments. Customize and save your own templates for future use. Streamline provisioning — deploy smarter with GCX Templates.",
    layout: TemplateLayout,
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
  },
];
