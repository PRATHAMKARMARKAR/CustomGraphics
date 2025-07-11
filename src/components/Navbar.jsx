import React from "react";
import "./components.css";

const Navbar = ({ height }) => {
  return (
    <>
      <div style={{ fontFamily: "'Afacad', Helvetica" }}>
        <div className="mainHb w-full bg-cover bg-center py-4">
          <div className="flex justify-center  flex-wrap gap-52">
            <button className="text-2xl  font-bold text-[#FD520F]">
              Contact Us
            </button>
            <button className="text-2xl  font-bold text-[#FD520F]">Home</button>
            <button className="text-2xl   font-bold text-[#FD520F]">
              About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
