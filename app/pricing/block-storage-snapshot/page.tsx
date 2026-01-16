import BlockStorageSnapshotPricingPage from '@/components/page/pricing/BlockStorageSnapshotPricingPage'
import { getPackageBlockStorageSnapshot } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

    const packages = await getPackageBlockStorageSnapshot({ service: "Block Storage Snapshot" })

    return (
        <div>
            <BlockStorageSnapshotPricingPage plans={packages ?? []}/>
        </div>
    )
}
