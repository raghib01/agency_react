import React from 'react'
import image1 from '../../assets/img/image_1.png'

export const Input = () => {
  return (
      <section className='container'>
          <div className='grid grid-cols-2 '>
              <div className='flex justify-center items-center'>
                  <h1 className='text-3xl font-bold w-full h-full m-auto'> Contacts With Us ! </h1>
                  
              </div>

             
                <div className='flex justify-center content-center'>
                      <img src = {image1} alt="" className='max-h-[350px]'/>
                </div>
          </div>

      </section>
  )
}
