"use client"

import { useCountUp } from '@/lib/useCountUp';
import Image from 'next/image';
import React from 'react'

export default function PowerSection() {
    const standard = useCountUp(3000, true);
    const high = useCountUp(6000, standard.done);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl lg:gap-12 gap-0">
                {/* Right section */}
                <div className="lg:h-[530px] md:h-[480px] h-[320px] flex flex-col lg:justify-center">
                    <div className="lg:mb- mb-0">
                        <h3 className=" font-bold text-gray-700">Redundant Power Systems:</h3>
                        <p className="text-gray-600 lg:mt-4 md:mt-4 mt-2">The data center features N+1 UPS and 1+1 generator redundancy for reliable backup. Each rack is provisioned with</p>
                    </div>
                    <div className="flex w-full flex-col lg:pt-8 md:pt-8 pt-4 gap-8">
                        <div className="w-full">
                            <h3 className="font-bold text-gray-700">Standard Power Zone:</h3>
                            <p className="lg:text-[60px] md:text-[60px] text-4xl font-bold text-gcxPrimary flex justify-start lg:pt-4 md:pt-4 pt-2">
                                {standard.value.toLocaleString()}
                                <span className='lg:text-lg md:text-lg text-base text-gcxPrimary pt-2'>VA</span>
                            </p>
                        </div>

                        <div className="w-full">
                            <h3 className="font-bold text-gray-700">High Power Zone:</h3>
                            <p className="lg:text-[60px] md:text-[60px] text-4xl font-semibold flex justify-start text-gcxPrimary lg:pt-4 md:pt-4 pt-2">
                                {standard.value.toLocaleString()}
                                <span className='lg:text-lg md:text-lg text-base text-gray-700 grid items-center px-8'>  upto  </span>
                                {high.value.toLocaleString()}
                                <span className='lg:text-lg md:text-lg text-base pt-2 text-gcxPrimary'>VA</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Left section */}
                <div className="flex items-center justify-center rounded-2xl bg-violet-500">
                    <Image
                    width={1}
                    height={1}
                    src={'/power-img.png'}
                        alt="card"
                        className="rounded-2xl object-cover w-full lg:h-[530px] md:h-[480px] h-[320px]"
                    />
                </div>
            </div>
        </div>
    )
}

