import React from 'react';
import Header from './Header';
import Footer1 from '../../Footer1';
// import './Contactus.css'; // ✅ Make sure this is imported

const Contactus = () => {
    
  return (
   <>
   <div className="main h-screen w-full overflow-hidden">
   <Header/>
        <div className="flex screen h-[800px] -mt-30 2xl:-mt-45  ">
          <div className='telephone'></div>
     {/* <div className="bookbutton h-7 w-32   text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  ">
            Our Projects
     </div> */}
    </div>

      </div>
      <Footer1 height={30} />
   </>
  )
}

export default Contactus;
