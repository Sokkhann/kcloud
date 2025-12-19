import VirtualMachineBackupPricingPage from '@/components/page/pricing/VirtualMachineBackupPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

    const packages = await getPackageVM({ service: "Virtual Machine Backup" })

    return (
        <div>
            <VirtualMachineBackupPricingPage plans={packages ?? []}/>
        </div>
    )
}
