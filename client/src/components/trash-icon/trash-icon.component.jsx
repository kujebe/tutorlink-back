import React from "react";

import styles from "./trash-icon.module.scss";

import { ReactComponent as TrashIcon } from "assets/images/trash-icon.svg";

const TrashIconComponent = ({ action, value }) => {
  return (
    <div className={styles.container}>
      <TrashIcon onClick={() => action(value)} />
    </div>
  );
};

export default TrashIconComponent;
