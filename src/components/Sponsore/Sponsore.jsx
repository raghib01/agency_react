import React from 'react'
import oracle from '../../assets/sponsor/oracle.png'
import airbnb from '../../assets/sponsor/airbnb.png'
import amazon from '../../assets/sponsor/amazon.png'
import netflix from '../../assets/sponsor/netflix.png'
import microsoft from '../../assets/sponsor/microsoft.png'
import paypal from '../../assets/sponsor/paypal.png'





export const Sponsore = () => {
  return <section className='container'>

    <div className=' grid grid-cols-2 md:grid-cols-6 sm:grid-cols-2'>
      <div className='flex flex-row items-center gap-4 px-3'>
          <img src={airbnb} alt="" className=' border-2xl ' />
        
      
          <img src={amazon} alt="" className='h-100px ' />
        
      
          <img src={microsoft} alt="" className='h-100px ' />
        
          <img src={netflix} alt="" className=' h-100px' />
        
      
          <img src={oracle} alt="" className='h-100px' />
        
      
          <img src={paypal} alt="" className='h-100px ' />
        </div>
    </div>

  </section>
}
