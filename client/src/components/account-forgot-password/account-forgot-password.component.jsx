import React, { useState } from "react";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import styles from "pages/sign-in-sign-up/sign-in-sign-up.module.scss";

const ForgotPassword = ({ show, setShow }) => {
  const [state, setState] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form className={show ? styles.fade_in : styles.fade_out}>
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

      <div className={styles.fade_toggler} onClick={() => setShow(false)}>
        Have an account? Login
      </div>
      <Button
        type="submit"
        buttonType="submit"
        label="Reset Password"
        onClick={(e) => console.log("Clicked")}
        // isLoading={isLoading}
      />
    </form>
  );
};

export default ForgotPassword;
