import IPPricingPage from '@/components/page/pricing/IPPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "IP Address"})
  
  return (
    <div>
      <IPPricingPage plans={packages ?? []}/>
    </div>
  )
}
