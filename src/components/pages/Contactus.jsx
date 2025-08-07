import React from 'react';
import Header from './Header';
import Footer1 from '../../Footer1';
// import './Contactus.css'; // ✅ Make sure this is imported

const Contactus = () => {
    
  return (
    <>
      <div className="main h-screen w-full overflow-hidden">
        <Header />
        <div className="flex screen  -mt-30 2xl:-mt-20 2xl:ml-30  ">
          <div className="telephone 2xl:ml-68 z-2"></div>
        </div>
        <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-10 md:h-10 md:w-52    bg-white  z-10  2xl:-mt-106 2xl:ml-69">
          Linkedin
        </div>
        <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-10 md:h-10 md:w-52    bg-white  z-11  2xl:mt-40 2xl:ml-70">
          Gmail
        </div>
        <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-10 md:h-10 md:w-52    bg-white  z-12  2xl:-mt-60 2xl:ml-280">
          Whatsapp
        </div>
        <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-10 md:h-10 md:w-52    bg-white  z-13  2xl:mt-40 2xl:ml-280">
          Instagram
        </div>
      </div>

      <Footer1 height={30} />
    </>
  );
}

export default Contactus;
