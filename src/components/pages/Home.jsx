import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import ElementsPage from "./ElementsPage";
import NavBig from "../NavBig";
import OurServices from "./OurServices";

const App = () => {
  const [index, setIndex] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false); // For click pop
  const heightNavbar = 20;
  const marginT = 30;
  const words = ["Solutions", "Products", "Design", "Development"];
  const direction = "up";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const textVariant = {
    hidden: (direction) => ({
      opacity: 0,
      y: direction === "up" ? 120 : -120,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction === "up" ? -120 : 120,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  const handleBookNow = () => {
    const calendarUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=Meeting%20with%20Custom%20Graphics" +
      "&dates=20250625T100000Z/20250625T103000Z" +
      "&details=Let%27s%20discuss%20your%20design%20requirements." +
      "&location=Google%20Meet" +
      "&add=customsgraphics20@gmail.com";

    window.open(calendarUrl, "_blank");
  };

  const handleScrollWithPop = () => {
    setIsBouncing(true);
    setTimeout(() => {
      const el = document.getElementById("elements-section");
      el && el.scrollIntoView({ behavior: "smooth" });
      setIsBouncing(false);
    }, 300); // delay for bounce
  };

  return (
    <>
      <div className="main h-screen w-full">
        <div className="hide-on-small">
          <Navbar />
        </div>
        <div className="hide-on-big">
          <NavBig />
        </div>

        <div className="flex flex-col justify-center items-center h-[55%] sm:h-[55%] md:gap-4 -mt-20">
          <div className="centerSection overflow-hidden md:mt-10 mt-16" />

          {/* Animated heading */}
          <div className="relative overflow-hidden flex flex-col md:flex-row md:ml-52 md:justify-center justify-center items-center md:items-center h-96 w-full md:h-60 -mt-6 md:gap-1">
            <span
              className="text-6xl md:h-24 overflow-hidden h-52 md:text-7xl md:mb-0 mb-10 font-bold text-[#FD520F]"
              style={{ fontFamily: "'Afacad', Helvetica" }}
            >
              Custom
            </span>

            <div className="relative flex justify-center items-center w-full md:w-[26rem] -mt-10 md:-mt-5 md:ml-2 h-96 overflow-hidden">
              <div className="absolute left-0 overflow-hidden ml-24 md:ml-0 md:bottom-[40%] sm:bottom-[30%] h-1 w-1/2 bg-[#FD520F] rounded-sm z-0" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.span
                  key={words[index]}
                  className="absolute md:left-0 md:h-30 md:top-55 overflow-hidden -translate-y-1/2 text-6xl md:text-6xl font-semibold text-[#CABDBB] z-10 md:z-10"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Book an appointment button */}
          <div
            className="group flex overflow-hidden items-center justify-center -mt-10 gap-2 text-lg text-[#FD520F] border-2 border-[#FD520F] w-64 p-2 rounded-xl cursor-pointer transition-all  hover:bg-[#FD520F]/10"
            onClick={handleBookNow}
          >
            <span
              className="transition-colors group-hover:text-[#CABDBB]"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            >
              Book an appointment
            </span>
            <IoArrowForwardCircleOutline className="text-xl" />
          </div>

          {/* Scroll to Elements button: appears, fades, and loops */}
          <div
  onClick={handleScrollWithPop}
  className="group flex items-center justify-center mt-4 gap-2 text-lg text-[#FD520F]  overflow-hidden  w-64 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#FD520F]/10"
>
  <span
    className="transition-colors group-hover:text-[#CABDBB]"
    style={{ fontFamily: "'Afacad', sans-serif" }}
  >
    
  </span>
  <FaRegArrowAltCircleDown size={30} className="text-xl" />
</div>
        </div>

        <Footer height={heightNavbar} margin={marginT} />
      </div>

      {/* Wrapped ElementsPage in a div with id */}
      <div id="elements-section">
        <ElementsPage />
      </div>
    </>
  );
};

export default App;
