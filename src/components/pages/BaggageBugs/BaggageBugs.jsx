import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import arrowUp from '../../../assets/arrowUp.png';
import BaggageBugsView1 from './BaggageBugsView1';
import BaggageBugsView2 from './BaggageBugsView2';

const BaggageBugs = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowClick = () => {
    // toggle local view
    setCurrentView(prev => (prev === 0 ? 1 : 0));


    // debug
    console.log('Arrow clicked — currentView toggled, navigate called');
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
            key="view-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-4 py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <BaggageBugsView2 />
          </motion.div>
        ) : (
          <motion.div
            key="view-1"
                // onClick={handleArrowClick}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <BaggageBugsView1 />
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

        {/* simplified absolute placement to avoid conflicting left/right */}
        <button
          onClick={handleArrowClick}
          className="absolute top-[137px] left-[13%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Toggle project view / go to baggagebugs page"
        >
          <img src={arrowUp} style={arrowStyle} alt="Toggle view" />
        </button>
      </div>
    </div>
  );
};

export default BaggageBugs;
