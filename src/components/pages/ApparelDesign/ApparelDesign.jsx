import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../../../common/ProjectCard";
import Header from "../Header";
import arrowUp from '../../../assets/arrowUp.png';
import ApparelDesignView1 from "./ApparelDesignView1";
import ApparelDesignView2 from "./ApparelDesignView2";

const ApparelDesign = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentView, setCurrentView] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowClick = () => {
    setCurrentView(currentView === 0 ? 1 : 0);
  };
  const arrowStyle = {
    height: '50px',
    transform: currentView === 1 ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div className="h-screen bg-white font-['Afacad'] flex flex-col overflow-hidden">
      <Header />
      <AnimatePresence mode="wait">
        {currentView === 0 ? (
            <motion.div
                key="main-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full mx-auto px-4 py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
                >
                <ApparelDesignView1 />
            </motion.div>
        ) : (
          <motion.div
            key="apparel-design-view2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <ApparelDesignView2 />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-4 ml-4 sm:mt-6 w-full overflow-hidden relative flex justify-center">
        <div
          className="font-bold text-transparent overflow-hidden whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 18vw, 20rem)',
            lineHeight: '0.75',
            WebkitTextStroke: '2px #FD520F',
            textStroke: '1px #FD520F'
          }}
        >
          OurProJects
        </div>
        <button
          onClick={handleArrowClick}
          style={{
            right: "635px",
            left: "auto",
            top: "137px",
            cursor: 'pointer'
          }}
          className="absolute overflow-hidden top-1/2 left-[13%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={arrowUp}
            style={arrowStyle}
            alt={currentView === 1 ? "Go to start" : "Go to next view"}
          />
        </button>
      </div>
    </div>
  );
};

export default ApparelDesign;
