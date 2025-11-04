import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../../../common/ProjectCard";
import Header from "../Header";
import arrowUp from '../../../assets/arrowUp.png';
import MatriMOView1 from "./MatriMOView1";
import loginButtonImage from '../../../assets/loginButton.svg';
import SubmitButtonImage from '../../../assets/Submit.svg';
import slider from '../../../assets/Slicer.svg';
import footerPanel from '../../../assets/FooterPanel.svg';
import dropdownRealtion from '../../../assets/DropdownRelationInviteBox.svg';
import dropdownExpanded from '../../../assets/DropdownExpanded.svg';
import loginPage from '../../../assets/Login.svg';
import registerPage from '../../../assets/Register.svg';
import profilePage from    '../../../assets/ProfilePagePage2.svg';
import homePage from '../../../assets/HomePage.svg';
import userProfilePage from '../../../assets/UserProfilePage.svg';


const MatriMO = () => {
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 h-full">
                    <div className="md:col-span-7 border-2 border-orange-500 rounded-lg bg-white h-[200px]">
                        <div className='col-span-12 grid grid-cols-12'>
                            <div className='col-span-7 p-4 flex flex-col gap-4 mt-4'>
                                <img 
                                src={loginButtonImage}
                                alt='login button'
                                className='w-full h-[30px] object-contain'
                                />
                                <img 
                                src={SubmitButtonImage}
                                alt='submit button'
                                className='w-full h-[30px] object-contain'
                                />
                                <img 
                                src={slider}
                                alt='slider'
                                className='w-full h-[30px] object-contain'
                                />
                            </div>
                            <div className='col-span-5'>
                                <img
                                src={footerPanel}
                                alt='footer panel'
                                className='w-full h-[190px] object-contain'
                                />

                            </div>

                        </div>

                    </div>
                    <div className="md:col-span-5  relative h-[200px]">
                        <ProjectCard
                            className="w-full min-h-[200px] "
                            titleText="MatriMO"
                            borderTextPosition={windowWidth >= 1200 ? ["left", "right"] : []}
                            variant="outline"
                            showArrow={false}
                        />
                        <p className='w-full text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-500'>Community Based Matromony Application</p>
                    </div>
                    <div className='md:col-span-12 h-[180px] relative' style={{ overflow: 'visible' }}>
                    <div className='w-full h-full border-2 border-orange-500 rounded-lg bg-white'></div>
                    
                    <div className="flex flex-col gap-2 absolute left-[21%] top-1/2 transform -translate-x-full -translate-y-1/2 pr-4" style={{ zIndex: 10 }}>
                        <img src={dropdownRealtion} alt='Dropdown Relation Invite Box' className='h-[140px] w-auto object-contain object-left' />
                        <img src={dropdownExpanded} alt='Dropdown Expanded' className='h-[110px] w-auto   object-contain' />
                    </div>
                    
                    <div className='absolute right-16 top-1/2 transform -translate-y-1/2 flex items-center gap-6' style={{ zIndex: 5 }}>
                        <div className='border-2 border-orange-500 rounded-lg p-1 bg-white shadow-md' style={{ height: '220px' }}>
                            <img src={loginPage} alt='Login Page' className='h-full w-auto object-contain' />
                        </div>
                        <div className='border-2 border-orange-500 rounded-lg p-1 bg-white shadow-md' style={{ height: '220px' }}>
                            <img src={registerPage} alt='Register Page' className='h-full w-auto object-contain' />
                        </div>
                        <div className='border-2 border-orange-500 rounded-lg p-1 bg-white shadow-md' style={{ height: '220px' }}>
                            <img src={profilePage} alt='Profile Page' className='h-full w-auto object-contain' />
                        </div>
                        <div className='border-2 border-orange-500 rounded-lg p-1 bg-white shadow-md' style={{ height: '220px' }}>
                            <img src={homePage} alt='Home Page' className='h-full w-auto object-contain' />
                        </div>
                        <div className='border-2 border-orange-500 rounded-lg p-1 bg-white shadow-md' style={{ height: '220px' }}>
                            <img src={userProfilePage} alt='User Profile Page' className='h-full w-auto object-contain' />
                        </div>
                    </div>
                </div>
                </div>
            </motion.div>
        ) : (
          <motion.div
            key="matrimo-view1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
          >
            <MatriMOView1 />
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

export default MatriMO;
