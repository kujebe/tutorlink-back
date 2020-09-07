import React from "react";
import { useDispatch } from "react-redux";

import styles from "./close-modal-icon.module.scss";

const CloseModalIcon = ({ closeAction }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.close}
      onClick={() => dispatch(closeAction({}))}
    ></div>
  );
};

export default CloseModalIcon;
