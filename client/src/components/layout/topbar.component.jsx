import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => (
  <div className="topbar-wrapper">
    <Link to="#">How It works</Link>
    <Link to="#">Log In</Link>
    <Link to="#">Sign Up</Link>
  </div>
);

export default Topbar;
