import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSelectedTeacherDetailsStart } from "store/teacher/teacher-actions";

import Spinner from "components/spinner/spinner.component";
import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import "./teacher.styles.scss";

const TeacherPage = () => {
  const params = useParams();
  console.log(params.slug);
  const dispatch = useDispatch();
  const selectedTeacherSlug = useSelector(
    (state) => state.teacher.selectedTeacherSlug
  );

  useEffect(() => {
    dispatch(fetchSelectedTeacherDetailsStart(selectedTeacherSlug));
  }, [dispatch]);

  return (
    <InnerPagesLayout>
      <div>Single Teacher page</div>
    </InnerPagesLayout>
  );
};

export default TeacherPage;
