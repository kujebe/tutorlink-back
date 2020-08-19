import React from "react";

import styles from "./error-display.module.scss";

const ErrorDisplay = ({ value }) => {
  const text = value === "Unauthorized" ? "Incorrect login" : value;
  return <div className={styles.error}>{text}</div>;
};

export default ErrorDisplay;
