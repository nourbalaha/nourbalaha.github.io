import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './fonts/NeoSansPro-Regular.ttf'
import './fonts/Raleway-Regular.ttf'
import './fonts/ProximaNova-Regular.otf'

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);