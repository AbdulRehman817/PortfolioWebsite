import React from "react";
import "./App.css";
import Contact from "./pages/contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";
import WhatIDo from "./Components/WhatIDo";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <WhatIDo />

      <About />
      <Projects />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
