import React from "react";

import styles from "./notification.module.scss";

const SuccessNotification = ({ children }) => {
  return (
    <div className={`${styles.notification} ${styles.success}`}>{children}</div>
  );
};

export default SuccessNotification;
