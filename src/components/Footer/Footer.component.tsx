import "./Footer.style.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-item-container">
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
      <span>© 2023 Nour Balaha</span>
    </footer>
  );
}

export default Footer;