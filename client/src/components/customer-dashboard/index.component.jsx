import React from "react";

import DashboardTop from "./dashboard-top.component";
import TransactionsList from "./right-section-transactions-list.component";
import CustomerChildrenList from "./right-section-children-list.component";
import SocialAccountList from "./right-section-social-account-list.component";
import MyProfile from "./left-section-my-profile.component";
import MyTelephone from "./left-section-my-telephone.component";
import MyChildren from "./left-section-my-children.component";
import MySocialAccounts from "./left-section-my-social-accounts.component";

import styles from "./index.module.scss";

const IndexComponent = () => {
    return (
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
    );
};

export default IndexComponent;
