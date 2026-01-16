import TemplatePricingPage from '@/components/page/pricing/TemplatePricingPage'
import { getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service: "My Template"})
  return (
    <div>
      <TemplatePricingPage plans={packages ?? []}/>
    </div>
  )
}
