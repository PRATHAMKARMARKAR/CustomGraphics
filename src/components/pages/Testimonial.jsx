// TestimonialsGrid.jsx
import React from "react";

/**
 * Replace these imports with your actual avatar image paths.
 * e.g.
 * import avatar1 from "../assets/avatar1.png";
 */
import avatar1 from "../../assets/Avatar1.png";
import avatar2 from "../../assets/Avatar2.png";
import avatar3 from "../../assets/Avatar3.png";
import avatar4 from "../../assets/Avatar4.png";
// import avatar5 from "../../assets/Avatar5.png";

const SpeechBubble = ({ title, text, className = "", align = "left" }) => {
  // align: "left" or "right" - controls the little tail
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="border-2 border-[#F28C6B] rounded-md bg-white p-4 text-gray-600 max-w-[300px] leading-relaxed"
        style={{ fontFamily: "'Afacad', ui-sans-serif, system-ui, sans-serif" }}
      >
        <div className="font-semibold text-[#F26B4B] mb-2">{title}</div>
        <div className="text-sm">{text}</div>
      </div>

      {/* bubble tail */}
      <div
        className={`absolute w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ${
          align === "left"
            ? "left-[16px] -bottom-6 border-r-[14px] border-r-[#F28C6B] border-l-0"
            : "right-[16px] -bottom-6 border-l-[14px] border-l-[#F28C6B] border-r-0"
        }`}
        style={{
          borderStyle: "solid",
          transform: align === "left" ? "translateY(0.5px)" : "translateY(0.5px)",
        }}
      />
      {/* small white inner triangle to mimic outlined bubble */}
      <div
        className={`absolute w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
          align === "left"
            ? "left-[19px] -bottom-5 border-r-[12px] border-r-white"
            : "right-[19px] -bottom-5 border-l-[12px] border-l-white"
        }`}
      />
    </div>
  );
};

const Avatar = ({ src, size = 120, outerBorder = true, className = "" }) => {
  const outer = outerBorder ? "ring-4 ring-white shadow-sm" : "";
  return (
    <div
      className={`rounded-full overflow-hidden bg-orange-400 inline-flex items-center justify-center ${outer} ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={src} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default function TestimonialsGrid() {
  return (
    <section className="relative w-full min-h-[760px] bg-white px-8 py-12">
      {/* Title / subtle background label (top-left) */}
      <h2 className="text-[#F26B4B] font-bold text-2xl mb-6">Testimonials</h2>

      {/* --- absolute positioned elements to match screenshot --- */}
      <div className="relative w-full h-[640px]">

        {/* Top-left speech bubble */}
        <div style={{ position: "absolute", left: 16, top: 8 }}>
          <SpeechBubble
            title="AS Airspace Travels"
            text="Leveled up our social media and design games over our competition, most legit agency to suggest someone"
            className=""
            align="left"
          />
        </div>

        {/* Top-left avatar below bubble */}
        <div style={{ position: "absolute", left: 40, top: 120 }}>
          <Avatar src={avatar1} size={120} />
        </div>

        {/* Top-center avatar */}
        <div style={{ position: "absolute", left: "40%", top: 36 }}>
          <Avatar src={avatar2} size={100} outerBorder={true} />
        </div>

        {/* Top-right avatar with bubble */}
        <div style={{ position: "absolute", right: 80, top: 60 }}>
          <Avatar src={avatar3} size={110} outerBorder={true} />
        </div>

        <div style={{ position: "absolute", right: 36, top: 26 }}>
          <SpeechBubble
            title="Baggage Bugs Team"
            text="After deployment management by the team was amazing"
            align="right"
          />
        </div>

        {/* Bottom-left avatar + bubble */}
        <div style={{ position: "absolute", left: 24, bottom: 200 }}>
          <Avatar src={avatar4} size={120} />
        </div>

        <div style={{ position: "absolute", left: 24, bottom: 92 }}>
          <SpeechBubble
            title="David_flo"
            text="Working with you was very nice. He had a lot of patience and was committed to fulfilling all my requests, fantastic job"
            align="left"
          />
        </div>

        {/* center bottom avatar with blue square (highlight) */}
        <div style={{ position: "absolute", left: "45%", bottom: 140 }}>
          <div
            className="rounded-md"
            style={{
              width: 140,
              height: 140,
              border: "4px solid #3b82f6", // blue highlight
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            
          </div>
        </div>

        {/* right-bottom speech bubble */}
        <div style={{ position: "absolute", right: 40, bottom: 120 }}>
          <SpeechBubble
            title="Daniele_fla"
            text="nice work! cares about satisfying his customers, recommended!"
            align="right"
          />
        </div>

        {/* small circular arrow on right middle */}
        <div style={{ position: "absolute", right: 28, top: "50%" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#F26B4B] text-[#F26B4B]">
            →
          </div>
        </div>
      </div>
    </section>
  );
}
