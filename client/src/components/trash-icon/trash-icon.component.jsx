import React from "react";

import styles from "./trash-icon.module.scss";

import { ReactComponent as TrashIcon } from "assets/images/trash-icon.svg";

const TrashIconComponent = () => {
  return (
    <div className={styles.container}>
      <TrashIcon />
    </div>
  );
};

export default TrashIconComponent;
