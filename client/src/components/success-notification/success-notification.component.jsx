import React from "react";
import { useDispatch } from "react-redux";

import styles from "./success-notification.module.scss";

const SuccessNotification = ({ children, closeAction, value }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.notice_wrapper}>
      <div
        className={styles.close}
        onClick={() => dispatch(closeAction(value))}
      ></div>
      {children}
    </div>
  );
};

export default SuccessNotification;
