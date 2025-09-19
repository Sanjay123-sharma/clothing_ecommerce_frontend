import React from 'react'
import ImgGallery from './ImgGallery/ImgGallery'
import ProductInfo from './ProductInfo'
import just from '../PDP/ImgGallery/Images/just.png'

export default function PDP() {
  return (
    <div>
        <div className='flex gap-5'>
            <ImgGallery/>
            <ProductInfo/>
            <img src={just} alt="" className='w-[288px] h-[518px] ml-10'/>
        </div>
      
    </div>
  )
}
