import React from "react";
import { useDispatch } from "react-redux";

import styles from "./close-modal-icon.module.scss";

const CloseModalIcon = ({ closeAction, value }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.close}
      onClick={() => dispatch(closeAction(value))}
    ></div>
  );
};

export default CloseModalIcon;
