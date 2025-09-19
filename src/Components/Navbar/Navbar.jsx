import React from 'react'
import Img from '../Navbar/Images/Img.png'
import Toys from '../Navbar/Images/Toys.png'
import Trade from '../Navbar/Images/Trade.png'
import Book from '../Navbar/Images/Book.png'
import Image from '../Navbar/Images/imag.png'
import Baby from '../Navbar/Images/Baby.png'
import Ball from '../Navbar/Images/Ball.png'
import { NavLink } from 'react-router'


export default function Navbar() {
  return (
    <div >
      
      <div className='flex gap-2 border-0 ml-18'>
        <div className='flex gap-5 bg-[#4B9D72] h-[47px] w-40 border-0 rounded-md'>
            <h1 className='text-gray-50 font-semibold mt-2 ml-6'>Shop All</h1>
       <button>
         <img src={Img} alt='' className='size-6 ' />
       </button>
        </div>

        <div className='flex gap-5 font-semibold mt-2 ml-10'>
            <div className='flex gap-1'>
                <img src={Toys} alt="" className='size-4 mt-1' />
                <p><NavLink className={'hover:underline'}>Toys & Games</NavLink></p>
            </div>
            <div className='flex gap-1'>
                <img src={Book} alt="" className='size-4 mt-1'/>
                <p><NavLink className={'hover:underline'}>Books & Stationery</NavLink></p>
            </div>
            <div className='flex gap-1'>
                <img src={Baby} alt="" className='size-4 mt-1'/>
                <p><NavLink className={'hover:underline'}>TBaby Essentials</NavLink></p>
            </div>
            <div className='flex gap-1'>
                <img src={Ball} alt="" className='size-4 mt-1'/>
                <p><NavLink className={'hover:underline'}>Sports & Outdoor</NavLink></p>
            </div>
            <div>
<NavLink><img src={Trade} alt="" className='w-20 h-8'/></NavLink>
            </div>
            

           
                <div className='ml-50'>
                    <NavLink><img src={Image} alt="" className='w-40 h-8 '/></NavLink>
                </div>
            

        </div>

      </div>



    </div>
  )
}
