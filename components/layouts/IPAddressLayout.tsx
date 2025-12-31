import React from 'react'
import IPAddressFeatureSection from '../section/products/Networking/ip-detail/IPAddressFeatureSection'
import GetStartedCard from '../card/GetStartedCard'
import IPAddressUseCaseSection from '../section/products/Networking/ip-detail/IPAddressUseCaseSection'

export default function IPAddressLayout() {
  return (
    <div className=''>
      {/* ip address feature sectoin */}
      <IPAddressFeatureSection />

      {/* ip address usage section */}
      <IPAddressUseCaseSection />

      {/* ip address get started section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  )
}
