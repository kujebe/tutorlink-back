import React from "react";

import styles from "./customer-dashboard-right.module.scss";

const DashboardTeacherProfile = () => {
  return (
    <div className={styles.right}>
      <div className={styles.user}>
        <div className={styles.user_thumbnail}>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile/adejoke.jpg`}
            alt="User Profile"
          />
        </div>
        <h4 className={styles.user_name}>Daniel Adenekan</h4>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Location</div>
        <span>Lagos, Nigeria</span>
      </div>
    </div>
  );
};

export default DashboardTeacherProfile;
