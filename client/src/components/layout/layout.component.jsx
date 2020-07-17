import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

import Sidebar from "components/sidebar/sidebar.component";

import "./layout.styles.scss";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="layout">
        <input
          type="checkbox"
          id="sidebarToggler"
          className="sidebar_toggle_checker"
        />
        <label htmlFor="sidebarToggler" className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </label>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <Sidebar />
        <section className="main_content">{children}</section>
      </div>
    </Fragment>
  );
};

export default Layout;
