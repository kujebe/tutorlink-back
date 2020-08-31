import React from "react";
import { Link } from "react-router-dom";

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
        <span>5, Force Road, Onikan, Lagos, Nigeria</span>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Member Since</div>
        <span>August 2020</span>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Last Login</div>
        <span>Sept 5th, 2020</span>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Recent Hires</div>
        <Link to="/">Felicia Ike</Link>
        <Link to="/">Bolaji Johnson</Link>
        <Link to="/">Adejoke Ojo</Link>
      </div>
    </div>
  );
};

export default DashboardTeacherProfile;