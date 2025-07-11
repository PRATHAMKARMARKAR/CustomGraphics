import React from 'react'

const Header = () => {
  return (
    <>
     <div className="main h-20 overflow-hidden w-full  text-black flex items-center  justify-between ">
   <div className="left centerSection1 "></div>
   <div className="right flex gap-20 ml-8 mr-10 text-[#FD520F]  font-medium md:text-xl text-xs " style={{ fontFamily: "'Afacad', sans-serif" }}>
    <h1>Contact us</h1>
    <h1>Home</h1>
    <h1>About us</h1>
   </div>
     </div>
    </>
  )
}

export default Header