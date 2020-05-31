import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";

import Navbar from "./components/Navbar/Navbar.component";

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
      </Switch>
    </main>
    <footer className="footer">
      © 2020 Nour Balaha
    </footer>
    </div>
  );
}

export default App;
