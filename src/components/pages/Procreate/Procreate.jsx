import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../../../common/ProjectCard";
import Header from "../Header";
import skateboard from '../../../assets/skateboard.svg';
import helmet from '../../../assets/helmet.svg';
import arrowUp from '../../../assets/arrowUp.png'; // your upward arrow png
import ProcreateView1 from "../Procreate/ProcreateView1";
import ProcreateView2 from "../Procreate/ProcreateView2";

const Procreate = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showProcreate, setShowProcreate] = useState(false);
  const [currentView, setCurrentView] = useState(0); // 0: main, 1: view1, 2: view2

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowClick = () => {
    // Cycle through views: main -> view1 -> view2 -> main
    if (currentView === 0) {
      setCurrentView(1);
      setShowProcreate(true);
    } else if (currentView === 1) {
      setCurrentView(2);
    } else if (currentView === 2) {
      setCurrentView(0);
      setShowProcreate(false);
    }
  };

  return (
    <div className="h-screen bg-white font-['Afacad'] flex flex-col overflow-hidden">
      <Header />

      {/* Animate switch between Projects content and ProcreateViews */}
      <AnimatePresence mode="wait">
        {currentView === 0 ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 -mb-2 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            {/* ---- Projects Mid Content ---- */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4">
              <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-4">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4">
                  <div className="md:col-span-5">
                    <ProjectCard
                      className="w-full h-full min-h-[120px] sm:min-h-[150px] md:min-h-[180px]"
                      titleText="Procreate"
                      borderTextPosition={windowWidth >= 1200 ? ["top", "bottom"] : []}
                      variant="outline"
                    />
                  </div>
                  <div className="relative md:col-span-7 flex flex-col gap-2 sm:gap-4">
                    <div className="flex-1 min-h-[120px]">
                      <ProjectCard
                        className="w-full h-full"
                        titleText=""
                        variant="outline"
                        showArrow={false}
                      />
                    </div>
                    <div className="flex-1 min-h-[120px]">
                      <ProjectCard
                        className="w-full h-full"
                        titleText=""
                        variant="outline"
                        showArrow={false}
                      />
                    </div>
                    <img
                      className="absolute w-4/12 -top-10 h-full object-contain rotate-[11deg] z-10 pointer-events-none"
                      src={skateboard}
                      alt="Skateboard"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-2 sm:gap-4 mt-4 lg:mt-10">
                <div className="flex-1 min-h-[120px] sm:min-h-[150px] relative">
                  <ProjectCard
                    className="w-full h-3/4"
                    titleText=""
                    variant="outline"
                    showArrow={false}
                  />
                  <img
                    className="absolute w-1/5 -top-8 right-8 h-full object-contain z-10 pointer-events-none"
                    src={helmet}
                    alt="Helmet"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-2 min-h-[120px] max-h-[120px]">
                <ProjectCard
                  className="w-full h-full"
                  titleText=""
                  variant="outline"
                  showArrow={false}
                />
              </div>
              <div className="col-span-10 min-h-[120px] max-h-[120px]">
                <ProjectCard
                  className="w-full h-full"
                  titleText=""
                  variant="outline"
                  showArrow={false}
                />
              </div>
            </div>
          </motion.div>
        ) : currentView === 1 ? (
          <motion.div
            key="procreate-view1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <ProcreateView1 />
          </motion.div>
        ) : (
          <motion.div
            key="procreate-view2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <ProcreateView2 />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Footer with Arrow ---- */}
      <div className= " mt-4 ml-4 sm:mt-6 w-full overflow-hidden relative flex justify-center">
        <div
          className="font-bold text-transparent overflow-hidden whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 18vw, 20rem)',
            lineHeight: '0.75',
            WebkitTextStroke: '2px #FD520F',
            textStroke: '1px #FD520F'
          }}
        >
          Our ProJects
        </div>
        <button
          onClick={handleArrowClick}
          style={{
            right: "635px",
            left: "auto",
            top: "137px",
            cursor: 'pointer'
          }}
          className="absolute top-1/2 left-[13%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={arrowUp}
            style={{ height: '50px' }}
            alt="Go to Procreate"
          />
        </button>
      </div>
    </div>
  );
};

export default Procreate;
