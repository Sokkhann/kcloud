import BackupPricingPage from '@/components/page/pricing/BackupPricingPage'
import { getPackageBlockStorage, getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

  const packageBlockStorageBackup = await getPackageBlockStorage({ service: "Block Storage Backup" })
  const packageVMBackup = await getPackageBlockStorage({ service: "Virtual Machine Backup" })

  return (
    <div>
      <BackupPricingPage
        packageBlockStorageBackup={packageBlockStorageBackup ?? []}
        packageVMBackup={packageVMBackup ?? []}
      />
    </div>
  )
}
