import VirtualMachineAutoscalePricingPage from '@/components/page/pricing/VirtualMachineAutoscalePricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({ service: "VM Autoscale" })

  return (
    <div>
      <VirtualMachineAutoscalePricingPage plans={packages ?? []}/>
    </div>
  )
}
