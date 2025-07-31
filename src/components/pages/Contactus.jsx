import React from 'react'
import Header from './Header'
import Footer1 from '../../Footer1'
const Contactus = () => {
    const heightNavbar = 20;
  return (
   <>
   <div className="main h-screen w-full">
   <Header/>
    <div className="flex screen h-[800px] -mt-30">
     <div className="bookbutton h-7 w-32   text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  ">
            Our Projects
     </div>
    </div>

   </div><Footer1 height={heightNavbar} />
   </>
  )
}

export default Contactus