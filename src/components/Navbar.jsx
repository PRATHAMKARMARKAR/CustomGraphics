import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <div className="navbar text-[#FD520F] text-2xl  flex  justify-center gap-48 items-center   ">
          <div className="ml-30 flex -mt-16  justify-center gap-48 items-center  ">
           <div className="text ml-10 2xl:ml-0 2xl:mr-8 w-30">About Us</div>
           <div className="text ml-10 2xl:ml-0  w-30 `cursor-pointer ${
            location.pathname === '/' ? 'underline decoration-[#CABDBB] decoration-2 underline-offset-4'
              : 'underline decoration-[#CABDBB] decoration-2 underline-offset-4'
          }`"
              onClick={() => navigate('/')}
         >Home</div>
           <div className="text  2xl:mr-5 w-30">Contact Us</div></div>
        </div>
    
    </>
  )
}

export default Footer