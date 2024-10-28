"use client";
import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import React from "react";
import laptopBlog from "../images/laptopBlog.png";
import mememakerBlog from "../images/mememakerBlog.png";
import weatherApp from "../images/weatherapp.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import "./projects.css";

const Projects = () => {
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
    <>
      <div id="projects">
        <div className="container">
          <h1 className="title">
            My Recent <span className="highlight">Works</span>
          </h1>
          <p className="subtitle">
            Here are a few projects I've worked on recently.
          </p>
          <div className="projectsContainer animated fadeIn">
            {/* Card 1 */}
            <div className="projectCard">
              <div
                className={`precard ${isVisible ? "animated fadeInUp" : ""}`}
              >
                <img
                  src={laptopBlog}
                  alt="Blogging App"
                  width={600}
                  height={300}
                  className="projectImage"
                />
                <h2 className="text-center">Blogging App</h2>
                <p>
                  This Blogging App, developed with React, provides users with a
                  platform to create, edit, and publish blog posts seamlessly.
                  The app features a modern, responsive design that allows users
                  to view and manage blogs on any device. It includes a
                  rich-text editor, enabling writers to format their content
                  with headings, lists, images, and more. Users can organize
                  their blogs with categories or tags, making navigation and
                  content discovery easier. The app also supports real-time
                  previews, allowing authors to see how their blog posts will
                  look before publishing. This app offers a comprehensive yet
                  user-friendly blogging experience.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/AbdulRehman817/Blogging-Website-using-react-and-firebase"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="icons" /> GitHub
                  </a>
                  <a
                    href="https://fanciful-moxie-470400.netlify.app/"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="icons" /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="projectCard">
              <div
                className={`precard ${isVisible ? "animated fadeInUp" : ""}`}
              >
                <img
                  src={mememakerBlog}
                  alt="Fumicon Pesticides Control"
                  width={600}
                  height={300}
                  className="projectImage"
                />
                <h2 className="text-center">Meme Maker</h2>
                <p>
                  This Meme Maker app, built using Next js and TypeScript,
                  allows users to create and customize their own memes with
                  ease. The app features a simple and intuitive interface where
                  users can upload images, add custom text, and position it
                  anywhere on the image. It includes options to change the font
                  style, size, and color to ensure creative flexibility. With
                  real-time editing, users can see their meme come to life as
                  they make changes. The app is responsive, ensuring a smooth
                  experience across devices. Once completed, users can download
                  their memes and share them on social media.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/AbdulRehman817/Meme-Maker"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="icons" /> GitHub
                  </a>
                  <a
                    href="https://meme-maker-126d.vercel.app/"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="icons" /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="projectCard">
              <div
                className={`precard ${isVisible ? "animated fadeInUp" : ""}`}
              >
                <img
                  src={weatherApp}
                  alt="Weather App"
                  width={600}
                  height={300}
                  className="projectImage"
                />
                <h2 className="text-center">Weather App</h2>
                <p>
                  This weather app, built using JavaScript, provides real-time
                  weather updates for any location. Users can search by city
                  name to get the current temperature, weather conditions (like
                  clear skies, rain, or cloudy), humidity, and wind speed. The
                  app uses an API to fetch accurate weather data from a reliable
                  source and displays it in a clean, user-friendly interface.
                  The design is simple yet effective, focusing on delivering
                  essential weather information at a glance. With responsive
                  features, the app works seamlessly across devices, ensuring
                  users can check the weather on the go.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/AbdulRehman817/Weather-App"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="icons" /> GitHub
                  </a>
                  <a
                    href="https://weather-app-gules-alpha-61.vercel.app/"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="icons" /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
