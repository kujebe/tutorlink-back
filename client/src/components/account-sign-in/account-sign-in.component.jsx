import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { emailSignInStart } from "store/user/user-actions";

import ForgotPassword from "components/account-forgot-password/account-forgot-password.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";
import DisplayErrorNotice from "components/display-error-notice/display-error-notice.component";

import styles from "pages/sign-in-sign-up/sign-in-sign-up.module.scss";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { isAuthenticating } = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSigninWithEmail = (e) => {
    e.preventDefault();
    const { email, password } = state;
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
      <div className={styles.signin_and_forgot}>
        <form className={showForgotPassword ? styles.fade_out : styles.fade_in}>
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
          {errors.type === "signinFail" || errors.type === "serverFail" ? (
            <DisplayErrorNotice />
          ) : (
            ""
          )}
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
            onClick={handleSigninWithEmail}
            isLoading={isAuthenticating}
          />
        </form>
        <ForgotPassword
          show={showForgotPassword}
          setShow={setShowForgotPassword}
        />
      </div>
    </div>
  );
};

export default SignIn;
