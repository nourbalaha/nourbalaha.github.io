import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.style.scss";

import logo from "../../assets/Logo.png";

const Navbar: FC<any> = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img
        className="nav-img"
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
      />
      <div className="nav-item-container">
        <span className="nav-item" onClick={() => navigate("/about")}>
          about
        </span>
        <span className="nav-item" onClick={() => navigate("/experience")}>
          experience
        </span>
        <span className="nav-item" onClick={() => navigate("/portfolio")}>
          protfolio
        </span>
        <span className="nav-item" onClick={() => navigate("/contact")}>
          contact
        </span>
        <a
          className="resume"
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          download
        >
          resume
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
