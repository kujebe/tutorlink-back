import React, { useState } from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import Overlay from "components/account/overlay.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import styles from "components/account/account.module.scss";

const SignInSignOut = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const signUp = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

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
        <div className={`${styles.form_container} ${styles.sign_up_container}`}>
          <form>
            <h1>Create Account</h1>
            <span>Register to experience awesomeness</span>
            <FormInput
              type="text"
              name="fullname"
              value={state.fullname}
              handleChange={handleChange}
              label="Full Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={state.email}
              handleChange={handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={state.password}
              handleChange={handleChange}
              label="Password"
              required
            />
            <Button
              type="submit"
              buttonType="submit"
              label="Sign Up"
              onClick={(e) => signUp(e)}
              isLoading={isLoading}
            />
          </form>
        </div>

        <div className={`${styles.form_container} ${styles.sign_in_container}`}>
          <div className={styles.signin_and_forgot}>
            <form
              className={showForgotPassword ? styles.fade_out : styles.fade_in}
            >
              <h1>Sign In</h1>
              <span>Login with your username and password</span>
              <FormInput
                type="email"
                name="email"
                value={state.email}
                handleChange={handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={state.password}
                handleChange={handleChange}
                label="Password"
                required
              />
              <div
                className={styles.fade_toggler}
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot your password?
              </div>
              <Button
                type="submit"
                buttonType="submit"
                label="Sign In"
                onClick={(e) => signUp(e)}
                isLoading={isLoading}
              />
            </form>
            <form
              className={showForgotPassword ? styles.fade_in : styles.fade_out}
            >
              <h1>Forgot Password?</h1>
              <span>Enter your email to reset your password</span>
              <FormInput
                type="email"
                name="email"
                value={state.email}
                handleChange={handleChange}
                label="Email"
                required
              />

              <div
                className={styles.fade_toggler}
                onClick={() => setShowForgotPassword(false)}
              >
                Have an account? Login
              </div>
              <Button
                type="submit"
                buttonType="submit"
                label="Reset Password"
                onClick={(e) => signUp(e)}
                isLoading={isLoading}
              />
            </form>
          </div>
        </div>

        <Overlay handleSignupToggle={handleSignupToggle} />
      </div>
    </InnerPagesLayout>
  );
};

export default SignInSignOut;
