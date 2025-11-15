import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="navbar text-[#FD520F] text-2xl flex justify-center gap-48 items-center">
        <div className="ml-30 flex -mt-16 justify-center gap-48 items-center">
          
          {/* About Us */}
          <div
            className={`text ml-10 2xl:ml-0 2xl:mr-8 w-30 cursor-pointer ${
              location.pathname === '/aboutus'
                ? 'underline decoration-[#CABDBB] decoration-2 underline-offset-4'
                : ''
            }`}
            onClick={() => navigate('/aboutus')}
          >
            About Us
          </div>

          {/* Home */}
          <div
            className={`text ml-10 2xl:ml-0 w-30 cursor-pointer ${
              location.pathname === '/'
                ? 'underline decoration-[#CABDBB] decoration-2 underline-offset-4'
                : ''
            }`}
            onClick={() => navigate('/')}
          >
            Home
          </div>

          {/* Contact Us */}
          <div
            className={`text 2xl:mr-5 w-30 cursor-pointer ${
              location.pathname === '/contactus'
                ? 'underline decoration-[#CABDBB] decoration-2 underline-offset-4'
                : ''
            }`}
            onClick={() => navigate('/contactus')}
          >
            Contact Us
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
