import React, { useState, useEffect, useRef } from "react";
import { FaLaptop, FaLocationArrow, FaLink } from "react-icons/fa";
import "./WhatIDoSection.css";
const WhatIDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const whatIDoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <div className="bg-[#1a1a1a] h-auto" ref={whatIDoRef}>
      <div className="p-5 md:p-10 lg:p-20 largerscreen">
        <div
          className={`text-center text-white text-2xl ${
            isVisible ? "animated slideInDown" : ""
          }`}
        >
          <h2 className="font-bold text-[30px] mt-[20px] mb-[10px] heading text-white">
            WHAT I Do
          </h2>
        </div>
        <div
          className={`flex flex-col  sm:text-center md:flex-row md:gap-[25px] md:ml-[40px] md:flex-wrap md:justify-center lg:flex-nowrap lg:ml-[1px]   ${
            isVisible ? "animated fadeInUp" : ""
          }`}
        >
          <div className="flex items-start mb-10 md:mb-0">
            <div className="circle">
              <FaLaptop className="icon-link" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[20px] text-white">
                Full-Stack Development
              </h3>
              <p className="text-[#999] text-[16px] font-semibold w-[260px] md:w-[250px] lg:w-[360px]">
                I design and develop both the front-end and back-end of web
                applications. From user-friendly interfaces and writing
                server-side code, I handle all aspects of web development like
                React, Next.js.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10 md:mb-0">
            <div className="circle">
              <FaLocationArrow className="icon-link" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[20px] text-white">
                Mobile Application Development
              </h3>
              <p className="text-[#999] text-[16px] font-semibold w-[260px] md:w-[300px] lg:w-[350px]">
                I specialize in creating high-performance, cross-platform mobile
                applications using React Native. This allows me to develop apps
                that work seamlessly on both iOS and Android platforms.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10 md:mb-0">
            <div className="circle">
              <FaLink className="icon-link" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[20px] text-white">
                Problem Solving & Algorithm Design
              </h3>
              <p className="text-[#999] text-[16px] font-semibold w-[260px] md:w-[300px] lg:w-[270px]">
                I enjoy tackling complex problems and writing optimized
                algorithms to improve performance and deliver faster, more
                reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
