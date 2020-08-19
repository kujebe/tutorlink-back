import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutStart } from "store/user/user-actions";

import styles from "./user-menu-dropdown.module.scss";

const UserMenuDropdown = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOutStart());
    history.push("/");
  };

  return (
    <div className={styles.menu_dropdown}>
      <div onClick={logout}>Sign Out</div>
    </div>
  );
};

export default UserMenuDropdown;
