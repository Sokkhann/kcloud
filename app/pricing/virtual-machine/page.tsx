
import VirtualMachinePricingPage from '@/components/page/pricing/VirtualMachinePricingPage';
import { getPackageISO, getPackageMyTemplate, getPackageVM } from '@/lib/api/getPackage';

import type { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Virtual Machine Pricing | GCX K-Cloud",
  description:
    "Compare shared and dedicated virtual machine pricing on GCX K-Cloud. Flexible CPU, memory, and storage options for scalable cloud compute.",

  keywords: [
    "Virtual Machine Pricing",
    "GCX K-Cloud VM",
    "Cloud VM Cambodia",
    "Shared CPU VM",
    "Dedicated CPU VM",
    "Cloud Compute Cambodia",
    "Scalable Cloud VM",
    "Enterprise Virtual Machine",
  ],

  openGraph: {
    title: "Virtual Machine Pricing | GCX K-Cloud",
    description:
      "Flexible and transparent virtual machine pricing on GCX K-Cloud. Choose the right CPU, memory, and storage for your workloads.",
    url: `${domain}/pricing/virtual-machine`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: "/price-bg.png",
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Virtual Machine Pricing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Virtual Machine Pricing | GCX K-Cloud",
    description:
      "Flexible and transparent virtual machine pricing on GCX K-Cloud. Choose the right CPU, memory, and storage for your workloads.",
    images: ["/price-bg.png"],
  },
};

// for this param can pass based on the cloud provider
// we have two cloud providers cloudstack-01 and proxmox
// we only have proxmox at first
export default async function page() {
  const planProxmoxGeneralCompute= await getPackageVM({ service: "Virtual Machine", provider: "Proxmox" })
  const planCloudstackBasic = await getPackageVM({ service: "Virtual Machine", provider: "CloudStack-01", category: "Basic" })
  const planCloudstackCPUOptimized = await getPackageVM({ service: "Virtual Machine", provider: "CloudStack-01", category: "CPU-Optimized" })
  const planCloudstackMemoryptimized = await getPackageVM({ service: "Virtual Machine", provider: "CloudStack-01", category: "Memory-Optimized" })
  const planCloudstackGeneralPurpose = await getPackageVM({ service: "Virtual Machine", provider: "CloudStack-01", category: "General Purpose" })

  const iso = await getPackageISO({ service: "ISO" })
  const template = await getPackageMyTemplate({ service: "Template" })

  return (
    <div>
      <VirtualMachinePricingPage
      planProxmoxGeneralCompute={planProxmoxGeneralCompute ?? []}
        planCloudstackBasic={planCloudstackBasic ?? []}
        planCloudstackCPUOptimized={planCloudstackCPUOptimized ?? []}
        planCloudstackMemoryOptimized={planCloudstackMemoryptimized ?? []}
        planCloudstackGeneralPurpose={planCloudstackGeneralPurpose ?? []}
      />
    </div>
  )
}
