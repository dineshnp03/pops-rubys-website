// Author: Dinesh Narasimhalu Punniyamoorthy
import React from "react";
import "../css/styles.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-column">
          <img src={logo} alt="Pops and Ruby's Logo" className="footer-logo" />
          <p className="footer-title">Pops and Ruby's Tap & Grill</p>
          <p>Cambridge, Ontario</p>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📍 200 Preston Pkwy, Cambridge, ON N3H 5N1</p>
          <p>📞 (519) 653-4814</p>
          <p>🕒 Daily: 11:00 AM – 11:00 PM</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Connect</h4>
          <p>
            <a
              href="https://www.facebook.com/137675976246999/"
              target="_blank"
              rel="noopener noreferrer">
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/explore/locations/297984953/pops-rubys-tap-grill/"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.skipthedishes.com/pops-rubys"
              target="_blank"
              rel="noopener noreferrer">
              Order Online
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Pops and Ruby's. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
