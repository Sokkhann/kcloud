import IPPricingPage from '@/components/page/pricing/IPPricingPage'
import { getPackageK8s, getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packages = await getPackageK8s({service: "IP Address"})
  
  return (
    <div>
      <IPPricingPage plans={packages ?? []}/>
    </div>
  )
}
