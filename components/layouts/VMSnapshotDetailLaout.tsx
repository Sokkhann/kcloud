import React from 'react'
import VMSnapshotFeatureSection from '../section/products/compute/vm-snapshot/VMSnapshotFeatureSection'
import VMSnapshotUsageSection from '../section/products/compute/vm-snapshot/VMSnapshotUsageSection'
import GetStartedCard from '../card/GetStartedCard'

export default function VMSnapshotDetailLayout() {
  return (
    <div>
      {/* virtual machine snapshot feature section */}
      <VMSnapshotFeatureSection />

      {/* virtual machine usage section */}
      <VMSnapshotUsageSection />

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  )
}
