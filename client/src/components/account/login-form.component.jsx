import React, { useState } from "react";

import styles from "./account.module.scss";

const LoginForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
      <div className={styles.signin_and_forgot}>
        <form className={showForgotPassword ? styles.fade_out : styles.fade_in}>
          <h1>Sign In</h1>
          <span>Login with your username and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div
            className={styles.fade_toggler}
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot your password?
          </div>
          <button type="button">Sign in</button>
        </form>
        <form className={showForgotPassword ? styles.fade_in : styles.fade_out}>
          <h1>Forgot Password?</h1>
          <span>Enter your email to reset your password</span>
          <input type="email" placeholder="Email" />

          <div
            className={styles.fade_toggler}
            onClick={() => setShowForgotPassword(false)}
          >
            Have an account? Login
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
