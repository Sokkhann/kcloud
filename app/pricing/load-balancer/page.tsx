
import LoadBalancerPricingPage from '@/components/page/pricing/LoadBalancerPricingPage'
import { getPackageLoadBalancer } from '@/lib/api/getPackage'

export default async function page() {

  const packages = await getPackageLoadBalancer({service: "Load Balancer"})

  return (
    <div>
      <LoadBalancerPricingPage plans={packages ?? []}/>
    </div>
  )
}
