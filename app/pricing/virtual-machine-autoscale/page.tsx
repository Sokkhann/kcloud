import VirtualMachineAutoscalePricingPage from '@/components/page/pricing/VirtualMachineAutoscalePricingPage'
import { getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({ service: "VM Autoscale" })

  return (
    <div>
      <VirtualMachineAutoscalePricingPage plans={packages ?? []}/>
    </div>
  )
}
