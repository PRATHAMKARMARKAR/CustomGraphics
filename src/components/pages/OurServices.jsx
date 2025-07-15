import React, { useState } from 'react';
import Header from './Header';

const cardImages = [
  { back: '/FlipcardB.svg',front: '/Flipcard1.svg' },
  { back: '/FlipcardB.svg', front: '/Flipcard2.svg' },
  { back: '/FlipcardB.svg', front: '/Flipcard3.svg' },
  { back: '/FlipcardB.svg', front: '/Flipcard4.svg' },
];

const OurServices = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

  const handleCardClick = (index) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
  };

  return (
    <>
      <div className="main h-screen w-full">
        <Header />
        <div className="stringOurServices overflow-hidden -mt-20 -ml-20">
          <div className="flex justify-center items-center mt-14 h-full gap-4">
            {cardImages.map((card, index) => (
              <div
                key={index}
                className="card transition-transform duration-500 cursor-pointer w-40 h-60 rounded-lg bg-cover bg-center"
                style={{
                  transform: flippedCards[index] ? 'scaleX(-1)' : 'scaleX(1)',
                  backgroundImage: `url("${flippedCards[index] ? card.back : card.front}")`,
                //   backgroundColor:'white'
                }}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
