import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./fonts/NeoSansPro-Regular.ttf";
import "./fonts/Raleway-Regular.ttf";
import "./fonts/ProximaNova-Regular.otf";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
