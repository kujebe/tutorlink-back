import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-menu">
      <Link to="#">About Us</Link>
      <Link to="#">Terms of Service</Link>
      <Link to="#">Privacy Policy</Link>
      <Link to="#">Help & Support</Link>
      <Link to="#">How it works</Link>
    </div>
    <div className="copyright">&copy; Copyright {new Date().getFullYear()}</div>
  </div>
);

export default Footer;
