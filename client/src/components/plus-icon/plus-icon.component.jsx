import React from "react";

import styles from "./edit-icon.module.scss";

import { ReactComponent as PlusIcon } from "assets/images/plus-icon.svg";

const PlusIconComponent = () => {
  return (
    <div className={styles.container}>
      <PlusIcon />
    </div>
  );
};

export default PlusIconComponent;
