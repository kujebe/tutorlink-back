import React from "react";

import styles from "./account.module.scss";

const SignUpForm = () => {
  return (
    <div className={`${styles.form_container} ${styles.sign_up_container}`}>
      <form>
        <h1>Create Account</h1>
        <span>Register to experience awesomeness</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
