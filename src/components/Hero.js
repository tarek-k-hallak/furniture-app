import React from 'react'

import { hero } from '../data'
import Stats from '../components/Stats'

export default function Hero() {
    const { title, subtitle, buttonText } = hero
    return (
        <section className='h-[650px] w-full bg-hero
                bg-right bg-cover bg-no-repeat text-white 
                pt-[160px] pb-[254px] relative mb-12
                lg:bg-center lg:mb-28'>
            <div className="container mx-auto text-center max-w-[1100px]">
                <h1 className='text-2xl mx-auto font-semibold mb-[25px]
                    lg:text-[54px] lg:leading-tight lg:max-w-[888px]'>
                    {title}
                </h1>
                <h2 className='mb-[25px] max-w-[627px] mx-auto
                            lg:mb-[65px] lg:text-xl '>
                    {subtitle}
                </h2>
                <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] 
                        px-[35px] py-[9px] mb-[55px] text-xl rounded-md backdrop-blur-md transition
                        lg:px-[80px] lg:py-[16px] lg:mb-[84px]'>
                    {buttonText}
                </button>

                {/* Stats */}
                <>
                    <Stats />
                </>
            </div>
        </section>
    )
}