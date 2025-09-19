import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Main from '../Components/Main/Main'

export default function Router() {
    const router=createBrowserRouter([
        {
            path:"/",
            element:(
            <Main/>   
            )
        }  
    ])
  return (
    <div>
        <RouterProvider router={router} />

    </div>
  )
}
