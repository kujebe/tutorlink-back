import React from "react";

import styles from "./loading-dots.module.scss";

const LoadingDots = ({ message }) => (
  <div className={styles.loading}>{message}</div>
);

export default LoadingDots;
