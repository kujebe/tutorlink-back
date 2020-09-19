import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import DashboardTop from "components/customer-dashboard/dashboard-top.component";
import TransactionsList from "components/customer-dashboard/right-section-transactions-list.component";
import CustomerChildrenList from "components/customer-dashboard/right-section-children-list.component";
import SocialAccountList from "components/customer-dashboard/right-section-social-account-list.component";
import MyProfile from "components/customer-dashboard/left-section-my-profile.component";
import MyTelephone from "components/customer-dashboard/left-section-my-telephone.component";
import MyChildren from "components/customer-dashboard/left-section-my-children.component";
import MySocialAccounts from "components/customer-dashboard/left-section-my-social-accounts.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}>
        <DashboardTop />
        <div className={styles.bottom_wrapper}>
          <div className={styles.bottom_left}>
            <MyProfile />
            <MyTelephone />
            <MyChildren />
            <MySocialAccounts />
          </div>
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
