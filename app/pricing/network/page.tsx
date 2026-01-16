import NetworkPricingPage from '@/components/page/pricing/NetworkPricingPage'
import { getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "Network"})

  return (
    <div>
      <NetworkPricingPage plans={packages ?? []}/>
    </div>
  )
}
