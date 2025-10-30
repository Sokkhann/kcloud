import React from 'react'
import ProblemSolutionSection from '../section/vnf-detial/ProblemSolutionSection'
import VNFFeatureSection from '../section/vnf-detial/VNFFeatureSection'
import GetStartedCard from '../card/GetStartedCard'
import VNFUseCaseSection from '../section/vnf-detial/VNFUseCaseSection'

export default function VNFDetailLayout() {
  return (
    <div>
      <ProblemSolutionSection/>
      <VNFFeatureSection/>
      <VNFUseCaseSection/>

      <div className='max-w-7xl mx-auto py-24'>
        <GetStartedCard/>
      </div>
    </div>
  )
}
