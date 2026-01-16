import VirtualMachineSnapshotPricingPage from '@/components/page/pricing/VirtualMachineSnapshotPricingPage'
import { getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {
  const plan = await getPackageVM({ service: "VM Snapshot" })
  return (
    <div>
      <VirtualMachineSnapshotPricingPage plans={plan ?? []} />
    </div>
  )
}
