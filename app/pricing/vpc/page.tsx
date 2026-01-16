import VPCPricingPage from '@/components/page/pricing/VPCPricingPage'
import { getPackageVirtualRouter, getPackageVM } from '@/lib/api/getPackage'
import React from 'react'

export default async function page() {

    const packages = await getPackageVirtualRouter({ service: "Virtual Router" })

    return (
        <div>
            <VPCPricingPage plans={packages ?? []} />
        </div>
    )
}
