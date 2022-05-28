import React from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Contact from "./pages/Contact/Contact.page";
import Experience from "./pages/Experience/Experience.page";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

import { particlesOptions } from "./config/particles-options"

function App() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="app">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles"
        options={particlesOptions}
      />
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
