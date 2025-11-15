import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="main h-20 overflow-hidden w-full text-black flex items-center justify-between px-10">
      
      {/* Logo / Left Section */}
      <div
        className="left centerSection1 cursor-pointer"
        onClick={() => navigate('/')}
      ></div>

      {/* Right Navigation */}
      <div
        className="right flex gap-20 ml-8 mr-10 text-[#FD520F] font-medium md:text-xl text-xs"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        {/* Contact Us */}
        <h1
          className={`cursor-pointer hover:underline ${
            location.pathname === '/contactus' ? 'underline' : ''
          }`}
          onClick={() => navigate('/contactus')}
        >
          Contact Us
        </h1>

        {/* Home */}
        <h1
          onClick={() => navigate('/')}
          className={`cursor-pointer ${
            location.pathname === '/' ? 'underline' : ''
          }`}
        >
          Home
        </h1>

        {/* About Us */}
        <h1
          className={`cursor-pointer hover:underline ${
            location.pathname === '/aboutus' ? 'underline' : ''
          }`}
          onClick={() => navigate('/aboutus')}
        >
          About Us
        </h1>
      </div>
    </div>
  );
};

export default Header;
