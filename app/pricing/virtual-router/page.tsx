import VirtualRouterPricingPage from '@/components/page/pricing/VirtualRouterPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "Virtual Router"})

  return (
    <div>
      <VirtualRouterPricingPage plans={packages ?? []}/>
    </div>
  )
}
