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
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  )
}
