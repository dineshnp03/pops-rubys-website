import React from "react";
import "../css/styles.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Pops and Ruby's Logo"
        width="40"
        height="40"
        className="mb-2"
      />
      <p>&copy; 2025 Pops and Ruby's. All rights reserved.</p>
      <p>Follow us on social media @PopsAndRubys</p>
    </footer>
  );
}

export default Footer;
