import VirtualMachinePricingPage from '@/components/page/pricing/VirtualMachinePricingPage';
import { getPackageVM } from '@/lib/api/getPackageVM';

export default async function page() {
  const packages = await getPackageVM({service: "Virtual Machine"})

  return (
    <div>
      <VirtualMachinePricingPage plans={packages ?? []} />
    </div>
  )
}
