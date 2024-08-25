import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import sideCover from '../../assets/img/image_1.png'
import Blob from '../../assets/img/blob.svg'
import {motion, spring} from 'framer-motion'
import { FadeUp } from '../FadeUp/FadeUp'

export const Cover = () => {
  return(
  <section className='  overflow-hidden relative'>
    <div className="container grid grid-cols-1  md:grid-cols-2 min-h-[600px]">
        {/* info section */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20 text-center md:text-left space-y-10 lg:max-w-[450px]'>
          <motion.h1
            variants={FadeUp(0.5)}
            initial="initial"
            animate="animate"

            className='text-3xl lg:text-5xl font-bold !leading-snug'>
            Let's go with a new wolrd and <span>learn</span> with <span>New Coder</span>.
          </motion.h1>
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className='flex justify-center md:justify-start '>
            <button className='btn-primary flex items-center gap-2 group'>  Get started    <IoIosArrowRoundForward className='text-2xl group-hover:translate-x-3 duration-300'  />
            </button>
          </motion.div>
      </div>
        {/* image section */}
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ x: 50, opecity: 0 }}
            animate={{ x: 0, opecity: 1 }}
            transition = {{duration: 0.6, delay: 0.4, ease:"easeInOut"}}
            src={sideCover}
            alt=""
            className='w-[400px] xl:w-[600px] relative z-10 drop-shadow' />
          <motion.img
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            src={Blob}
            alt=""
            className='absolute w-[1200px] z-[1] hidden md:block' />
        </div>
    </div>
    </section>
  )
}
