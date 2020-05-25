import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <span>about</span>
          <span>protfolio</span>
        </nav>
      </header>
      <main className="main">
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </main>
    </div>
  );
}

export default App;
