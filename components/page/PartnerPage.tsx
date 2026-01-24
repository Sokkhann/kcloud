import { PartnerData } from '@/type/partnerOverview'
import HeroComponent from '../HeroComponent'
import PartnerSection from '../section/partner/PartnerSection'

export default function PartnerPage() {
    
    return ( 
        <div className='w-screen'>
            {/* Hero section */}
            <HeroComponent
                height="h-[500px]"
                image={null}
                topImage={null}
                title="Partners You Can Trust"
                description="Excellence is a team sport. We collaborate with world-class organizations that share our commitment to quality and innovation. From global tech giants to specialized boutique firms, our partners are vetted to provide you with the highest level of service and expertise."
            />

            <PartnerSection/>
        </div>
    )
}
