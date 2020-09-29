import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTeachersStart } from "store/search/search-actions";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
// import SearchComponent from "components/search/search.component";
import SearchForm from "components/search-form/search-form.component";
import Spinner from "components/spinner/spinner.component";

import styles from "./search.module.scss";

const SearchPage = () => {
  const {
    teachersList,
    teachersCount,
    startPage,
    limit,
    isLoading,
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const numberOfPages =
    teachersCount % limit === 0
      ? Math.floor(teachersCount / limit)
      : Math.floor(teachersCount / limit) + 1;

  useEffect(() => {
    dispatch(fetchTeachersStart({ page: startPage, limit }));
  }, [dispatch, limit, startPage]);

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
            <div className={styles.pagination}>Pagination</div>
            {[...Array(numberOfPages)].map((page, index) => (
              <div
                key={index}
                onClick={() =>
                  dispatch(fetchTeachersStart({ page: index + 1, limit }))
                }
              >
                Page {index + 1}
              </div>
            ))}
            <div className={styles.results_container}>
              {teachersList &&
                teachersList.map((teacher) => (
                  <div key={teacher._id}>
                    {teacher.firstname + " " + teacher.lastname}
                  </div>
                ))}
            </div>
          </Fragment>
        )}
      </div>
    </InnerPagesLayout>
  );
};

export default SearchPage;
