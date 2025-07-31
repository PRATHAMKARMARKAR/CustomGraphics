import React, { useState } from "react";
import Header from "./Header";
import Footer from "../OURFooter";

const cardImages = [
  { front: "/Flipcard1.svg", back: "/Flipcard1.svg" },
  { front: "/Flipcard1.svg", back: "/Flipcard1.svg" },
  { front: "/Flipcard1.svg", back: "/Flipcard1.svg" },
  { front: "/Flipcard1.svg", back: "/Flipcard1.svg" },
];

const OurServices = () => {
  const [flippedIndex, setFlippedIndex] = useState(null); // track which card is flipped

  const handleCardClick = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const heightNavbar = 20;
  const marginT = 0;

  return (
    <>
      <div className="main h-screen w-full">
        <Header />
        <div className="nav flex">
          <div className="stringone ml-22 "></div>
          <div className="stringtwo ml-50 "></div>
          <div className="stringthree ml-70 "></div>
        </div>
        <div className="flex justify-center items-center h-150 -mt-42 space-x-30">
          {/* Card 1 */}
          <div
            className="card transition-transform bg-white duration-500 cursor-pointer  h-60 rounded-lg bg-cover bg-center"
            style={{
              transform: flippedIndex === 0 ? "scaleX(-1)" : "scaleX(1)",
              backgroundImage: `url("${
                flippedIndex === 0 ? cardImages[0].back : cardImages[0].front
              }")`,
            }}
          >
            <div
              className="text text-center mt-30 text-3xl"
              style={{
                fontFamily: "'Afacad', Helvetica",
                transform: flippedIndex === 0 ? "scaleX(-1)" : "scaleX(1)",
                color: flippedIndex === 0 ? "#808080" : "#FD520F", // grey for back, orange for front
              }}
            >
              {flippedIndex === 0 ? "WEB" : "DEV"}
            </div>
            <div
              className="flipbutton ml-40 mt-16"
              onClick={() => handleCardClick(0)}
              style={{ transform: flippedIndex === 0 ? "scaleX(-1)" : "scaleX(1)" }}
            ></div>
          </div>

          {/* Card 2 */}
          <div
            className="card transition-transform duration-500 cursor-pointer w-40 h-60 rounded-lg bg-cover bg-center"
            style={{
              transform: flippedIndex === 1 ? "scaleX(-1)" : "scaleX(1)",
              backgroundImage: `url("${
                flippedIndex === 1 ? cardImages[1].back : cardImages[1].front
              }")`,
            }}
          >
            <div
              className="text text-center   mt-30 text-3xl"
              style={{
                fontFamily: "'Afacad', Helvetica",
                transform: flippedIndex === 1 ? "scaleX(-1)" : "scaleX(1)",
                color: flippedIndex === 1 ? "#808080" : "#FD520F",
              }}
            >
              {flippedIndex === 1 ? "UX" : "DESIGN"}
            </div>
            <div
              className="flipbutton ml-40 mt-16"
              onClick={() => handleCardClick(1)}
              style={{ transform: flippedIndex === 1 ? "scaleX(-1)" : "scaleX(1)" }}
            ></div>
          </div>

          {/* Card 3 */}
          <div
            className="card transition-transform duration-500 cursor-pointer w-40 h-60 rounded-lg bg-cover bg-center"
            style={{
              transform: flippedIndex === 2 ? "scaleX(-1)" : "scaleX(1)",
              backgroundImage: `url("${
                flippedIndex === 2 ? cardImages[2].back : cardImages[2].front
              }")`,
            }}
          >
            <div
              className="text text-center mt-30 text-3xl"
              style={{
                fontFamily: "'Afacad', Helvetica",
                transform: flippedIndex === 2 ? "scaleX(-1)" : "scaleX(1)",
                color: flippedIndex === 2 ? "#808080" : "#FD520F",
              }}
            >
              {flippedIndex === 2 ? "MOBILE" : "SOLUTIONS"}
            </div>
            <div
              className="flipbutton ml-40 mt-16"
              onClick={() => handleCardClick(2)}
              style={{ transform: flippedIndex === 2 ? "scaleX(-1)" : "scaleX(1)" }}
            ></div>
          </div>

          {/* Card 4 */}
          <div
            className="card transition-transform duration-500 cursor-pointer w-40 h-60 rounded-lg bg-cover bg-center"
            style={{
              transform: flippedIndex === 3 ? "scaleX(-1)" : "scaleX(1)",
              backgroundImage: `url("${
                flippedIndex === 3 ? cardImages[3].back : cardImages[3].front
              }")`,
            }}
          >
            <div
              className="text text-center mt-30 text-3xl"
              style={{
                fontFamily: "'Afacad', Helvetica",
                transform: flippedIndex === 3 ? "scaleX(-1)" : "scaleX(1)",
                color: flippedIndex === 3 ? "#808080" : "#FD520F",
              }}
            >
              {flippedIndex === 3 ? "DEV" : "PRODUCTS"}
            </div>
            <div
              className="flipbutton ml-40 mt-16"
              onClick={() => handleCardClick(3)}
              style={{ transform: flippedIndex === 3 ? "scaleX(-1)" : "scaleX(1)" }}
            ></div>
          </div>
        </div>

        <div className="stringOurServices2 overflow-hidden -mt-44 ml-5"></div>
      </div>
      <Footer height={heightNavbar} margin={marginT} />
    </>
  );
};

export default OurServices;
