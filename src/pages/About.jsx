"use client";
import React, { useState, useRef, useEffect } from "react";
import Progressloader from "../Components/Progressloader";
import "./about.css";

const About = () => {
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
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
    <div id="about" ref={whatIDoRef}>
      <div className="bg-black pt-20 aboutHeading">
        <h2
          className={` text-white font-bold text-[30px] ml-[30px] mt-[20px] ${
            isVisible ? "animated fadeInLeft" : ""
          }`}
        >
          ABOUT ME
        </h2>
        <div className="flex-container">
          <div
            className={`ml-[30px] ${isVisible ? "animated fadeInLeft" : ""}`}
          >
            <h3 className="text-[#D43F52] text-[16px] font-bold pt-[15px] pb-[15px]">
              DESIGNER & DEVELOPER
            </h3>
            <p className="text-[#999] about-text">
              Hello! I’m Abdul Rehman, a passionate software engineer dedicated
              to crafting innovative and efficient software solutions. With a
              strong foundation in computer science, I have developed a keen
              interest in full-stack development, focusing on creating
              user-friendly applications that meet real-world needs. I am
              proficient in JavaScript, React, and Node.js, and I thrive in
              fast-paced environments where I can collaborate with
              cross-functional teams. When I’m not coding, I enjoy exploring new
              technologies, participating in hackathons, and contributing to
              open-source projects. I believe that continuous learning is key to
              success in the tech industry, and I actively seek opportunities to
              expand my knowledge and skill set.
            </p>
          </div>
          <div className="skills-container   md:ml-[30px] md:flex-row lg:flex-row lg:mr-20">
            <h1 className="mb-[24px] text-[30px]"> Skills</h1>
            <div className="w-[250px] loader">
              <Progressloader label="Web Design" percentage={95} />
              <Progressloader label="Mobile Apps" percentage={80} />
              <Progressloader label="SEO Stuffs" percentage={70} />
              <Progressloader label="HTML5 & CSS3" percentage={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
