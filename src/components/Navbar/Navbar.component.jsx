import React from 'react';

import "./Navbar.style.scss";

import logo from "../../assets/Logo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
          <img className="nav-img" src={logo} alt="logo" />
          <div className="nav-item-container">
            <span className="nav-item">about</span>
            <span className="nav-item">protfolio</span>
            <span className="nav-item">contact</span>
          </div>
        </nav>
    )
}
