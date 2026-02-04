
import VirtualMachinePricingPage from '@/components/page/pricing/VirtualMachinePricingPage';
import { getPackageISO, getPackageMyTemplate, getPackageVM } from '@/lib/api/getPackage';

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
