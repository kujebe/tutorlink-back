import React, { useState, useEffect } from "react";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import SearchComponent from "components/search/search.component";
import SearchForm from "components/search-form/search-form.component";

import styles from "./search.module.scss";

const SearchPage = () => {
  const [state, setState] = useState({
    teachersList: null,
    totalTeachers: 0,
    currentPage: 1,
  });
  const limit = 4;
  const numberOfPages =
    state.totalTeachers % limit === 0
      ? Math.floor(state.totalTeachers / limit)
      : Math.floor(state.totalTeachers / limit) + 1;

  const fetchData = (currentPage) => {
    fetch(`/api/v1/teachers/search/?page=${currentPage}&limit=${limit}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((result) => {
        setState({
          ...state,
          teachersList: result.data,
          totalTeachers: result.count,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(state.currentPage);
  }, [state.currentPage]);

  const { teachersList } = state;

  return (
    <InnerPagesLayout>
      <div className={styles.search_container}>
        <div className={styles.search_box_container}>
          <h2>Find Teachers</h2>
          <SearchForm />
        </div>
        <div className={styles.pagination}>Pagination</div>
        {[...Array(numberOfPages)].map((page, index) => (
          <div onClick={() => fetchData(index + 1)}>Page {index + 1}</div>
        ))}
        <div className={styles.results_container}>
          {teachersList &&
            teachersList.map((teacher) => (
              <div>{teacher.firstname + " " + teacher.lastname}</div>
            ))}
        </div>
      </div>
    </InnerPagesLayout>
  );
};

export default SearchPage;
