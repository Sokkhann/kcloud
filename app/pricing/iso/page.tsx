import ISOPricingPage from '@/components/page/pricing/ISOPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const plans = await getPackageVM({service: "ISO"})

  return (
    <div>
      <ISOPricingPage plans={plans ?? []}/>
    </div>
  )
}
