import React from 'react'

const Header = () => {
  return (
    <>
     <div className="main h-20 overflow-hidden w-full  text-black flex items-center  justify-between ">
   <div className="left centerSection1 "></div>
   <div className="right flex gap-20 ml-8 mr-10 text-[#FD520F]  font-medium md:text-xl text-sm " style={{ fontFamily: "'Afacad', sans-serif" }}>
     <div className="text ml-10  w-30">About Us</div>
           <div className="text ml-10 w-30">Home</div>
           <div className="text  w-30">Contact Us</div>
   </div>
     </div>
    </>
  )
}

export default Header