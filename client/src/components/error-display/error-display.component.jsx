import React from "react";
import { useSelector } from "react-redux";

import styles from "./error-display.module.scss";

const ErrorDisplay = () => {
  const errors = useSelector((state) => state.errors);
  return <div className={styles.error}>{errors.message}</div>;
};

export default ErrorDisplay;
