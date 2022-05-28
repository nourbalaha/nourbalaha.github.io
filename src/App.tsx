import React from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Particles from "react-particles-js";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Contact from "./pages/Contact/Contact.page";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  const particlesParams = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
  };

  return (
    <div className="app">
      <Particles
        className="particles"
        params={particlesParams}
      />
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
