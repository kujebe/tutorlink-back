import React from "react";

import CustomerDashboardRight from "./customer-dashboard-right.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => (
  <div className={styles.main_wrapper}>
    <div className={styles.main}>
      <div className={styles.wrapper}>Middle</div>
    </div>
    <CustomerDashboardRight />
  </div>
);

export default CustomerDashboard;
