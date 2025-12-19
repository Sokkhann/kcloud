import VPCPricingPage from '@/components/page/pricing/VPCPricingPage'
import { getPackageVM } from '@/lib/api/getPackageVM'
import React from 'react'

export default async function page() {

    const packages = await getPackageVM({ service: "VPC" })

    return (
        <div>
            <VPCPricingPage plans={packages ?? []} />
        </div>
    )
}
