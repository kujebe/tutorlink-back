import React from "react";

import EditIcon from "components/edit-icon/edit-icon.component";

import styles from "./left-section.module.scss";

const MyProfile = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>My Profile</div>
        <div className={styles.edit_profile}>
          <EditIcon />
        </div>
      </div>
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default MyProfile;
