import React from "react";

import styles from "./edit-icon.module.scss";

import { ReactComponent as EditIcon } from "assets/images/edit-icon.svg";

const EditIconComponent = () => {
  return (
    <div className={styles.container}>
      <EditIcon />
    </div>
  );
};

export default EditIconComponent;
