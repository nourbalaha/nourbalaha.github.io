import React from 'react';
import { withRouter } from "react-router-dom";

import "./Navbar.style.scss";

import logo from "../../assets/Logo.png";

function Navbar({ history }) {
    return (
        <nav className="navbar">
          <img className="nav-img" onClick={()=>history.push("/")} src={logo} alt="logo" />
          <div className="nav-item-container">
            <span className="nav-item" onClick={()=>history.push("/about")}>about</span>
            <span className="nav-item" onClick={()=>history.push("/portfolio")}>protfolio</span>
            <span className="nav-item" onClick={()=>history.push("/contact")}>contact</span>
          </div>
        </nav>
    )
}

export default withRouter(Navbar);
