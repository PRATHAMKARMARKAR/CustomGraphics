import React from 'react';
import Header from './Header';
import Footer1 from '../../Footer1';
// import './Contactus.css'; // ✅ Make sure this is imported

const Contactus = () => {
  const heightNavbar = 10;

  return (
    <>
      <div className="main min-h-screen w-full flex flex-col">
        <Header />

        <div className="flex flex-col items-center justify-center gap-8 mt-10">
          <div className="screen" />
          <div className="screen1" />
        </div>
      </div>

      <Footer1 height={heightNavbar} />
    </>
  );
};

export default Contactus;
