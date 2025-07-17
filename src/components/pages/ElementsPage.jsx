import React from 'react'
import Header from './Header'
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";

// import OurServices from './OurServices';
const ElementsPage = () => {
    let navigate = useNavigate();
   const heightNavbar = 25;
  const marginT = 65;
  return (
    <>
      <div className="main h-screen  w-full ">
        <Header />
        <div className="flex text-[#FD520F] overflow-hidden">
          <div className="logo -mt-14 centerSection2"> </div>
          <div className="STRINGONE "></div>
          <div className="   STRING1   -ml-12  md:mb-14  md:h-full   mt-5 md:mt-2  "></div>
          <div className="bookbutton h-7 w-32 border-2 mt-16  overflow-hidden   md:hover:text-gray-400 md:hover:border-[#FD520F]   -ml-60 md:h-10 md:w-52  md:px-3 text-center md:-ml-[1250px] 2xl:-mr-10  rounded-4xl bg-white md:mt-[330px] "
    onClick={()  => navigate("/Ourservice")
}>
            Our Services
          </div>
          <div className="  mt-[60px] -ml-24  "></div>
          <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-10 md:h-10 md:w-52 md:ml-[180px]  md:mt-2 bg-white  mt-32 ">
            Our Projects
          </div>
          <div className="  mt-[125px] -ml-20 2xl:-ml-26  "></div>
          <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F]  md:py-1 -ml-1  md:h-10 md:w-52  md:ml-[290px]  md:mt-[530px] bg-white mt-50 2xl:mt-130 ">
            Testimonials
          </div>
          <div className=" mt-52 -ml-20  2xl:-ml-5"> </div>
          <div className="bookbutton h-7 w-32 text-center rounded-4xl border-2 md:hover:text-gray-400 md:hover:border-[#FD520F] md:py-1 ml-4 md:h-10  md:w-52 md:ml-[130px] bg-white md:mt-[120px]  mt-[320px]  ">
            Our Products
          </div>
          <div className=" mt-[300px] -ml-10  "></div>
        </div>
      </div>
      {/* <Footer height={heightNavbar} margin={marginT} /> */}
    </>
  );
}

export default ElementsPage