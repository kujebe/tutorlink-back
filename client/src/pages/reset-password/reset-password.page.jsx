import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useQuery from "custom-hooks/use-query";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import DisplaySuccessNotice from "components/display-success-notice/display-success-notice.component";
import DisplayErrorNotice from "components/display-error-notice/display-error-notice.component";

import {
  resetPasswordStart,
  clearResetPasswordSuccessNotice,
} from "store/user/user-actions";

import styles from "./reset-password.module.scss";

const PasswordReset = () => {
  const [state, setState] = useState({
    password: "",
    password_confirm: "",
  });

  const { isAuthenticating, resetPasswordStatus } = useSelector(
    (state) => state.user
  );
  const errors = useSelector((state) => state.errors);
  let query = useQuery();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    const resetData = {
      password: state.password,
      password_confirm: state.password_confirm,
      userId: query.get("id"),
      token: query.get("token"),
    };

    dispatch(resetPasswordStart(resetData));
  };

  return (
    <InnerPagesLayout>
      <div className={styles.wrapper}>
        <div className={styles.form_container}>
          <form>
            <h1>Password Reset</h1>
            <span>Enter new password below</span>
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

            {resetPasswordStatus && (
              <DisplaySuccessNotice
                closeAction={clearResetPasswordSuccessNotice}
                value={null}
              >
                {resetPasswordStatus}
              </DisplaySuccessNotice>
            )}
            {errors.type === "resetPasswordFail" ||
            errors.type === "serverFail" ? (
              <DisplayErrorNotice />
            ) : (
              ""
            )}
            <Button
              type="submit"
              buttonType="submit"
              label="Reset Password"
              onClick={handleReset}
              isLoading={isAuthenticating}
            />
          </form>
        </div>
      </div>
    </InnerPagesLayout>
  );
};

export default PasswordReset;
