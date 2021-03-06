import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logOutStart } from "store/user/user-actions";

import styles from "./user-menu-dropdown.module.scss";

const UserMenuDropdown = () => {
  const sessionToken = useSelector((state) => state.user.sessionData.token);

  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOutStart(sessionToken));
    history.push("/account");
  };

  return (
    <div className={styles.menu_dropdown}>
      <div className={styles.menu_item}>
        <Link to="/customer">View Profile</Link>
      </div>
      <div onClick={logout} className={styles.menu_item}>
        Sign Out
      </div>
    </div>
  );
};

export default UserMenuDropdown;
