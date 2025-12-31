import React from 'react'
import GetStartedCard from '../card/GetStartedCard'
import VMRouterFeatureSection from '../section/products/Networking/vm-router/VMRouterFeatureSection'
import VMRouterUsageSection from '../section/products/Networking/vm-router/VMRouterUsageSection'

export default function VirtualRouterDetialLayout() {
  return (
    <section>
      {/* virtual router feature section */}
      <VMRouterFeatureSection/>

      {/* virtual router usage section */}
      <VMRouterUsageSection/>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </section>
  )
}
