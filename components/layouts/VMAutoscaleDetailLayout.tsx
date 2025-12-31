import React from 'react'
import GetStartedCard from '../card/GetStartedCard'
import VMSnapshotFeatureSection from '../section/products/compute/vm-snapshot/VMSnapshotFeatureSection'
import VMSnapshotUsageSection from '../section/products/compute/vm-snapshot/VMSnapshotUsageSection'
import VMAutoscaleFeatureSection from '../section/products/compute/vm-autoscale-detail/VMAutoscaleFeatureSection'
import VMAutoscaleUsageSection from '../section/products/compute/vm-autoscale-detail/VMAutoscaleUsageSection'

export default function VMAutoscaleDetailLayout() {
  return (
    <div>
      {/* virtual machine autoscale feature section */}
      <VMAutoscaleFeatureSection />

      {/* virtual machine autoscale usage section */}
      <VMAutoscaleUsageSection/>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  )
}
