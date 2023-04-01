import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About/About.page";
import Experience from "./pages/Experience/Experience.page";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
