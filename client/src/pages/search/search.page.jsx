import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTeachersStart } from "store/search/search-actions";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import TeacherProfileSummary from "components/teacher-profile-summary/teacher-profile-summary.component";
import SearchForm from "components/search-form/search-form.component";
import Spinner from "components/spinner/spinner.component";
import PaginationComponent from "components/pagination/pagination.component"

import styles from "./search.module.scss";

const SearchPage = () => {
  const {
    teachersList,
    page,
    limit,
    isLoading,
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTeachersStart({ page, limit }));
  }, [fetchTeachersStart]);

  return (
    <InnerPagesLayout>
      <div className={styles.search_container}>
        <div className={styles.search_box_container}>
          <h2>Find Teachers</h2>
          <SearchForm />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
            <Fragment>
              <PaginationComponent />
              <div className={styles.results_container}>
                {teachersList &&
                  teachersList.map((teacher) => (
                    <TeacherProfileSummary key={teacher._id} teacher={teacher} />
                  ))}
              </div>
              <PaginationComponent />
            </Fragment>
          )}
      </div>
    </InnerPagesLayout>
  );
};

export default SearchPage;
