import React from "react";

import useRequest from "custom-hooks/swr-hoc";

import TeacherProfileSummary from "components/teacher-profile-summary/teacher-profile-summary.component";
import CustomerDashboardRight from "./customer-dashboard-right.component";

import styles from "./customer-dashboard.module.scss";

const CustomerDashboard = () => {
  const { data, error } = useRequest("/teachers/");
  if (!data) {
    return "";
  }

  if (data && !error) {
    console.log(data);
    if (data.error && data.error.notFound) {
      return (
        // <InnerPagesLayout>
        <div className={styles.not_found_wrapper}>
          <span>:TEACHER NOT FOUND:</span>
        </div>
        // </InnerPagesLayout>
      );
    }

    return (
      <div className={styles.main_wrapper}>
        <div className={styles.main}>
          {data.map((teacher) => (
            <TeacherProfileSummary key={teacher._id} teacher={teacher} />
          ))}
        </div>
        <CustomerDashboardRight />
      </div>
    );
  }
};

export default CustomerDashboard;
