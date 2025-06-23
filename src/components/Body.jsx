import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
const Body = () => {
    const approuter = createBrowserRouter([
        {path:"/",element:<Home/>},
      
    ])
  return (
 <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Body