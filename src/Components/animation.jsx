import React from "react";
import { useState, useEffect } from "react";
export const Animation = () => {
  const words = [
    "PROJECT LEADER",
    "DESIGNER & DEVELOPER",
    "UI & UX SPECIALIST",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // Control fade-in and fade-out

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out current word
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        setFadeIn(true); // Fade in new word
      }, 1000); // Wait for fade-out to finish before switching words
    }, 2000); // Change word every 4 seconds (including fade-in/fade-out)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <>
      <div className="fade-in-out-container animation">
        <div
          className={`fade-text ${
            fadeIn ? "fade-in" : "fade-out"
          } text-white text-[32px]`}
        >
          {words[currentIndex]}
        </div>
      </div>
    </>
  );
};
