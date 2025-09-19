import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { ApiData } from '../../../Redux/Slice';

export default function ImgGallery() {
    const dispatch=useDispatch();
    const Products=useSelector((state)=>state.app.Products);
    let Product1=Products.find((item)=>item?.id==3);

    useEffect(()=>{
        dispatch(ApiData())
    },[dispatch])
  return (
    <div>
        <div>
            <img src={Product1.image} alt='' className='w-[430px] h-[550px] bg-gray-50'/>
        </div>
      
    </div>
  )
}
