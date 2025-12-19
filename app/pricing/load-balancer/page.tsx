
import LoadBalancerPricingPage from '@/components/page/pricing/LoadBalancerPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "Load Balancer"})

  return (
    <div>
      <LoadBalancerPricingPage plans={packages ?? []}/>
    </div>
  )
}
