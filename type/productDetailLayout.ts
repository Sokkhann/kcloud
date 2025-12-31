import AppDetailLayout from "@/components/layouts/AppDetailLayout";
import BackupLayout from "@/components/layouts/BackupLayout";
import BlockStorageLayout from "@/components/layouts/BlockStorageLayout";
import KubernetesDetailLayout from "@/components/layouts/KubernetesDetailLayout";
import SnapshotLayout from "@/components/layouts/BlockStorageSnapshotLayout";
import TemplateLayout from "@/components/layouts/TemplateLayout";
import VirtualMachineDetailLayout from "@/components/layouts/VirtualMachineDetailLayout";
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
  // compute
  {
    slug: "kubernetes",
    title: "Managed Kubernetes Service (CKS)",
    desc: "Deploy, scale, and manage production-grade containerized applications with our native CloudStack Kubernetes Service. Experience seamless orchestration with built-in high availability, automated load balancing, and integrated persistent block storage tailored for mission-critical workloads.",
    layout: KubernetesDetailLayout,
  },
  {
    slug: "virtual-machine",
    title: "Versatile Virtual Computing",
    desc: "Launch customized instances across multiple architectures, including x86 and ARM64. Whether you need GPU-accelerated nodes for AI or cost-effective Linux and Windows environments, our platform provides complete lifecycle management with integrated backup, persistent block storage, and advanced networking.",
    layout: VirtualMachineDetailLayout,
  },

  // networking
  {
    slug: "ip-address",
    title: "Elastic IP & Network Management",
    desc: "Gain total control over your cloud connectivity with flexible IP address management. Provision static Public IPs, manage private subnets, and utilize Source NAT or Static NAT to securely bridge your internal cloud resources with the public internet.",
    layout: IPAddressLayout
  },
  {
    slug: "load-balancer",
    title: "Advanced Network Load Balancing",
    desc: "Secure and optimize your cloud applications with fully managed load balancing. Support for SSL termination, customizable health checks, and multiple balancing algorithms ensures your users experience low-latency connections while your backend remains protected and efficient.",
    layout: LoadBalancerDetailLayout,
  },
  {
    slug: "vpc",
    title: "Secure & Private Cloud Environments",
    desc: "Take full control of your cloud security with Virtual Private Clouds. Define your own IP address ranges, manage sophisticated routing tables, and enforce strict traffic policies with Network ACLs. Our VPCs provide a logically isolated section of the cloud to host your most sensitive production workloads.",
    layout: VPCDetailLayout,
  },

  // storage
  {
    slug: "block-storage",
    title: "High-Performance Block Storage",
    desc: "Power your mission-critical applications with low-latency, persistent block storage. Our infrastructure provides elastic disk volumes that can be dynamically attached, detached, and scaled, ensuring your databases and high-I/O workloads have the dedicated throughput they demand.",
    layout: BlockStorageLayout,
  },
  {
    slug: "snapshot",
    title: "Block Storage Snapshots & Recovery",
    desc: "Protect your critical data with high-frequency, point-in-time volume snapshots. Our platform enables you to capture the exact state of your disk volumes—either manually or through automated policies—ensuring you can recover from data corruption or accidental deletion in seconds.",
    layout: SnapshotLayout,
  },
  {
    slug: "vm-backup",
    title: "Automated VM Data Protection",
    desc: "Meet strict regulatory requirements with automated, policy-driven VM backups. Schedule recurring backups with custom retention periods and leverage application-consistent technology to ensure your most critical database and enterprise workloads are always recoverable and secure.",
    layout: VirtualMachineBackupDetailLayout,
  },
];
