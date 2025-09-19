import React from 'react'
import Exit from './Images/Exit.png'
import Home from './Images/Home.png'
import { NavLink } from 'react-router'

export default function BreadCrumbs() {
  return (
    <div>
        <div className='bg-[#4B9D721A] h-10 '>
            <div className='flex gap-3 align-middle ml-15 pt-1'>
               <NavLink> <img src={Exit} alt="" className='size-3 mt-1'/></NavLink>
               <h5>Back</h5>
                <span className='text-[#757575]'>|</span>
                <img src={Home} alt="" className='size-4 mt-1' />
                  <span className='text-[#757575]'>/</span>
                  <p>Dolls & Collectables</p>
                    <span className='text-[#757575]'>/</span>

            </div>

            <div>

            </div>

        </div>
      
    </div>
  )
}
