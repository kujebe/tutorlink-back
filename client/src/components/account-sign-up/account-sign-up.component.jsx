import React, { useState } from "react";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import styles from "pages/sign-in-sign-up/sign-in-sign-up.module.scss";

export const SignUp = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    userType: "customer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleUserTypeSelect = (e) => {
    const { name } = e.target;
    setState({ ...state, userType: name });
  };

  return (
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
        <div className={styles.user_type_wrapper}>
          <label className={styles.user_type}>
            <input
              name="teacher"
              type="checkbox"
              checked={state.userType === "teacher" ? true : false}
              onChange={handleUserTypeSelect}
            />
            I am a teacher
          </label>
          <label className={styles.user_type}>
            <input
              name="customer"
              type="checkbox"
              checked={state.userType === "customer" ? true : false}
              onChange={handleUserTypeSelect}
            />
            I am a customer
          </label>
        </div>
        <Button
          type="submit"
          buttonType="submit"
          label="Sign Up"
          onClick={(e) => console.log("Clicked")}
          // isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default SignUp;
