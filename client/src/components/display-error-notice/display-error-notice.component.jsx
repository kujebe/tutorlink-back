import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors } from "store/errors/error-actions";

import styles from "./display-error-notice.module.scss";

const DisplayErrorNotice = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  if (errors.type === "serverFail") {
    errors.message = "Something went wrong, try again";
  }

  return (
    <div className={styles.error_notice_wrapper}>
      <div
        className={styles.close}
        onClick={() => dispatch(clearErrors())}
      ></div>
      {errors.message}
    </div>
  );
};

export default DisplayErrorNotice;
