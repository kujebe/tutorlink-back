import React from "react";

import styles from "./edit-icon.module.scss";

import { ReactComponent as EditIcon } from "assets/images/edit-icon.svg";

const EditIconComponent = ({ action, value, index }) => {
  return (
    <div className={styles.container}>
      <EditIcon onClick={() => action(value, index)} />
    </div>
  );
};

export default EditIconComponent;
