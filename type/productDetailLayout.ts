import AppDetailLayout from "@/components/layouts/AppDetailLayout";
import BackupLayout from "@/components/layouts/BackupLayout";
import BlockStorageLayout from "@/components/layouts/BlockStorageLayout";
import KubernetesDetailLayout from "@/components/layouts/KubernetesDetailLayout";
import SnapshotLayout from "@/components/layouts/BlockStorageSnapshotLayout";
import TemplateLayout from "@/components/layouts/TemplateLayout";
import VirtualMachineDetailLayout from "@/components/layouts/VirtualMachineDetailLayout";
import VNFDetailLayout from "@/components/layouts/VNFDetailLayout";
import ISODetailLayout from "@/components/layouts/ISODetailLayout";
import NetworkDetailLayout from "@/components/layouts/NetworkDetailLayout";
import LoadBalancerDetailLayout from "@/components/layouts/LoadBalancerDetailLayout";
import DNSDetailLayout from "@/components/layouts/DNSDetailLayout";
import AffinityGroupLayout from "@/components/layouts/AffinityGroupLayout";
import IPAddressLayout from "@/components/layouts/IPAddressLayout";
import VirtualMachineBackupDetailLayout from "@/components/layouts/VirtualMachineBackupDetailLayout";
import VirtualRouterLayout from "@/components/layouts/VirtualRouterDetailLayout";
import VMAutoscaleDetailLayout from "@/components/layouts/VMAutoscaleDetailLayout";
import PoolCardDetailLayout from "@/components/layouts/PoolCardDetailLayout";
import VMSnapshotDetailLayout from "@/components/layouts/VMSnapshotDetailLaout";
import VPCDetailLayout from "@/components/layouts/VPCDetailLayout";

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
    slug: "kubernetes",
    title: "Kubernetes",
    desc: "Kubernetes (K8s) is your orchestration engine — it automates the deployment, scaling, and management of containerized applications.",
    layout: KubernetesDetailLayout,
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
    desc: "ISO Images let you package an entire operating system or custom toolset into a single file. GCX's ISO support helps you spin up VMs with your own OS, install new systems, or perform disaster recovery without rebuilding from scratch.",
    layout: ISODetailLayout,
  },
  {
    slug: "network",
    title: "Network",
    desc: "Build resilient, secure and scalable cloud networks with public networks, virtual networks, virtual routers, security groups, IP management and VPN connectivity. From simple setups to complex multi-subnet architectures.",
    layout: NetworkDetailLayout,
  },
  {
    slug: "ip-address",
    title:"IP Address",
    desc:"",
    layout: IPAddressLayout
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    desc: "Keep cloud applications fast and resilient with enterprise-grade traffic distribution. High availability, flexible billing, sticky sessions and smart algorithms. From simple web apps to multi-tier microservices.",
    layout: LoadBalancerDetailLayout,
  },
  {
    slug: "pool-card",
    title: "Pool Card Subscription",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: PoolCardDetailLayout,
  },
  {
    slug: "virtual-machine",
    title: "Virtual Machine",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineDetailLayout,
  },
  {
    slug: "vm-snapshot",
    title: "Virtual Machine Snapshot",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VMSnapshotDetailLayout,
  },
  {
    slug: "vpc",
    title: "Virtual Machine",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VPCDetailLayout,
  },
  {
    slug: "vm-autoscale",
    title: "Virtual Machine Autoscale",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VMAutoscaleDetailLayout,
  },
  {
    slug: "virtual-router",
    title: "Virtual Router",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualRouterLayout,
  },
  {
    slug: "vm-backup",
    title: "Virtual Machine",
    desc: "Choosing your OS, configure resources, and launch in minutes. Enjoy high performance, secure cloud infrastructure, and full control. Scale effortlessly with flexible plans and global availability. Start building today with GCX — your VM, your way.",
    layout: VirtualMachineBackupDetailLayout,
  },



  {
    slug: "dns",
    title: "DNS",
    desc: "The hassle-free way to manage your domains in the cloud. Easy domain creation, support for all record types, and built-in examples. Manage multiple projects with robust infrastructure and clear documentation.",
    layout: DNSDetailLayout,
  },
  {
    slug: "affinity-group",
    title: "Affinity Group ",
    desc: "Affinity Groups give you the power to define exactly where your Virtual Machines (VMs) are placed on our hypervisor hosts, transforming uncertainty into guaranteed performance and resilience.",
    layout: AffinityGroupLayout,
  },
  {
    slug: "vnf-appliance",
    title: "VNF Appliance",
    desc: "A Virtual Network Function (VNF) Appliance allows you to deploy network services such as firewalls, load balancers, and VPNs in virtualized environments — without dedicated hardware.",
    layout: VNFDetailLayout,
  },
  {
    slug: "app",
    title: "App",
    desc: "The Apps section provides pre-built or customizable applications you can deploy instantly — from monitoring tools to productivity or analytics software.",
    layout: AppDetailLayout,
  },
];
