import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../Components/Home'
import Signup from '../Components/Signup'
import Signin from '../Components/Signin'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

export default function Router() {
    const router=createBrowserRouter([
        {
            path:"/",
            element:(
            <Home/>   
            )
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:'/signin',
            element:(
                <ProtectedRoute>
                    <Signin/>
                </ProtectedRoute>
            )
        }
    ])
  return (
    <div>
        <RouterProvider router={router} />

    </div>
  )
}
