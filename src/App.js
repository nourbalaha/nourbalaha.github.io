import React from 'react';
import './App.scss';
import { Switch, Route } from "react-router-dom";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Contact from "./pages/Contact/Contact.page";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main">
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
    <Footer />
    </div>
  );
}

export default App;
