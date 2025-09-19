import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import PDP from '../PDP/PDP'

export default function Main() {

  return (
    <div>
            {/* top section */}
        <div className='fixed top-0 left-0 right-0 z-auto'>
       <div className='ml-20 mt-8'>
         <Header/>
       </div>

       <div className='mt-10 border-[#C7E1D3] border-1 '>
        <Navbar/>
       </div>

       <div>
        <BreadCrumbs/>
       </div>
        </div>

        {/* PDP */}

        <div className='mt-53 mb-5'>
            <div className='ml-25'>
                <PDP/>

            </div>
        </div>
      
    </div>
  )
}
