import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import DashboardTop from "components/customer-dashboard/dashboard-top.component";
import TransactionsList from "components/customer-dashboard/section-transactions-list.component";
import CustomerChildrenList from "components/customer-dashboard/section-children-list.component";
import SocialAccountList from "components/customer-dashboard/section-social-account-list.component";

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
