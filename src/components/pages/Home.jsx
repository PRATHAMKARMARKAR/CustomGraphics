import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const App = () => {
  const [index, setIndex] = useState(0);
  const heightNavbar = 25;
  const marginT = 65;
  const words = ["Solutions", "Products", "Content", "Architecture"];
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

  return (
    <div className="main h-screen w-full">
      <Navbar height={heightNavbar} />

      <div className="flex flex-col h-[55%] justify-center items-center gap-4 -mt-20">
        <div className="centerSection mt-10" />

        {/* Animated heading */}
        <div className="relative -mt-20 ml-36 h-60 flex items-center">
          <span
            className="text-7xl font-bold text-[#FD520F]"
            style={{ fontFamily: "'Afacad', Helvetica" }}
          >
            Custom
          </span>

          <div className="relative w-[26rem] h-full overflow-hidden ml-2">
            <div
              className="absolute left-0 bottom-[30%] h-1 w-1/2 bg-[#FD520F] rounded-sm z-0"
              style={{ fontFamily: "'Afacad', sans-serif" }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.span
                key={words[index]}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-6xl font-semibold text-[#CABDBB] z-10"
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

        {/* Book button */}
        <div
          className="cta flex items-center justify-center -mt-10 gap-2 text-lg text-[#FD520F] w-64 border-2 border-[#FD520F] p-2 rounded-xl cursor-pointer"
          onClick={handleBookNow}
        >
          Book an appointment
          <IoArrowForwardCircleOutline className="text-[#FD520F] text-xl" />
        </div>
      </div>

      <Footer height={heightNavbar} margin={marginT} />
    </div>
  );
};

export default App;
