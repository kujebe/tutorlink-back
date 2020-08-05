import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MessageIcon } from "assets/images/messages-icon.svg";
import { ReactComponent as NotificationIcon } from "assets/images/bell-icon.svg";
import { ReactComponent as HelpIcon } from "assets/images/question-icon.svg";

const TopbarPrivate = () => (
  <div className="topbar-private-wrapper">
    <div className="icon-container">
      <HelpIcon />
    </div>
    <div className="icon-container">
      <MessageIcon />
    </div>
    <div className="icon-container">
      <NotificationIcon />
    </div>
    <div className="profile-and-dropdown">
      <div className="user-thumbnail">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile/adejoke.jpg`}
          alt="User Profile"
        />
      </div>
    </div>
  </div>
);

export default TopbarPrivate;
