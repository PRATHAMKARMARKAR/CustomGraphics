import React from "react";

const AboutUsSection = () => {
  return (
    <>
      <div className="main h-screen w-full">
        <section className="bg-white text-gray-700 py-20 px-10 md:px-24 font-sans relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start gap-14 md:gap-10">
            {/* OUR VISION */}
            <div className="relative max-w-sm  group">
              {/* Outer Frame */}
              <div className="absolute -top-2 -left-2 w-full h-full border border-orange-500 transform -rotate-3"></div>
              {/* Inner Frame */}
              <div className="absolute top-1 left-1 w-full h-full border border-gray-400 transform rotate-6"></div>
              {/* Content Box */}
              <div className="relative bg-white p-6 border border-orange-500 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-500 mb-3 flex items-center">
                  Our Vision <span className="ml-1">↗</span>
                </h2>
                <p className="leading-relaxed text-gray-600">
                  We started{" "}
                  <span className="text-orange-500 font-medium">
                    Custom Graphics
                  </span>{" "}
                  with one simple goal — to turn ideas into visuals that
                  actually connect. Whether it’s a simple design or a complex
                  development, we believe great solutions speak louder than
                  words.
                </p>
              </div>
            </div>

            {/* OUR PROCESS */}
            <div className="relative max-w-sm group">
              {/* Outer Frame (Orange) */}
              <div className="absolute -top-2 -left-2 w-full h-full border border-orange-500 transform -rotate-2"></div>
              {/* Second Frame (Blue) */}
              <div className="absolute top-2 left-2 w-full h-full border border-blue-500 transform rotate-2"></div>
              {/* Content Box */}
              <div className="relative bg-white p-6 border border-orange-500 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-500 mb-3 flex items-center">
                  Our Process <span className="ml-1">↗</span>
                </h2>
                <p className="leading-relaxed text-gray-600">
                  From clear documentation to set timelines and honest updates —
                  our process is built for trust. You’ll always know what’s
                  happening, when, and why.{" "}
                  <span className="text-orange-500 font-semibold">
                    Smooth, structured, and stress-free.
                  </span>
                </p>
              </div>
            </div>

            {/* OUR BRAND */}
            <div className="relative max-w-sm group">
              {/* Outer Frame */}
              <div className="absolute -top-2 -left-2 w-full h-full border border-orange-500 transform -rotate-3"></div>
              {/* Inner Frame */}
              <div className="absolute top-1 left-1 w-full h-full border border-gray-300 transform rotate-1"></div>
              {/* Content Box */}
              <div className="relative bg-white p-6 border border-orange-500 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-500 mb-3 flex items-center">
                  Our Brand <span className="ml-1">↗</span>
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Custom Graphics started with a passion for creating unique
                  solutions and a belief in doing things our way. We've grown
                  through{" "}
                  <span className="text-orange-500 font-semibold">
                    trust, creativity, and a commitment
                  </span>{" "}
                  to keeping every idea original and personal.
                </p>
              </div>
            </div>
          </div>

          {/* ABOUT US OUTLINE TEXT */}
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] md:text-[10vw] font-bold text-transparent stroke-orange-500 select-none opacity-20 pointer-events-none">
            About us
          </h1>
        </section>
        <div className="main h-96 w-80 flex justify-center items-center relative">
        <div
          className="relative w-52 h-62 border-2 border-amber-600 shadow-lg"
          style={{
            transform: "rotateX(30deg) rotateY(20deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Inner Frame (Larger + Outside Position) */}
          

          {/* Background Layer */}
          <div className="absolute inset-0 bg-white opacity-70 rounded-sm"></div>
        </div><div
            className="absolute border-2 w-52 h-62  ml-10 mt-10 border-gray-400"
            style={{
              
             
              transform: "rotateX(30deg) rotateY(18deg)",
            }}
          ></div></div>
      </div>
    </>
  );
};

export default AboutUsSection;
