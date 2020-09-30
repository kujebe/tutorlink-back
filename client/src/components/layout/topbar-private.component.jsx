import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleUserMenu } from "store/user/user-actions";

import UserMenuDropdown from "components/account-user-menu-dropdown/user-menu-dropdown.component";

import { ReactComponent as MessageIcon } from "assets/images/messages-icon.svg";
import { ReactComponent as NotificationIcon } from "assets/images/bell-icon.svg";
import { ReactComponent as HelpIcon } from "assets/images/question-icon.svg";
import { ReactComponent as UserProfile } from "assets/images/user-profile-icon.svg";
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";

const TopbarPrivate = () => {
  const hideMenu = useSelector((state) => state.user.hideMenu);
  const profilePhoto = useSelector(
    (state) => state.customer.customerData.profilePhoto
  );
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="topbar-private-wrapper">
      <div className="icon-container">
        <SearchIcon onClick={() => history.push("/search")} className="search-icon" />
      </div>
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
          {profilePhoto ? (
            <img
              src={`${process.env.PUBLIC_URL}/images/customer-avatar/${profilePhoto}`}
              alt="User profile"
            />
          ) : (
              <UserProfile className="avatar" />
            )}
        </div>
      </div>
      {hideMenu ? null : <UserMenuDropdown />}
    </div>
  );
};

export default TopbarPrivate;
