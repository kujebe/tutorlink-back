import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  sendForgotPasswordMailStart,
  clearForgotPasswordSuccessNotice,
} from "store/user/user-actions";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import DisplayErrorNotice from "components/display-error-notice/display-error-notice.component";
import DisplaySuccessNotice from "components/display-success-notice/display-success-notice.component";

import styles from "pages/sign-in-sign-up/sign-in-sign-up.module.scss";

const ForgotPassword = ({ show, setShow }) => {
  const [email, setEmail] = useState("");

  const { isAuthenticating, forgotPasswordStatus } = useSelector(
    (state) => state.user
  );
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const HandleSendEmail = (e) => {
    e.preventDefault();
    dispatch(sendForgotPasswordMailStart(email));
  };

  return (
    <form className={show ? styles.fade_in : styles.fade_out}>
      <h1>Forgot Password?</h1>
      <span>Enter your email to reset your password</span>
      <FormInput
        type="email"
        name="email"
        value={email}
        handleChange={handleChange}
        label="Email"
        required
      />

      <div className={styles.fade_toggler} onClick={() => setShow(false)}>
        Have an account? Login
      </div>
      {forgotPasswordStatus && (
        <DisplaySuccessNotice
          closeAction={clearForgotPasswordSuccessNotice}
          value={null}
        >
          {forgotPasswordStatus}
        </DisplaySuccessNotice>
      )}
      {errors.type === "passwordResetFail" || errors.type === "serverFail" ? (
        <DisplayErrorNotice />
      ) : (
        ""
      )}
      <Button
        type="submit"
        buttonType="submit"
        label="Reset Password"
        onClick={HandleSendEmail}
        isLoading={isAuthenticating}
      />
    </form>
  );
};

export default ForgotPassword;
