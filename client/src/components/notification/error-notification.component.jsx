import React from "react";

import styles from "./notification.module.scss";

const ErrorNotification = ({ children }) => {
  return (
    <div className={`${styles.notification} ${styles.error}`}>{children}</div>
  );
};

export default ErrorNotification;
