import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import DashboardTop from "components/dashboard/dashboard-top.component";
import TransactionsList from "components/dashboard/transactions-list.component";
import CustomerChildrenList from "components/dashboard/customer-children-list.component";
import SocialAccountList from "components/dashboard/social-account-list.component.jsx";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}>
        <DashboardTop />
        <div className={styles.bottom_wrapper}>
          <div className={styles.bottom_left}>Left</div>
          <div className={styles.bottom_right}>
            <TransactionsList />
            <CustomerChildrenList />
            <SocialAccountList />
          </div>
        </div>
      </div>
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
