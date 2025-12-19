import BackupPricingPage from '@/components/page/pricing/BackupPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

  const packages = await getPackageVM({service:"Backups"})

  return (
    <div>
      <BackupPricingPage plans={packages ?? []}/>
    </div>
  )
}
