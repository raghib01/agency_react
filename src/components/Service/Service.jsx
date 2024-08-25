import React from 'react'
import { servicesData } from './ServiceData'
import { motion } from 'framer-motion'
import { FadeUp } from '../FadeUp/FadeUp'


export const Service = () => {
    return <section>
        <div className="container pb-14 pt-16">
            <div>
                <h1 className='text-4xl font-bold text-center pb-10'>
                    Our Service
                </h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8'>
                {
                    servicesData.map((service) => (
                        <motion.div
                            variants={FadeUp(service.delay)}
                            initial="initial"
                            animate="animate"
                            viewport={{once:true}}
                            
                            className='bg-slate-300 flex flex-col items-center p-5 hover:bg-primary hover:text-white hover:scale-110 duration-300 hover:shadow-2xl'>
                            <div className='text-4xl mb-4 p-3'> {service.icon} </div>
                            <h1 className='text-md font-semibold text-center px-3'>{service.title }</h1>
                        </motion.div >
                    ))
                }
            </div>
      </div>
  </section>
    
}
