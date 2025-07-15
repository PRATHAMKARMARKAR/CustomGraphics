import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ElementsPage from './pages/ElementsPage';
import OurServices from './pages/OurServices';
const Body = () => {
    const approuter = createBrowserRouter([
        {path:"/",element:<Home/>},
        {path:"/elements",element:<ElementsPage/>},
        {path:"/Ourservice",element:<OurServices/>},
    ])
  return (
 <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Body