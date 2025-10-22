import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import ElementsPage from './pages/ElementsPage';
import OurServices from './pages/OurServices';
import Contactus from './pages/Contactus';
import Projects from './pages/OurProjects/Projects';
import Procreate from './pages/Procreate/Procreate';
import ProcreateView1 from './pages/Procreate/ProcreateView1';
const Body = () => {
    const approuter = createBrowserRouter([
        {path:"/",element:<Home/>},
        {path:"/elements",element:<ElementsPage/>},
        {path:"/Ourservice",element:<OurServices/>},
        {path:"/contactus",element:<Contactus/>},
        {
          path: "/project",element: <Projects />        },
        { path: "/project/procreate", element: <Procreate /> },
    { path: "/project/pro1", element: <ProcreateView1 /> },


    ])
  return (
 <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Body