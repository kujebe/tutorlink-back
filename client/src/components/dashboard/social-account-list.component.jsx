import React from "react";
import { useSelector } from "react-redux";

import styles from "./dashboard-bottom-styles.module.scss";

const SocialAccountList = () => {
  const socialAccounts = useSelector(
    (state) => state.customer.customerData.socialAccounts
  );

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>Social Media Accounts</h2>
      </div>
      <div className={styles.content}>
        {socialAccounts.length > 0
          ? socialAccounts.map((social) => social.fullname)
          : "No social media account"}
      </div>
    </div>
  );
};

export default SocialAccountList;
