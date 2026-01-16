import VirtualRouterPricingPage from '@/components/page/pricing/VirtualRouterPricingPage'
import { getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "Virtual Router"})

  return (
    <div>
      <VirtualRouterPricingPage plans={packages ?? []}/>
    </div>
  )
}
