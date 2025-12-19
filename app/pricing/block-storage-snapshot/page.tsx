import BlockStorageSnapshotPricingPage from '@/components/page/pricing/BlockStorageSnapshotPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

    const packages = await getPackageVM({ service: "Block Storage Snapshot" })

    return (
        <div>
            <BlockStorageSnapshotPricingPage plans={packages ?? []}/>
        </div>
    )
}
