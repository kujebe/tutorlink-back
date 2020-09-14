import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}></div>
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
