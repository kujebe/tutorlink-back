import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.png";
import { ReactComponent as FacebookIcon } from "assets/images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "assets/images/twitter-icon.svg";
import { ReactComponent as TwitterIcon } from "assets/images/instagram-icon.svg";

import "components/layout/layout.styles.scss";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <Link to="/" className="sidebar_logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="menu_wrapper">
          <Link to="#">Home</Link>
          <Link to="#">For Teachers</Link>
          <Link to="#">For Parents</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="footer">
          <div className="address">5 Force Road, Onikan, Lagos, Nigeria</div>
          <div className="phone">
            +1-234--567-2401 <br />
            +234-9062738903
          </div>
          <div className="social">
            <Link to="#">
              <FacebookIcon />
            </Link>
            <Link to="#">
              <TwitterIcon />
            </Link>
            <Link to="#">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
