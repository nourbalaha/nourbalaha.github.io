import React from "react";

import "./Footer.style.scss";

export default function Footer() {
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = "nourbalaha0@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("email has been copied to the clipboard");
  };

  return (
    <footer className="footer">
      <div className="footer-item-container">
        <span className="footer-item" onClick={copyToClipboard}>
          <i className="fa fa-envelope"></i>
        </span>
        <span
          className="footer-item"
          onClick={() =>
            window.open("https://www.linkedin.com/in/nourbalaha0/", "_blank")
          }
        >
          <i className="fa fa-linkedin"></i>
        </span>
        <span
          className="footer-item"
          onClick={() =>
            window.open("https://twitter.com/NourBalaha", "_blank")
          }
        >
          <i className="fa fa-twitter"></i>
        </span>
        <span
          className="footer-item"
          onClick={() => window.open("https://github.com/nourbalaha", "_blank")}
        >
          <i className="fa fa-github"></i>
        </span>
      </div>
      <span>© 2022 Nour Balaha</span>
    </footer>
  );
}
