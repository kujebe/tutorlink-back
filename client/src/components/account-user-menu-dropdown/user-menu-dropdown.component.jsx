import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutStart } from "store/user/user-actions";

import styles from "./user-menu-dropdown.module.scss";

const UserMenuDropdown = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.menu_dropdown}>
      <Link as="div" onClick={() => dispatch(signOutStart())}>
        Sign Out
      </Link>
    </div>
  );
};

export default UserMenuDropdown;
