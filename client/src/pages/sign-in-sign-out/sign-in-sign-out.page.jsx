import React, { useState, useEffect } from "react";

import useQuery from "custom-hooks/use-query";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import styles from "components/account/account.module.scss";

const SignInSignOut = () => {
  const [signupActive, setSignupActive] = useState(false);
  const query = useQuery();

  // useEffect(() => {
  //   if (query.get("action") === "signup") {
  //     setSignupActive(true);
  //   } else if (query.get("action") === "login") {
  //     setSignupActive(false);
  //   } else {
  //     setSignupActive(false);
  //   }
  // }, []);

  console.log(signupActive);

  return (
    <InnerPagesLayout>
      <div
        className={`${styles.account_container} ${
          signupActive && styles.signup_active
        }`}
      >
        <div className={`${styles.form_container} ${styles.sign_up_container}`}>
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className={`${styles.form_container} ${styles.sign_in_container}`}>
          <form action="#">
            <h1>Sign In</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/">Forgot your password?</a>
            <button type="button">Sign in</button>
          </form>
        </div>
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
      </div>
    </InnerPagesLayout>
  );
};

export default SignInSignOut;
