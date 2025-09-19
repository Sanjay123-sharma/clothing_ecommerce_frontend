import React from 'react'
import Seven from '../PDP/ImgGallery/Images/Seven.png'
import Img2 from '../PDP/ImgGallery/Images/Img2.png'
import Price from '../PDP/ImgGallery/Images/price.png'
import circle from '../PDP/ImgGallery/Images/circle.png'
import time from '../PDP/ImgGallery/Images/time.png'
import size from '../PDP/ImgGallery/Images/size.png'
import Off from '../PDP/ImgGallery/Images/off.png'
import coupon from '../PDP/ImgGallery/Images/coupon.png'
import alert from '../PDP/ImgGallery/Images/alert.png'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router'
import { addToCart, decrement, increment } from '../../Redux/Slice'
import toast, { Toaster } from 'react-hot-toast'

export default function ProductInfo() {
      const Products=useSelector((state)=>state.app.Products);
    let Product1=Products.find((item)=>item?.id==3);
    const dispatch=useDispatch();

    const Cart=useSelector((state)=>state.app.Cart);
    let CartItem=Cart.find((item)=>item.id==3)

    const handleAdd=(id)=>{
        dispatch(addToCart(id))
        toast.success("Item has been Added To Cart");
    }

    const handleIncrement=(id)=>{
        dispatch(increment(id));

    }
    const handleDecrement=(id)=>{
dispatch(decrement(id))
    }
  return (
    <div>

        <div>
            <div>
                <div className='flex gap-70'>
                    <img src={Seven} alt="" className='w-20 h-4'/>
                <img src={circle} alt="" className='w-7 h-7'/>
                </div>
                <img src={Img2} alt="" className='w-60 h-10'/>
                <h1 className='text-xl font-semibold '>{Product1.title} </h1>
                <h1 className='text-xl font-semibold '><span className='mt-3'> </span></h1>
                <div className='bg-[#FFEABE]'>
                    <p className='text-[#795509] text-sm p-1'>Best Deal</p>
                </div>
                <div className='flex gap-1'>
                    <img src={Price} alt="" className='size-4 mt-1'/>
                    <p>{Product1.price}</p>
                    <p className='text-[#757575]'>70.00</p>
                    <p className='text-[#D8662A]'>28% OFF</p>
                </div>
              <NavLink>  <img src={time} alt="" className='w-100'/></NavLink>
              <img src={size} alt="" className='w-100 h-10'/>

              <div className='flex gap-2'>
                <button className='border-1 border-gray-50 bg-gray-50 rounded-md w-10 h-10 '>5"</button> 
                <button className='border-1 border-gray-50 bg-gray-50 rounded-md w-10 h-10 '>8"</button> 
                <button className='border-1 border-pink-500 bg-gray-50 rounded-md w-10 h-10 '>12"</button> 
                <button className='border-1 border-gray-50 bg-gray-50 rounded-md w-10 h-10 '>24"</button> 
              </div>
              <div>
                <img src={Off} alt="" className='w-100 mt-2' />
              </div>
              <div>
                <img src={coupon} alt="" className='w-100 mt-2' />
              </div>

              <div className='flex gap-2 mt-2'>
                <button onClick={()=>handleDecrement(CartItem.id)} className='bg-gray-50 border-1 rounded-full border-gray-100 w-10 h-10'>-</button>
               <p className='mt-3'>{CartItem.count}</p>
                <button onClick={()=>handleIncrement(CartItem.id)}  className='bg-gray-50 border-1 rounded-full border-gray-100 w-10 h-10'>+</button>
                <div className=''>
                    <button onClick={()=>handleAdd(Product1.id)}
                        className='bg-[#267550] border-0 rounded-md text-white w-40 pl-[16px] pr-[16px] pt-2 pb-2 ml-30'
                        >ADD To Cart</button>

                    
                </div>
              

               
              </div>
              <div className='mt-5'>
                <img src={alert} alt="" className='w-100' />
              </div>
              
            </div>
        </div>

        <Toaster
  position="top-center"
  reverseOrder={false}
/>

      
    </div>
  )
}
