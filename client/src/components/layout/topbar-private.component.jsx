import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleUserMenu } from "store/user/user-actions";

import UserMenuDropdown from "components/account-user-menu-dropdown/user-menu-dropdown.component";

import { ReactComponent as MessageIcon } from "assets/images/messages-icon.svg";
import { ReactComponent as NotificationIcon } from "assets/images/bell-icon.svg";
import { ReactComponent as HelpIcon } from "assets/images/question-icon.svg";

const TopbarPrivate = () => {
  const hideMenu = useSelector((state) => state.user.hideMenu);
  const dispatch = useDispatch();
  return (
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
      <div
        className="profile-and-dropdown"
        onClick={() => dispatch(toggleUserMenu())}
      >
        <div className="user-thumbnail">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile/adejoke.jpg`}
            alt="User Profile"
          />
        </div>
      </div>
      {hideMenu ? null : <UserMenuDropdown />}
    </div>
  );
};

export default TopbarPrivate;
