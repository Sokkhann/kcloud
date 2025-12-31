import VirtualMachinePricingPage from '@/components/page/pricing/VirtualMachinePricingPage';
import { getPackageVM } from '@/lib/api/getPackageVM';

export default async function page() {
  const packages = await getPackageVM({service: "Virtual Machine"})

  if (!packages) return null;

  return (
    <div>
      <VirtualMachinePricingPage plans={packages} />
    </div>
  )
}
