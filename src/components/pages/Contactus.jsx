import React from "react";
import Header from "./Header";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contactus = () => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('../src/assets/Contact.svg')",
          height: "85vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "-20px",
        }}
      >
        {/* Buttons Section */}
        <div className="grid grid-cols-2 gap-150 -mt-10 z-10">
          {/* Left side */}
          <div className="flex flex-col space-y-48">
            <ContactButton icon={<FaLinkedinIn />} label="Linkedin" active/>
            <ContactButton icon={<SiGmail />} label="Gmail" active />
          </div>

          {/* Right side */}
          <div className="flex flex-col space-y-48">
            <ContactButton icon={<FaWhatsapp />} label="Whatsapp" active/>
            <ContactButton icon={<FaInstagram />} label="Instagram" active />
          </div>
        </div>

        {/* Background Title Text */}
        <h1 className="absolute bottom-0 left-10 text-[10rem] font-extrabold text-transparent stroke-orange-500 opacity-10 select-none">
          Contact us
        </h1>
      </div>
    </>
  );
};

const ContactButton = ({ icon, label, active }) => {
  return (
    <button
      className={`flex items-center justify-center space-x-4 border-2 ${
        active
          ? "border-orange-500 text-orange-500"
          : "border-gray-400 text-gray-500"
      } 
      px-15 py-4 rounded-full text-2xl font-semibold 
      transition-all hover:border-orange-500 hover:text-gray-500 
      backdrop-blur-sm bg-white/70 shadow-md hover:shadow-lg`}
    >
      <span className="text-3xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default Contactus;
