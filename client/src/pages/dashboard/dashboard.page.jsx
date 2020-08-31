import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import CustomerDashboard from "components/dashboard/customer-dashboard.component";
import SearchForm from "components/search-form/search-form.component";

import styles from "./dashboard-page.module.scss";

const DashboardPage = () => {
  return (
    <InnerPagesLayout>
      <div className={styles.dashboard_container}>
        <SearchForm />
        <CustomerDashboard />
      </div>
    </InnerPagesLayout>
  );
};

export default DashboardPage;
