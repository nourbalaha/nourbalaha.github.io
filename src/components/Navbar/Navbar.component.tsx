import { useNavigate } from "react-router-dom";

import "./Navbar.style.scss";

import logo from "../../assets/Logo.png";

const Navbar: React.FC = () => {
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
        <a
          className="resume"
          href={'/resume.pdf'}
          download
        >
          resume
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
