import React from "react";
import { useSelector } from "react-redux";

import styles from "./right-section.module.scss";

const CustomerChildrenList = () => {
  const children = useSelector(
    (state) => state.customer.customerData.customerChildren
  );

  console.log(children);

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>Registered Children</h2>
        <span className={styles.count}>{`(${children.length})`}</span>
      </div>
      <div className={styles.content}>
        {children.length > 0 && (
          <div className={`${styles.child_row} ${styles.head}`}>
            <div
              className={`${styles.child_cell} ${styles.small_cell} ${styles.serial_number}`}
            >
              {" "}
            </div>
            <div className={`${styles.child_cell} ${styles.big_cell}`}>
              Name
            </div>
            <div className={`${styles.child_cell} ${styles.big_cell}`}>
              School
            </div>
            <div className={`${styles.child_cell} ${styles.small_cell}`}>
              Age
            </div>
            <div className={`${styles.child_cell} ${styles.small_cell}`}>
              Class
            </div>
            <div className={`${styles.child_cell} ${styles.small_cell}`}>
              Gender
            </div>
          </div>
        )}
        {children.length > 0
          ? children.map((child, index) => (
              <div key={child._id} className={styles.child_row}>
                <div
                  className={`${styles.child_cell} ${styles.small_cell}  ${styles.serial_number}`}
                >
                  {index + 1}
                </div>
                <div
                  className={`${styles.child_cell} ${styles.big_cell} ${styles.name}`}
                >
                  {child.fullname}
                </div>
                <div className={`${styles.child_cell} ${styles.big_cell}`}>
                  {child.school}
                </div>
                <div className={`${styles.child_cell} ${styles.small_cell}`}>
                  {child.age}
                </div>
                <div className={`${styles.child_cell} ${styles.small_cell}`}>
                  {child.class}
                </div>
                <div
                  className={`${styles.child_cell} ${styles.small_cell} ${styles.gender}`}
                >
                  {child.gender}
                </div>
              </div>
            ))
          : "No registerd  child"}
      </div>
    </div>
  );
};

export default CustomerChildrenList;
