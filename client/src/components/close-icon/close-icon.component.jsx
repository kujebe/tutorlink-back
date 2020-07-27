import React from "react";
import { useDispatch } from "react-redux";

import { selectTeacherSlug } from "store/teacher/teacher-actions";

import styles from "./close-icon.module.scss";

const CloseIcon = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.close}
      onClick={() => dispatch(selectTeacherSlug(""))}
    ></div>
  );
};

export default CloseIcon;
