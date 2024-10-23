import React, { useRef, useEffect, useState } from "react";
import { Animation } from "../Components/animation";
import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false); // State for animation visibility
  const whatIDoRef = useRef(null); // Reference for the "WHAT I Do" section

  // Intersection Observer for "WHAT I Do" section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set to true when the section is in view
            observer.unobserve(entry.target); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (whatIDoRef.current) {
      observer.observe(whatIDoRef.current);
    }

    return () => {
      if (whatIDoRef.current) {
        observer.unobserve(whatIDoRef.current);
      }
    };
  }, []);

  return (
    <div id="home" ref={whatIDoRef}>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://templatemo.com/templates/templatemo_458_lavish/images/home-bg.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto p-4 sm:p-5 md:p-8 animated fadeIn">
            <h1 className="hero-title text-2xl sm:text-3xl sm:ml-20px md:text-4xl lg:text-5xl font-bold">
              Abdul Rehman
            </h1>
            <Animation className="animation" />
            <div className="my-6 sm:my-8 mx-auto text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl text-center">
              <p className="hero-description">
                I am a professional
                <span className="font-bold from-neutral-700 pl-1 pr-1">
                  UX Designer
                </span>
                and
                <span className="font-bold from-neutral-700 pl-1 pr-1">
                  Front-End Developer
                </span>
                creating modern and responsive designs for
                <span className="font-bold from-neutral-700 pl-1 pr-1">
                  Web
                </span>
                and
                <span className="font-bold from-neutral-700 pl-1 pr-1">
                  Mobile.
                </span>
                Let us work together. Thank you.
              </p>
            </div>
            <div className="animated fadeInUp">
              <a className="btn btn-default text-white p-3 sm:p-4 w-full sm:w-48 md:w-60 lg:w-48 mt-[20px] rounded-sm hover:bg-[#D43F52] hover:border-[#D43F52]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
