import React from "react";
import { useSelector } from "react-redux";

import styles from "./dashboard-bottom-styles.module.scss";

const ChildrenList = () => {
  const children = useSelector(
    (state) => state.customer.customerData.customerChildren
  );

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>Registered Children</h2>
        <span className={styles.count}>{`(${children.length})`}</span>
      </div>
      <div className={styles.content}>
        {children.length > 0
          ? children.map((child) => child.fullname)
          : "No registerd  child"}
      </div>
    </div>
  );
};

export default ChildrenList;
