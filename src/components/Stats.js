import React from 'react'

import { stats } from '../data'

export default function Stats() {
    return (
        <section className='text-center bg-accent rounded-[20px] p-5 
            mt-[-120px] max-w-[1000px] mx-[15px]
            lg:mx-auto xl:mt-[-40px] lg:mt-[-90px] lg:p-8' >
            <div className="flex flex-wrap gap-y-8">
                {stats.map((item, index) => {
                    return (
                        <div key={index}
                            className='min-h-[70px] w-3/6
                            flex flex-col justify-center odd:border-r
                            lg:flex-1 lg:even:border-r lg:even:last:border-none'>
                            <div className='text-2xl font-semibold lg:text-4xl'>
                                {item.value}
                            </div>
                            <div className='text-base font-light w-[110px] sm:w-full  mx-auto'>
                                {item.text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
