//bc koi chhed mat dena ye componenet gaand faad dunga - prashant 
import { useState, useEffect } from 'react';
import { ProjectCard } from "../../../common/ProjectCard";
import Header from "../Header";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Afacad'] flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1 w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col  md:max-w-[95%] lg:max-w-[98%]">
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
                            <div className="md:col-span-7 flex flex-col gap-2 sm:gap-4">
                <div className="flex-1 min-h-[120px]">
                      <ProjectCard
                    className="w-full h-full"
                    titleText="Our Portfolio"
                    borderTextPosition={windowWidth >= 1200 ? ["top", "bottom"] : []}
                    variant="filled"
                  />
                </div>
                <div className="flex-1 min-h-[120px]">
                  <ProjectCard
                    className="w-full h-full"
                    titleText="Apparel Designs"
                    borderTextPosition={windowWidth >= 1200 ? ["left", "right"] : []}
                    variant="outline"
                  />
                </div>
              </div>
            </div>
            <div className="min-h-[80px] max-h-[120px]">
               <ProjectCard
                className="w-full h-full"
                titleText="Design Management for AS Airspace Travels"
                borderTextPosition={windowWidth >= 1200 ? ["bottom"] : []}
                variant="outline"
              />
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-2 sm:gap-4 mt-4 lg:mt-0">
            <div className="flex-1 min-h-[120px] sm:min-h-[150px]">
              <ProjectCard
                className="w-full h-full"
                titleText="MatriMO"
                borderTextPosition={windowWidth >= 1200 ? ["left", "right"] : []}
                variant="outline"
              />
            </div>
            <div className="flex-1 min-h-[150px] sm:min-h-[200px]">
              <ProjectCard
                className="w-full h-full"
                titleText="Baggage Bugs"
                borderTextPosition={windowWidth >= 1200 ? ["top", "bottom"] : []}
                variant="filled"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 ml-4 sm:mt-6 w-full overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;