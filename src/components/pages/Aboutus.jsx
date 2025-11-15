import React from "react";
import InfoCard from "./InfoCard";
import Header from "./Header";
const AboutCards = () => {
  return (
  <>
  <Header />
    <div className="flex justify-center gap-10 ">

      {/* Vision */}
      <InfoCard title="Our Vision">
        We started <span className="text-orange-500 font-semibold">Custom Graphics</span> 
        with one simple goal — to turn ideas into visuals that actually connect.
        Whether it’s a simple design or a complex development, we believe great
        solutions speak louder than words.
      </InfoCard>

      {/* Process */}
      <InfoCard title="Our Process">
        From clear documentation to set timelines and honest updates — our process
        is built for trust. You’ll always know what’s happening, when, and why.  
        <span className="text-orange-500 font-semibold"> Smooth, structured, and stress-free.</span>
      </InfoCard>

      {/* Brand */}
      <InfoCard title="Our Brand">
        Custom Graphics started with a passion for creating unique solutions and a
        belief in doing things our way. We’ve grown through 
        <span className="text-orange-500 font-semibold"> trust, creativity, and a commitment</span>
        to keeping every idea original and personal.
      </InfoCard>

    </div>
     <div
          className="font-bold ml-30 text-transparent overflow-hidden whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 18vw, 20rem)',
            lineHeight: '0.75',
            WebkitTextStroke: '1px #FD520F',
            textStroke: '1px #FD520F'
          }}
        >
          About us        </div>
    </>
  );
};

export default AboutCards;
