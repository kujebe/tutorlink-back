import React from "react";
import { useDispatch } from "react-redux";

import { selectTeacherForDetails } from "store/map/map-actions";

import styles from "./close-icon.module.scss";

const CloseIcon = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.close}
      onClick={() => dispatch(selectTeacherForDetails(""))}
    ></div>
  );
};

export default CloseIcon;
