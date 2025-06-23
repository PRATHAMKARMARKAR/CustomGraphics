import React from "react";
import "./components.css";

const Navbar = ({ height }) => {
  return (
    <>
      <div className="main" style={{ height: `${height}%` }}>
        {/* Group wrapper: makes all inside hover/interactive */}
        <div
          className="box group text-[#FD520F] text-2xl flex justify-center items-center mt-3 cursor-pointer"
          data-model-id="93:120-frame"
          style={{ fontFamily: "'Afacad', Helvetica" }}
          // Optional: make full block clickable
          // onClick={() => window.location.href = "#your-target"}
        >
          {/* String and Button: Contact Us */}
          <div className="string1 h-full w-[100%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 143" fill="none">
              <path
                d="M-17.8175 141C-17.8175 141 -35.243 81.1918 63.6889 48.2973C162.621 15.4027 230.636 48.2973 230.636 48.2973C315.4 73.1466 177.177 -7.52374 338 2.94269"
                stroke="#998986"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button className="h-full w-1/2 mb-28 -ml-5  transition-all duration-300">
            Contact us
          </button>

          {/* String and Button: Home */}
          <div className="string1 h-full w-[100%] mb-24 -ml-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="258" height="90" viewBox="0 0 258 90" fill="none">
              <path
                d="M2 51.5676C2 51.5676 77.1606 95.4101 128.33 86.7051C179.5 78 95.5 48.0002 153 15.5001C210.5 -17 232.5 18.747 256.5 25.0001"
                stroke="#998986"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button className="h-full w-1/2 mb-30 -ml-24  transition-all duration-300">
            Home
          </button>

          {/* String and Button: About Us */}
          <div className="string1 h-full w-[100%] -ml-10 -mt-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="302" height="101" viewBox="0 0 302 101" fill="none">
              <path
                d="M1.5 53.5001C1.5 53.5001 60.5 61.0001 63 85.5001C65.5 110 114 97.0001 127 76.0001C140 55.0001 127 53.5001 150.5 23.0001C174 -7.4999 214 -6.4999 183.5 33.5001C153 73.5001 217.668 95.453 243.5 97.0001C269.332 98.5473 236 76.0001 300.5 53.5001"
                stroke="#998986"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button className="h-full w-1/2 -ml-5  -mt-16 transition-all duration-300">
            About us
          </button>

          {/* String and (optional) other button */}
          <div className="string1 h-full w-[100%] -ml-5 -mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="382" height="89" viewBox="0 0 382 89" fill="none">
              <path
                d="M1.5 50.0001C27.6239 11.8746 94.5 -0.999939 114.5 28.5001C134.5 58.0001 220.011 45.3927 216.5 79.5001C212.989 113.607 316.284 10.8777 351.5 74.5001C351.266 31.5653 400 -24.9999 378.5 1.00006"
                stroke="#998986"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
