import React from "react";
import { useDispatch } from "react-redux";
import { signOutStart } from "store/user/user-actions";

import styles from "./user-menu-dropdown.module.scss";

const UserMenuDropdown = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.menu_dropdown}>
      <div onClick={() => dispatch(signOutStart())}>Sign Out</div>
    </div>
  );
};

export default UserMenuDropdown;
