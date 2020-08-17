import React, { useState } from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import SignUpForm from "components/account/sign-up-form.component";
import LoginForm from "components/account/login-form.component";
import Overlay from "components/account/overlay.component";

import styles from "components/account/account.module.scss";

const SignInSignOut = () => {
  const [signupActive, setSignupActive] = useState(false);

  return (
    <InnerPagesLayout>
      <div
        className={`${styles.account_container} ${
          signupActive && styles.signup_active
        }`}
      >
        <SignUpForm />
        <LoginForm />
        <Overlay setSignupActive={setSignupActive} />
      </div>
    </InnerPagesLayout>
  );
};

export default SignInSignOut;
