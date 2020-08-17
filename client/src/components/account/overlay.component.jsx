import React from "react";

import styles from "./account.module.scss";

const Overlay = ({ setSignupActive }) => {
  return (
    <div className={styles.overlay_container}>
      <div className={styles.overlay}>
        <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
          <h1>Welcome Back!</h1>
          <p>To keep connected please login with your personal info</p>
          <button
            className={styles.ghost}
            onClick={() => setSignupActive(false)}
          >
            Sign In
          </button>
        </div>
        <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
          <h1>Hello, friend</h1>
          <p>Enter your personal details and start jorney with us</p>
          <button
            type="button"
            className={styles.ghost}
            onClick={() => setSignupActive(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
