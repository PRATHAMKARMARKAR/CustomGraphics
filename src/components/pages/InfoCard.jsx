import React from "react";
import Header from "./Header";
const InfoCard = ({ title, children }) => {
  return (<>

    <div className="relative flex font-sans">
      <div className="relative mt-20 w-[360px] md:w-[500px] min-h-[440px] p-8 overflow-visible">

        {/* Gray Frame */}
        <div className="absolute inset-0 border-2 ml-10 mt-10 border-gray-400 
        transform rotate-[0.5deg] translate-x-[-6px] translate-y-[-6px] z-0"></div>

        {/* Orange Frame */}
        <div className="absolute inset-0 border-2 border-orange-500 
        transform rotate-[-2.5deg] w-100 h-100 translate-x-[8px] translate-y-[10px] z-[-1]"></div>

        {/* Content */}
        <div className="relative w-90 p-6 z-10 h-80">
          <h2 className="text-2xl font-bold text-orange-500 mb-3 flex items-center">
            {title} <span className="ml-1 text-orange-500 text-lg">↗</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default InfoCard;
