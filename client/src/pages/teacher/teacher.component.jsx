import React from "react";
import useRequest from "custom-hooks/swr-hoc";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import "./teacher.styles.scss";

const TeacherPage = () => {
  const { data, error } = useRequest("/teachers/", "felicia-ike");
  console.log(data);

  return (
    <InnerPagesLayout>
      <div>Single Teacher page</div>
    </InnerPagesLayout>
  );
};

export default TeacherPage;
