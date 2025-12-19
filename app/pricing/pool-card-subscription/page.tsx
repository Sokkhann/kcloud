import PoolCardSubPricingPage from '@/components/page/pricing/PoolCardSubPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const plans = await getPackageVM({ service: "Pool Card Subscription"})

  return (
    <div>
      <PoolCardSubPricingPage plans={plans ?? []}/>
    </div>
  )
}
