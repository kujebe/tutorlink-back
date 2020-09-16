import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDashboardDataStart } from "store/customer/customer-actions";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import DashboardTop from "components/dashboard/dashboard-top.component";
import Spinner from "components/spinner/spinner.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  const { id, token } = useSelector((state) => state.user.sessionData);
  const { dashboardTopData } = useSelector(
    (state) => state.customer.customerData
  );
  const { isLoading } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardDataStart({ userId: id, token }));
  }, [id, token, dispatch]);

  console.log(dashboardTopData);

  return (
    <InnerPagesLayout>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.dashboard_container}>
          <DashboardTop topData={dashboardTopData} />
        </div>
      )}
    </InnerPagesLayout>
  );
};

export default CustomerDashboard;
