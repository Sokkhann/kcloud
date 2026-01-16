
import VirtualMachinePricingPage from '@/components/page/pricing/VirtualMachinePricingPage';
import { getPackageISO, getPackageMyTemplate, getPackageVM } from '@/lib/api/getPackage';

// for this param can pass based on the cloud provider
// we have two cloud providers cloudstack-01 and proxmox
// we only have proxmox at first
export default async function page() {
  const planProxmox = await getPackageVM({ service: "Virtual Machine", provider: "proxmox" })
  const planCloudstackGeneralCompute = await getPackageVM({ service: "Virtual Machine", provider: "cloudstack-01", category: "General Compute" })
  const planCloudstackComputeOptimized = await getPackageVM({ service: "Virtual Machine", provider: "cloudstack-01", category: "Compute Optimized" })

  const iso = await getPackageISO({service: "ISO"})
  const template = await getPackageMyTemplate({service: "Template"})

  return (
    <div>
      <VirtualMachinePricingPage
        planProxmox={planProxmox ?? []}
        planCloudstackGeneralCompute={planCloudstackGeneralCompute ?? []}
        planCloudstackComputeOptimized={planCloudstackComputeOptimized ?? []}
      />
    </div>
  )
}
