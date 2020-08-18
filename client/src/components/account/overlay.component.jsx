import React from "react";

import Button from "components/button/button.component";

import styles from "./account.module.scss";

const Overlay = ({ handleSignupToggle }) => {
  return (
    <div className={styles.overlay_container}>
      <div className={styles.overlay}>
        <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
          <h1>Welcome Back!</h1>
          <p>To keep connected please login with your personal info</p>
          <Button
            type="button"
            label="Sign In"
            ghost={true}
            onClick={() => handleSignupToggle(false)}
          />
        </div>
        <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
          <h1>Hello, friend</h1>
          <p>Enter your personal details and start jorney with us</p>
          <Button
            type="button"
            label="Sign Up"
            ghost={true}
            onClick={() => handleSignupToggle(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
