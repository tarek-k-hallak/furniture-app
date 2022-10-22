import React from 'react'

import { hero } from '../data'

export default function Hero() {
    const { title, subtitle, buttonText } = hero
    return (
        <section className='h-[650px] w-full bg-hero pt-[100px]
                bg-right bg-cover bg-no-repeat text-white 
                lg:pt-[150px] md:pt-[200px] xs:pt-[200px]'>
            <div className="container mx-auto text-center max-w-[1100px]">
                <h1 className='text-4xl mx-auto font-semibold mb-[25px]
                    lg:text-[54px] lg:leading-tight lg:max-w-[888px]'>
                    {title}
                </h1>
                <h2 className='text-xl mb-[25px] max-w-[627px] mx-auto
                            lg:mb-[65px] lg:text-2xl '>
                    {subtitle}
                </h2>
                <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] 
                        px-[35px] py-[9px] mb-[70px] text-xl rounded-md backdrop-blur-md transition
                        lg:px-[80px] lg:py-[16px] lg:mb-[84px] md:mb-[140px]'>
                    {buttonText}
                </button>
            </div>
        </section>
    )
}
