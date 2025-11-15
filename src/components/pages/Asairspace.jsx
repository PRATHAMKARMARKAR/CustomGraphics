import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../../common/ProjectCard";
import ASTshirt1 from "../../assets/ASTshirt1.png";
import Header from "../pages/Header";
import arrowUp from "../../assets/arrowUp.png";
import VISITOR from "../../assets/VISITOR.png";
import ASLogo from "../../assets/ASLogo.png";
import ASNotebookDesign from "../../assets/ASNotebookDesign.png";
// import MatriMOView1 from "./MatriMOView1"; // <-- uncomment if this file exists
import loginButtonImage from "../../assets/loginButton.svg";
import SubmitButtonImage from "../../assets/Submit.svg";
import slider from "../../assets/Slicer.svg";
import footerPanel from "../../assets/FooterPanel.svg";
import dropdownRealtion from "../../assets/DropdownRelationInviteBox.svg";
import dropdownExpanded from "../../assets/DropdownExpanded.svg";
import loginPage from "../../assets/Login.svg";
import registerPage from "../../assets/Register.svg";
import profilePage from "../../assets/ProfilePagePage2.svg";
import homePage from "../../assets/HomePage.svg";
import userProfilePage from "../../assets/UserProfilePage.svg";
import ASMugDesign from "../../assets/ASMugDesign.png";
const MatriMO = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleArrowClick = () => {
    setCurrentView((prev) => (prev === 0 ? 1 : 0));
  };

  const arrowStyle = {
    height: "50px",
    transform: currentView === 1 ? "rotate(0deg)" : "rotate(180deg)",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="h-screen bg-white font-['Afacad'] flex flex-col overflow-hidden">
      <Header />
      <motion.div
        key="main-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full mx-auto px-4 py-4 flex flex-col md:max-w-[95%] lg:max-w-[98%]"
      >
        <div className="grid grid-cols-1  md:grid-cols-12 gap-4 h-full">
          <div className="md:col-span-7 border-2 w-[1385px] border-orange-500 rounded-lg bg-white h-[250px]">
            <div className="h-full grid grid-cols-12">
              <div className="col-span-10 p-2 flex  overflow-hidden -mt-10 relative">
                <img
                  src={ASTshirt1}
                  alt="AST T-shirt 1"
                  className=" mt-10 h-[300px]  ml-10 w-[1700px]  object-cover relative "
                  //  className="absolute -top-8 left-2.5 w-full h-[80%] object-cover z-20"
                />

                <img
                  src={ASNotebookDesign}
                  alt="AS Notebook"
                  className="w-full h-[300px] ml-30 object-contain relative z-10"
                />
                <img
                  src={ASMugDesign}
                  alt="AS Notebook"
                  className="w-full h-[300px] -ml-10 object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-5 top-64 right-207.5 relative h-[200px]">
            <ProjectCard
              className="w-full h-full"
              titleText="Design Management for AS Airspace Travels"
              // onClick={() => navigate('/project/aispace')}
              borderTextPosition={windowWidth >= 1200 ? ["top", "bottom"] : []}
              variant="outline"
            />

            <p className="w-full text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-500">
              Logo <span className="text-orange-500 mx-2">›</span> Corporate
              Supplies <span className="text-orange-500 mx-2">›</span> T-shirts
            </p>
          </div>
          <div className="border-2  border-orange-500 ml-150 -mt-5  rounded-lg    bg-white shadow-sm w-196 h-[200px]">
            <p className="text-center overflow-hidden text-lg flex  font-semibold text-orange-600">
              <img
                src={VISITOR}
                alt="AS Notebook"
                className="w-full h-[200px] ml-30 object-contain relative z-10"
              />
              <img
                src={ASLogo}
                alt="AS Notebook"
                className="w-full h-[200px] -ml-10 object-contain relative z-10"
              />
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 ml-4 sm:mt-6 w-full overflow-hidden relative flex justify-center">
        <div
          className="font-bold text-transparent overflow-hidden whitespace-nowrap"
          style={{
            fontSize: "clamp(4rem, 18vw, 20rem)",
            lineHeight: "0.75",
            WebkitTextStroke: "2px #FD520F",
            textStroke: "1px #FD520F",
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
            cursor: "pointer",
          }}
          className="absolute overflow-hidden top-1/2 left-[13%] transform -translate-x-1/2 -translate-y-1/2"
          aria-label="Toggle project view"
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
