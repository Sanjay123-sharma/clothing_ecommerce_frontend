import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLogout } from '../Redux/Slice';

export default function Home() {
  const [token,setToken]=useState(localStorage.getItem("token"));
  const userName=localStorage.getItem("UserName");
  
  const dispatch=useDispatch()
  

  useEffect(()=>{
   let timer= setTimeout(() => {
      setToken(localStorage.getItem("token"))
    }, 500);

    return clearTimeout(timer);
  },[token]);


  return (
    <div>
      <h1>Welcome {userName}</h1>

      <button onClick={()=>{
        localStorage.removeItem("UserName");
        localStorage.removeItem("token");
        window.location.href='/signin';
        dispatch(setLogout());

      }}>Logout</button>
      
    </div>
  )
}
