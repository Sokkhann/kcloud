import CustomerCardV2 from '@/components/card/CusomterCardV2';
import { customerOverview } from '@/type/customerOverview';
import React from 'react'

export default function CustomerListSection() {

    const customers = customerOverview

    return (
        <div className='flex items-center overflow-auto gap-4 scrollbar-hide h-[400px] lg:px-8 md:px-8 px-4'>
            {customers.map((item, index) => (
                <div key={index} className="flex-shrink-0 ">
                    <CustomerCardV2
                        description={item.description}
                        title={item.title}
                        logo={item.logo}
                    />
                </div>
            ))}
        </div>

    );
}
