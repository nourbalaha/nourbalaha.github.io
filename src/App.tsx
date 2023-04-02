import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import About from "./pages/About/About.page";
import Experience from "./pages/Experience/Experience.page";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #B1B1B1;
`;