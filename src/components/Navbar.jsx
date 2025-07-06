import React from "react";
import "./components.css";

const Navbar = ({ height }) => {
  return (
    <>
      <div className=" he mb-20 "style={{ fontFamily: "'Afacad', Helvetica" }}>
    <div className="mainHb  w-full ">
        <div className="text  flex">
 <button className="h-full text-[25px] mt-3  font-stretch-ultra-condensed  font-bold ml-96  text-[#FD520F] ">
            Contact us
          </button>
          <button className="h-full text-[25px]   font-stretch-ultra-condensed mt-3  ml-52 font-bold  text-[#FD520F] ">
            Home
          </button>
          <button className="h-full ml-60 text-[25px] font-stretch-ultra-condensed  mt-2 font-bold  text-[#FD520F] ">
            About us
          </button></div>
    </div></div>
    </>
  );
};

export default Navbar;
