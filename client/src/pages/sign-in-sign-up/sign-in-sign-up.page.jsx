import React, { useState } from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import SignUp from "components/account-sign-up/account-sign-up.component";
import SignIn from "components/account-sign-in/account-sign-in.component";
import Overlay from "components/account-sign-in-sign-up-overlay/sign-in-sign-up-overlay.component";

import styles from "./sign-in-sign-up.module.scss";

const SignInSignOut = () => {
  const [signupActive, setSignupActive] = useState(false);

  const handleSignupToggle = (status) => {
    setSignupActive(status);
  };

  return (
    <InnerPagesLayout>
      <div
        className={`${styles.account_container} ${
          signupActive && styles.signup_active
        }`}
      >
        <SignUp />
        <SignIn />
        <Overlay handleSignupToggle={handleSignupToggle} />
      </div>
    </InnerPagesLayout>
  );
};

export default SignInSignOut;
