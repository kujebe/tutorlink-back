import React from "react";
import { useParams } from "react-router-dom";

import useRequest from "custom-hooks/swr-hoc";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import "./teacher.styles.scss";

const TeacherPage = () => {
  const { slug } = useParams();
  const { data, error } = useRequest("/teachers/", slug);

  if (!data) {
    return "";
  }

  if (data && !error) {
    // if (data.error.notFound) {
    //   return (
    //     <InnerPagesLayout>
    //       <div>User not found</div>
    //     </InnerPagesLayout>
    //   );
    // }
    const { teacher, subjectSkills, techSkills } = data;
    console.log(data);
  }

  return (
    <InnerPagesLayout>
      <div>{data.teacher.address}</div>
    </InnerPagesLayout>
  );
};

export default TeacherPage;
