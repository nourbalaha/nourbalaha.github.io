import React from 'react'

import './Footer.style.scss'

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-item-container">
          <span className="footer-item"><i class="fa fa-envelope"></i></span>
          <span className="footer-item"><i class="fa fa-linkedin"></i></span>
          <span className="footer-item"><i class="fa fa-twitter"></i></span>
          <span className="footer-item"><i class="fa fa-github"></i></span>
        </div>
        <span>© 2020 Nour Balaha</span>
        </footer>
    )
}
