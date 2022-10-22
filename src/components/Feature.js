import React from 'react'
import { features } from '../data'

export default function Feature() {
    const { image, title, subtitle, items } = features
    return (
        <section className='container mx-auto mt-[120px]'>
            <div className="flex flex-col
                lg:flex-row lg:gap-x-24">
                <div className='flex-1 order-1 lg:-order-1'>
                    <img className='w-full' src={image.type} alt="" />
                </div>
                <div className='flex-1 flex flex-col justify-end'>
                    <h2 className='title'>{title}</h2>
                    <p className='subtitle'>{subtitle}</p>
                    <div>
                        {items.map((item, index) => {
                            return (
                                <div key={index} className='flex mb-6 lg:last:mb-0'>
                                    <div className='text-2xl mr-4 lg:text-3xl'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className='font-semibold'>
                                            {item.title}
                                        </h4>
                                        <p className=''>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
