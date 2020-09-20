import React from "react";

import EditIcon from "components/edit-icon/edit-icon.component";

import styles from "./left-section.module.scss";

const MyChildren = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>My Children</div>
        <div className={styles.edit_profile}>
          <EditIcon />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper}>
          <div className={styles.content_title}>Name: </div>
          <div className={styles.content_value}>Oluwaseun Kujebe</div>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.content_title}>Address: </div>
          <div className={styles.content_value}>
            4 Tom Johns Avevue, ilupeju lagos
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildren;
