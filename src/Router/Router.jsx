import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../Components/Home'


export default function Router() {
    const router=createBrowserRouter([
       {
        path:"/",
        element:<Home/>
       } 
    ])
  return (
    <div>
        <RouterProvider router={router} />

    </div>
  )
}
