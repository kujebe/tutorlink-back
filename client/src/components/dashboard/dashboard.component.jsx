import React from "react";

import styles from "./dashboard.module.scss";

const Dashboard = () => (
  <div className={styles.main_wrapper}>
    <div className={styles.main}>
      <div className={styles.wrapper}>Middle</div>
    </div>
    <div className={styles.right}>Right</div>
  </div>
);

export default Dashboard;
