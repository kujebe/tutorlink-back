import React, { useState } from "react";

import FormInput from "components/form-input/form-input.component";
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";

import styles from "./search-form.module.scss";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <FormInput
        type="text"
        name="search"
        value={searchQuery}
        handleChange={onChangeHandler}
        label="Search for teachers near you"
        required
      />
    </div>
  );
};

export default SearchForm;
