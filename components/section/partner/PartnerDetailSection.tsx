import HeroComponent from '@/components/HeroComponent'
import { CardProps } from '@/type/customerOverview'
import React from 'react'
import PartnerContentSection from './PartnerContentSection';
import { PartnerDetailProps } from '@/type/partnerOverview';

export default function PartnerDetailSection({logo, title, contents, desc} : PartnerDetailProps) {
    
    return (
        <section className='w-full'>
            {/* Hero section */}
            <HeroComponent
                height="h-[600px]"
                image={null}
                topImage={logo}
                title={title}
                description={desc}
            />

            <PartnerContentSection logo={logo} contents={contents} partnerName=''/>
        </section>
    )
}
