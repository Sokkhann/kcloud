import GetStartedCard from '../card/GetStartedCard'
import VPCFeatureSection from '../section/products/Networking/vpc-detail/VPCFeatureSection'
import VPCNestProductSection from '../section/products/Networking/vpc-detail/VPCNestProductSection'
import VPCUseCaseSection from '../section/products/Networking/vpc-detail/VPCUseCaseSection'

export default function VPCDetailLayout() {
  return (
    <div className='bg-gray-100'>
      {/* virtual private cloud feature section */}
      <VPCFeatureSection/>

      {/* virtual private cloud use case section */}
      <VPCUseCaseSection/>

      {/* nested product section */}
      <VPCNestProductSection/>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  )
}
