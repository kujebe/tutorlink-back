import React from "react";
import { useSelector } from "react-redux";

import styles from "./error-display.module.scss";

const ErrorDisplay = () => {
  const errors = useSelector((state) => state.errors);
  if (errors.type === "serverFail") {
    error.message = "Something went wrong, try again";
  }
  return <div className={styles.error}>{errors.message}</div>;
};

export default ErrorDisplay;
