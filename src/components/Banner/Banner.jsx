import React from 'react'
import back from '../../assets/img/back_1.png'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { FaBookOpenReader } from 'react-icons/fa6'


export const Banner = () => {
    return <section className='container py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-5'>
            <div className='flex justify-center items-center'>
                <img src={back} alt=""
                className='w-auto h-[350px]'
                />
            </div>
        <div className='flex flex-col justify-center gap-4 '>
            <div className='pb-10'>
                <h1 className='text-4xl '>
                    The World's Leading Online Learning Platform
                </h1>
            </div>
            
                <div className='text-2xl bg-slate-200 text-dark flex flex-row rounded-[8px]  gap-20 p-2 border-2 '>
                    <FaBookOpenReader className='mx-2 align-middle' />
                    <h1 className='font-thin'>150k Online corses</h1>
                </div>
                <div className='text-2xl bg-slate-200  text-dark flex flex-row rounded-[8px] gap-20 p-2 hover:shadow-1xl border-2'>
                    <GrUserExpert className='mx-2 align-middle' />
                    <h1 className='font-thin'>Exper Instruction</h1>
                </div>
                <div className='text-2xl bg-slate-200   text-dark flex flex-row rounded-[8px] gap-20 p-2 hover:shadow-1xl border-2'>
                    <MdOutlineAccessTimeFilled className='mx-2 align-middle' />
                    <h1 className='font-thin'>Lifetime Access</h1>
                </div>
          </div>
      </div>
  </section>
}
