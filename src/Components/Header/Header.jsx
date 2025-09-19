import React, { useState } from 'react'
import Logo from '../Header/Images/logo.png'
import Loc from '../Header/Images/Loc.png'
import Search from '../Header/Images/Search.png'
import Mic from '../Header/Images/Mic.png'
import EN from '../Header/Images/En.png'
import SignIn from '../Header/Images/SignIn.png'
import Carts from '../Header/Images/Cart.png'
import { useSelector } from 'react-redux'

export default function Header() {
    const [search,setSearch]=useState('');
    const Cart=useSelector((state)=>state.app.Cart)
  return (
<div className=''>
       
    <div className='flex gap-15'>
        <img src={Logo} alt="" className='h-10 w-20' /> 
        <img src={Loc} alt="" className='h-10 w-20'/>
        <div className='flex gap-3 border-1 border-gray-200 rounded-md w-150'>
            <img src={Search} alt="" className='size-5 ml-2 mt-2'/>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='What are you looking for... ' className='ml-10 border-transparent hover:border-transparent active:border-transparent outline-none'/>
            <img src={Mic} alt="" className='size-5 ml-68 mt-2' />
        </div>

         <div className='ml-48 h-10 border-0 '>
        <div className='flex gap-1 bg-gray-200 border-0 rounded-md px-0.5 py-1'>
           <div className='flex gap-0 bg-gray-50 rounded-md '>
            <img src={EN} alt="" className='size-4 mt-1' />
             <h1 className='font-semibold'>EN</h1>
            <select name="" id="">
                <option value=""></option>
            </select>
           </div>
           <div className='flex gap-1 bg-gray-50 rounded-md'>
            <img src={SignIn} alt="" className='size-4 mt-1'/>
            <button>Sign In</button>
           </div>
           <div className='flex gap-1 bg-gray-50 rounded-md'>
            <img src={Carts} alt="" className='size-4 mt-1'/>
           <h1> Cart</h1>
           <p className='border-0 rounded-md bg-red-600 text-white text-sm px-1 h-5'>{Cart.length}</p>
           </div>
            

        </div>

       </div>
       </div>
      
        
         
    </div>
  )
}
