import PartnerCarousel from '@/components/carousel/PartnerCarousel'
import { PartnerData } from '@/type/partnerOverview'
import { ArrowRight } from 'lucide-react'

export default async function PartnerDisplaySection() {
  const data = await PartnerData.map(l => ({
    logo: l.logo,
    title: l.title,
  }))
  return (
    <section className='w-full bg-white '>
      {/* title and description */}
      <div className="text-center mx-4 mb-4 lg:pt-12 md:pt-12 pt-6">
        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
          Trusted Global Partners
        </p>
        <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
          Driving innovation through a network of world-class infrastructure
          and cloud specialists. By bridging the gap between complex technology and
          local expertise.
        </p>
        {/* <a href="/partner" className="relative text-gray-600 hover:text-gcxPrimary font-semibold group inline-flex items-center gap-2">
          <span className="relative">
            Explore Success Stories
          </span>

          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </a> */}
      </div>

      <div className='max-w-7xl mx-auto lg:px-6 md:px-6 px-4'>
        <PartnerCarousel logo={data} />
      </div>
    </section>
  )
}
