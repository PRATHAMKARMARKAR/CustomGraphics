import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ElementsPage from './pages/ElementsPage';
const Body = () => {
    const approuter = createBrowserRouter([
        {path:"/",element:<Home/>},
        {path:"/elements",element:<ElementsPage/>},

    ])
  return (
 <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Body