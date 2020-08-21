import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signUpStart } from "store/user/user-actions";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";
import ErrorDisplay from "components/error-display/error-display.component";

import styles from "pages/sign-in-sign-up/sign-in-sign-up.module.scss";

export const SignUp = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirm: "",
    role: "customer",
    errors: {
      same_password: "",
      emptyFields: "",
    },
  });

  const { isAuthenticating } = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleRoleSelect = (e) => {
    const { name } = e.target;
    setState({ ...state, role: name });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { fullname, email, password, password_confirm, role } = state;
    dispatch(
      signUpStart({ fullname, email, password, password_confirm, role })
    );
  };

  return (
    <div className={`${styles.form_container} ${styles.sign_up_container}`}>
      <form className={styles.signup_form}>
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
        <FormInput
          type="password"
          name="password_confirm"
          value={state.password_confirm}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <div className={styles.user_type_wrapper}>
          <label className={styles.user_type}>
            <input
              name="teacher"
              type="checkbox"
              checked={state.role === "teacher" ? true : false}
              onChange={handleRoleSelect}
            />
            I am a teacher
          </label>
          <label className={styles.user_type}>
            <input
              name="customer"
              type="checkbox"
              checked={state.role === "customer" ? true : false}
              onChange={handleRoleSelect}
            />
            I am a customer
          </label>
        </div>
        {errors && errors.type === "signupFail" ? <ErrorDisplay /> : ""}
        <Button
          type="submit"
          buttonType="submit"
          label="Sign Up"
          onClick={handleSignUp}
          isLoading={isAuthenticating}
        />
      </form>
    </div>
  );
};

export default SignUp;
