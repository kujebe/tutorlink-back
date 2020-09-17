import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import DashboardTop from "components/dashboard/dashboard-top.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}>
        <DashboardTop />
      </div>
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
