import React from "react";

import styles from "./plus-icon.module.scss";

import { ReactComponent as PlusIcon } from "assets/images/plus-icon.svg";

const PlusIconComponent = ({ action, status }) => {
  return (
    <div className={styles.container}>
      <PlusIcon onClick={() => action(status)} />
    </div>
  );
};

export default PlusIconComponent;
