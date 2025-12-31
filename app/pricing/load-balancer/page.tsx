
import LoadBalancerPricingPage from '@/components/page/pricing/LoadBalancerPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'

export default async function page() {

  const packages = await getPackageVM({service: "Load Balancer"})

  console.log("Responsed: ", packages)

  return (
    <div>
      <LoadBalancerPricingPage plans={packages ?? []}/>
    </div>
  )
}
