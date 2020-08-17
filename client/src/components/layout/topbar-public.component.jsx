import React from "react";
import { Link } from "react-router-dom";

const TopbarPublic = () => (
  <div className="topbar-public-wrapper">
    <Link to="#">How It works</Link>
    <Link to="/account">Log In</Link>
    <Link to="/account">Sign Up</Link>
  </div>
);

export default TopbarPublic;
