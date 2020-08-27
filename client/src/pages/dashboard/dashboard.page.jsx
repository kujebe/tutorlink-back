import React from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import Dashboard from "components/dashboard/dashboard.component";
import SearchForm from "components/search-form/search-form.component";

import styles from "./dashboard-page.module.scss";

const DashboardPage = () => (
  <InnerPagesLayout>
    <div className={styles.dashboard_container}>
      <SearchForm />
      <Dashboard />
    </div>
  </InnerPagesLayout>
);

export default DashboardPage;
