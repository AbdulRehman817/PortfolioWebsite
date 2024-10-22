import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling handler
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-brand text-[#d43f52]">ARehman</div>

      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a onClick={() => scrollToSection("home")}>
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection("about")}>
            <FaUser className="icon" /> About
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>
            <FaFolder className="icon" /> Projects
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>
            <FaEnvelope className="icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
