import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDashboardDataStart } from "store/customer/customer-actions";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  const { id, token } = useSelector((state) => state.user.sessionData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardDataStart({ userId: id, token }));
  });

  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}></div>
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
